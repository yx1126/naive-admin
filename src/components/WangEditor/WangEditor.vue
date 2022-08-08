<template>
    <div class="wang-editor-wrapper">
        <Toolbar class="wang-editor-toolbar" :default-config="defaultToolbarConfig" :editor="editor" />
        <Editor v-bind="attrs" v-model="valueHtml" class="wang-editor" :style="editorStyle" :default-config="defaultEditorConfig" @on-created="onCreated" />
        <div v-show="isShowMask" class="wang-editor-mask" @click="onCloseModal" />
    </div>
    <n-modal v-model:show="showModal" style="width: 800px;" preset="card" title="预览" :z-index="3000">
        <div class="preview" v-html="valueHtml" />
    </n-modal>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor, Boot } from "@wangeditor/editor";
import { snToCssVars, saToArray } from "@/util";
import type { IDomEditor, IEditorConfig, IToolbarConfig, Toolbar as ToolbarType } from "@wangeditor/editor";
import PreviewMenu from "./plugins/preview";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

// 注册 preview
Boot.registerMenu(PreviewMenu);

interface IMenuGroup {
    key: string;
    title: string;
    iconSvg?: string;
    menuKeys: string[];
}

export default defineComponent({
    name: "WangEditor",
    components: { Editor, Toolbar },
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: "",
        },
        mode: {
            type: String as PropType<"default" | "simple">,
            default: "default",
        },
        placeholder: {
            type: String,
            default: "请输入内容...",
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        autoFocus: {
            type: Boolean,
            default: false,
        },
        height: {
            type: [String, Number],
            default: 500,
        },
        toolbar: [String, Array] as PropType<string[] | IMenuGroup[] | string>,
        excludeToolBar: {
            type: [String, Number] as PropType<string[] | string>,
        },
        modalAppendToBody: {
            type: Boolean,
            default: true,
        },
        maxLength: Number,
        onMaskClose: {
            type: Boolean,
            default: true,
        },
        editorConfig: {
            type: Object as PropType<Partial<IEditorConfig>>,
            default: () => ({}),
        },
        toolbarConfig: {
            type: Object as PropType<Partial<IToolbarConfig>>,
            default: () => ({}),
        },
    },
    emits: ["update:value"],
    setup(props, { attrs, emit, expose }){


        let editor = shallowRef<IDomEditor>();
        let toolbarRef = shallowRef<ToolbarType | null>(null);
        let showModal = ref(false);
        let isShowMask = ref(false);

        const valueHtml = computed<string>({
            get() {
                return props.value;
            },
            set(value) {
                emit("update:value", value);
            },
        });


        const defaultToolbarConfig = computed<Partial<IToolbarConfig>>(() => {
            const defaultValue: Partial<IToolbarConfig> = {
                modalAppendToBody: props.modalAppendToBody,
                excludeKeys: saToArray(props.excludeToolBar),
                insertKeys: {
                    index: -1,
                    keys: ["preview"],
                },
                ...props.toolbarConfig,
            };
            if(props.toolbar) {
                defaultValue["toolbarKeys"] = [...(saToArray<IMenuGroup>(props.toolbar) || [])];
            }
            return defaultValue;
        });

        const defaultEditorConfig = computed<Partial<IEditorConfig>>(() => {
            return {
                placeholder: props.placeholder,
                readOnly: props.readonly,
                autoFocus: props.autoFocus,
                maxLength: props.maxLength,
                ...props.editorConfig,
            };
        });

        const editorStyle = computed(() => ({
            "--editor-height": snToCssVars(props.height),
        }));

        async function onCreated(editorInstance: IDomEditor) {
            editor.value = editorInstance;
            toolbarRef.value = DomEditor.getToolbar(editor.value);
            await nextTick();
            onModalChange();
            onPriview();
        }

        function onCloseModal() {
            if(!props.onMaskClose) return;
            editor.value?.hidePanelOrModal();
        }

        function onModalChange() {
            if(!props.modalAppendToBody) return;
            editor.value?.on("modalOrPanelShow", modalOrPanel => {
                if(modalOrPanel.type !== "modal") return;

                const { $elem } = modalOrPanel; // modal element
                const width = $elem.width();
                const height = $elem.height();

                // set modal position z-index
                $elem.css({
                    left: "50%",
                    top: "50%",
                    marginLeft: `-${width / 2}px`,
                    marginTop: `-${height / 2}px`,
                    zIndex: 3002,
                });

                // show mask
                isShowMask.value = true;
            });
            editor.value?.on("modalOrPanelHide", () => {
                // hide mask
                isShowMask.value = false;
            });
        }

        function onPriview(){
            editor.value?.on("on-priview", () => {
                showModal.value = true;
            });
        }

        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            if(editor.value == null) return;
            editor.value.destroy();
        });

        expose({
            editor,
            toolbar: toolbarRef,
        });

        return {
            attrs,
            editor,
            showModal,
            isShowMask,
            valueHtml,
            defaultToolbarConfig,
            defaultEditorConfig,
            editorStyle,
            onCreated,
            onCloseModal,
        };
    },
});

</script>

<style lang="scss" scoped>
.wang-editor-wrapper {
    border: 1px solid #ccc;
}
.wang-editor-toolbar {
    border-bottom: 1px solid #ccc;
}
.wang-editor {
    height: var(--editor-height) !important;
    overflow-y: hidden;
}
.w-e-full-screen-container {
    z-index: 3000 !important;
}
.wang-editor-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3001;
    background-color: #00000073;
}
.w-e-select-list {
    z-index: 3001;
}

.preview {
    width: 100%;
    height: 500px;
    overflow-y: auto;
}
</style>
