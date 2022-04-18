<template>
    <slot />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useMitt from "@hooks/use-mitt";
import { useLoadingBar } from "naive-ui";
const loadingBar = useLoadingBar();
const mitt = useMitt();

onMounted(() => {
    mitt.on("load:start", loadingBar.start);
    mitt.on("load:finish", loadingBar.finish);
    mitt.on("load:error", loadingBar.error);
});
</script>
