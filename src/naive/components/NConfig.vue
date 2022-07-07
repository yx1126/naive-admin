<template>
    <n-config-provider :locale="locale" :date-locale="dateLocale" :theme="theme" :theme-overrides="themeOverrides" :abstract="true">
        <n-loading-bar-provider>
            <n-dialog-provider>
                <n-message-provider>
                    <n-notification-provider>
                        <n-freeback>
                            <slot />
                        </n-freeback>
                    </n-notification-provider>
                </n-message-provider>
            </n-dialog-provider>
        </n-loading-bar-provider>
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, enUS, dateZhCN, dateEnUS, darkTheme } from "naive-ui";
import { computed } from "vue";
import { useSetStore } from "@/stores";
import { createHoverColor, createPressedColor } from "@/util/color";
import NFreeback from "./NFreeback.vue";
import type { GlobalThemeOverrides } from "naive-ui";

const set = useSetStore();

const locale = computed(() => {
    return {
        "zh-CN": zhCN,
        enUS: enUS,
    }[set.lang];
});

const dateLocale = computed(() => {
    return {
        "zh-CN": dateZhCN,
        enUS: dateEnUS,
    }[set.lang];
});

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
        Menu: {
            // 反转主题色配置
            itemColorActiveInverted: set.themeColor,
            itemColorActiveHoverInverted: set.themeColor,
            itemColorActiveCollapsedInverted: set.themeColor,
        },
        Dropdown: {
            // 反转主题色配置
            optionColorHoverInverted: set.themeColor,
            optionColorActiveInverted: set.themeColor,
        },
    };
});

const theme = computed<typeof darkTheme | null>(() => (set.navMode === "diablo" ? darkTheme : null));
</script>
