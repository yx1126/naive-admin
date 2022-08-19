<template>
    <VueEditor :editor="editor" />
</template>

<script setup lang="ts">
import {
    Editor,
    rootCtx,
    editorViewOptionsCtx,
    serializerCtx,
    editorViewCtx,
    defaultValueCtx,
    type MilkdownPlugin,
    type Ctx,
    type DefaultValue,
} from "@milkdown/core";
import { nord, nordDark, nordLight } from "@milkdown/theme-nord";
import { VueEditor, useEditor } from "@milkdown/vue";
import { gfm } from "@milkdown/preset-gfm";
import { tooltip } from "@milkdown/plugin-tooltip";
import { menu } from "@milkdown/plugin-menu";
import { switchTheme, insert } from "@milkdown/utils";
import { isArray } from "@/util/validata";

const props = withDefaults(defineProps<{
    defaultValue?: DefaultValue;
    readonly?: boolean;
    plugin?: MilkdownPlugin | Array<MilkdownPlugin | MilkdownPlugin[]>;
    onSetCtx?: (ctx: Ctx) => void;
}>(), {
    defaultValue: "",
    readonly: false,
    plugin: () => [],
});

const set = useSetStore();

const defaultPlugins = [nord, gfm, menu, tooltip];

const { editor, getInstance } = useEditor((root) => {
    const instance = Editor.make().config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, props.defaultValue);
        ctx.update(editorViewOptionsCtx, (prev) => {
            return {
                ...prev,
                editable: () => !props.readonly,
            };
        });
        if(props.onSetCtx) props.onSetCtx(ctx);
    });
    defaultPlugins.forEach(plugin => instance.use(plugin));
    loadPlugins(instance);
    return instance;
});

watchEffect(() => {
    const editor = getInstance();
    editor?.action(switchTheme(set.navMode === "diablo" ? nordDark : nordLight));
});

function loadPlugins(instance: Editor) {
    const plugins = isArray(props.plugin) ? props.plugin : [props.plugin];
    plugins.forEach(plugin => {
        const hasPlugin = defaultPlugins.some(p => p === plugin);
        if(hasPlugin) return;
        instance.use(plugin);
    });
}

function getValue() {
    const editor = getInstance();
    return editor?.action((ctx) => {
        const editorView = ctx.get(editorViewCtx);
        const serializer = ctx.get(serializerCtx);
        return serializer(editorView.state.doc);
    }) || "";
}

function insertValue(value: string) {
    const editor = getInstance();
    editor?.action(insert(value));
}

defineExpose({
    getValue,
    insertValue,
});

</script>
