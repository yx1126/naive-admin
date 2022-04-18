<template>
    <slot />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useMitt from "@hooks/use-mitt";
import { useLoadingBar, useDialog, useMessage } from "naive-ui";

const loadingBar = useLoadingBar();
const dialog = useDialog();
const message = useMessage();
const mitt = useMitt();

onMounted(() => {
    // loading bar
    mitt.on("loadingbar:start", loadingBar.start);
    mitt.on("loadingbar:finish", loadingBar.finish);
    mitt.on("loadingbar:error", loadingBar.error);
    // dialog
    mitt.on("dialog:destroyAll", dialog.destroyAll);
    mitt.on("dialog:create", dialog.create);
    mitt.on("dialog:error", dialog.error);
    mitt.on("dialog:info", dialog.info);
    mitt.on("dialog:success", dialog.success);
    mitt.on("dialog:warning", dialog.warning);
    // message
    mitt.on("message:destroyAll", message.destroyAll);
    mitt.on("message:create", options => {
        message.create(options.content, options.option);
    });
    mitt.on("message:error", options => {
        message.error(options.content, options.option);
    });
    mitt.on("message:info", options => {
        message.info(options.content, options.option);
    });
    mitt.on("message:loading", options => {
        message.loading(options.content, options.option);
    });
    mitt.on("message:success", options => {
        message.success(options.content, options.option);
    });
    mitt.on("message:warning", options => {
        message.warning(options.content, options.option);
    });
});
</script>
