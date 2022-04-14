<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" :abstract="true">
        <slot />
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
import { computed } from "vue";

const theme = computed<typeof darkTheme | null>(() => null);
</script>
