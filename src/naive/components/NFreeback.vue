<template>
    <slot />
</template>

<script setup lang="ts">
import { useLoadingBar, useDialog, useMessage, useNotification } from "naive-ui";

const loadingBar = useLoadingBar();
const dialog = useDialog();
const message = useMessage();
const notification = useNotification();
const mitt = useMitt();

onBeforeMount(() => {
    // loading bar
    mitt.on("loadingbar", cb => cb(loadingBar));
    mitt.on("dialog", cb => cb(dialog));
    mitt.on("message", cb => cb(message));
    mitt.on("notification", cb => cb(notification));
});
</script>
