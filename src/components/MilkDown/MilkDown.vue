<template>
    <VueEditor :editor="editor" />
</template>

<script setup lang="ts">
import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx, serializerCtx, editorViewCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { VueEditor, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";
import { emoji } from "@milkdown/plugin-emoji";
import { history } from "@milkdown/plugin-history";

const props = withDefaults(defineProps<{
    value?: string;
    readonly?: boolean;
}>(), {
    value: "",
    readonly: false,
});

const { editor } = useEditor((root) => {
    return Editor.make()
        .config((ctx) => {
            ctx.set(rootCtx, root);
            ctx.set(editorViewOptionsCtx, { editable: () => !props.readonly });
            ctx.set(defaultValueCtx, props.value);
        })
        .use(nord)
        .use(emoji)
        .use(commonmark)
        .use(history);
});

editor.editor.value?.action((ctx) => {
    const editorView = ctx.get(editorViewCtx);
    const serializer = ctx.get(serializerCtx);
    return serializer(editorView.state.doc);
});

</script>

<style lang="scss" scoped></style>
