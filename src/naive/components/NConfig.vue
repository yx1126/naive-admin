<template>
    <n-config-provider :hljs="hljs" :locale="locale" :date-locale="dateLocale" :theme="theme" :theme-overrides="themeOverrides" :abstract="true">
        <n-loading-bar-provider>
            <n-dialog-provider>
                <n-message-provider>
                    <n-notification-provider>
                        <slot />
                        <n-feedback />
                    </n-notification-provider>
                </n-message-provider>
            </n-dialog-provider>
        </n-loading-bar-provider>
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, lightTheme, type GlobalThemeOverrides } from "naive-ui";
import { localeMap, dateLocaleMap } from "@/locales";
import { createHoverColor, createPressedColor } from "@/util/color";
import NFeedback from "./NFeedback.vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", xml);

const set = useSetStore();

const locale = $computed(() => localeMap[set.lang]);

const dateLocale = $computed(() => dateLocaleMap[set.lang]);

const theme = $computed<typeof darkTheme | typeof lightTheme>(() => (set.navMode === "diablo" ? darkTheme : lightTheme));

const PRIMARY_COLOR = "#409EFF";

const themeOverrides = $computed<GlobalThemeOverrides>(() => {
    const { themeColor } = set;
    return {
        common: {
            primaryColor: themeColor,
            primaryColorHover: createHoverColor(themeColor),
            primaryColorPressed: createPressedColor(themeColor),
        },
        LoadingBar: {
            colorLoading: themeColor,
        },
        Switch: {
            railColorActive: themeColor,
        },
        Menu: {
            // 反转主题色配置
            itemColorActiveInverted: themeColor,
            itemColorActiveHoverInverted: themeColor,
            itemColorActiveCollapsedInverted: themeColor,
        },
        Dropdown: {
            // 反转主题色配置
            optionColorHoverInverted: themeColor,
            optionColorActiveInverted: themeColor,
        },
        Message: {
            iconColorInfo: PRIMARY_COLOR,
        },
    };
});
</script>
