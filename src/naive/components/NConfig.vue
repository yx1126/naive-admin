<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" :theme-overrides="themeOverrides" :abstract="true">
        <slot />
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
import { computed } from "vue";
import useSetStore from "@/stores/setting";
import type { GlobalThemeOverrides } from "naive-ui";

const set = useSetStore();

console.log(set);

const themeOverrides = computed<GlobalThemeOverrides>(() => {
    return {
        common: {
            primaryColor: set.themeCalcColor.color,
            primaryColorHover: set.themeCalcColor.hoverColor,
            primaryColorPressed: set.themeCalcColor.pressedColor,
        },
        LoadingBar: {
            colorLoading: set.themeColor,
        },
        Switch: {
            railColorActive: set.themeColor,
        },
    };
});

const theme = computed<typeof darkTheme | null>(() => (set.navMode === "diablo" ? darkTheme : null));
</script>
