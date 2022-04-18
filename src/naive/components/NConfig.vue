<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" :theme-overrides="themeOverrides" :abstract="true">
        <!-- loading bar -->
        <n-loading-bar-provider>
            <!-- dialog -->
            <n-dialog-provider>
                <n-freeback>
                    <slot />
                </n-freeback>
            </n-dialog-provider>
        </n-loading-bar-provider>
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
import { computed } from "vue";
import useSetStore from "@/stores/setting";
import { createHoverColor, createPressedColor } from "@/util/color";
import NFreeback from "./NFreeback.vue";
import type { GlobalThemeOverrides } from "naive-ui";

const set = useSetStore();

const themeOverrides = computed<GlobalThemeOverrides>(() => {
    return {
        common: {
            primaryColor: set.themeColor,
            primaryColorHover: createHoverColor(set.themeColor),
            primaryColorPressed: createPressedColor(set.themeColor),
            infoColor: "#909399",
            infoColorHover: createHoverColor("#909399"),
            infoColorPressed: createPressedColor("#909399"),
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
