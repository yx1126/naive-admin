<template>
    <div class="wang-editor-wrapper">
        <Toolbar class="wang-editor-toolbar" :defaultConfig="toolbarConfig" :editor="editor" />
        <Editor class="wang-editor" v-bind="attrs" :style="editorStyle" v-model="valueHtml" :defaultConfig="editorConfig" @onCreated="onCreated" />
        <div class="wang-editor-mask" v-show="isShowMask" @click="onCloseModal"></div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, nextTick, useAttrs } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor } from "@wangeditor/editor";
import { snToCssVars, saToArray } from "@/util";
import type { IDomEditor, IEditorConfig, IToolbarConfig, Toolbar as ToolbarType } from "@wangeditor/editor";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

defineOptions({
    inheritAttrs: false,
});

interface IMenuGroup {
    key: string;
    title: string;
    iconSvg?: string;
    menuKeys: string[];
}

interface WangEditorType {
    value?: string;
    mode?: "default" | "simple";
    placeholder?: string;
    readonly?: boolean;
    autoFocus?: boolean;
    height?: string | number;
    toolbar?: string[] | IMenuGroup[] | string;
    excludeToolBar?: string[] | string;
    modalAppendToBody?: boolean;
    maxLength?: number;
    onMaskClose?: boolean;
}

const props = withDefaults(defineProps<WangEditorType>(), {
    value: "",
    mode: "default",
    placeholder: "请输入内容...",
    readonly: false,
    autoFocus: false,
    height: 500,
    excludeToolBar: () => [],
    modalAppendToBody: true,
    onMaskClose: true,
});

const emit = defineEmits<{
    (e: "update:value", value: string): void;
}>();

const attrs = useAttrs();

let editor = $shallowRef<IDomEditor>();
let toolbarRef = $shallowRef<ToolbarType | null>(null);

let isShowMask = $ref(false);

const valueHtml = $computed({
    get() {
        return props.value;
    },
    set(value) {
        emit("update:value", value);
    },
});

const toolbarConfig = $computed<Partial<IToolbarConfig>>(() => {
    const defaultValue: Partial<IToolbarConfig> = {
        modalAppendToBody: props.modalAppendToBody,
        excludeKeys: saToArray(props.excludeToolBar),
    };
    if (props.toolbar) {
        defaultValue["toolbarKeys"] = saToArray<IMenuGroup>(props.toolbar);
    }
    return defaultValue;
});

const editorConfig = $computed<Partial<IEditorConfig>>(() => {
    return {
        placeholder: props.placeholder,
        readOnly: props.readonly,
        autoFocus: props.autoFocus,
        maxLength: props.maxLength,
    };
});

const editorStyle = $computed(() => ({
    "--editor-height": snToCssVars(props.height),
}));

async function onCreated(editorInstance: IDomEditor) {
    editor = editorInstance;
    toolbarRef = DomEditor.getToolbar(editor);
    await nextTick();
    onModalChange();
}

function onCloseModal() {
    if (!props.onMaskClose) return;
    editor.hidePanelOrModal();
}

function onModalChange() {
    if (!props.modalAppendToBody) return;
    editor.on("modalOrPanelShow", modalOrPanel => {
        if (modalOrPanel.type !== "modal") return;

        const { $elem } = modalOrPanel; // modal element
        const width = $elem.width();
        const height = $elem.height();

        // set modal position z-index
        $elem.css({
            left: "50%",
            top: "50%",
            marginLeft: `-${width / 2}px`,
            marginTop: `-${height / 2}px`,
            zIndex: 10002,
        });

        // show mask
        isShowMask = true;
    });
    editor.on("modalOrPanelHide", () => {
        // hide mask
        isShowMask = false;
    });
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    if (editor == null) return;
    editor.destroy();
});

defineExpose({
    editor,
    toolbar: toolbarRef,
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
    z-index: 10000 !important;
}
.wang-editor-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10005;
    background-color: #00000073;
}
.w-e-select-list {
    z-index: 10001;
}
</style>
