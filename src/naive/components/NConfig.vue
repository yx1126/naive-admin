<template>
    <n-config-provider :hljs="hljs" :locale="locale" :date-locale="dateLocale" :theme="theme" :theme-overrides="themeOverrides" :abstract="true">
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
import { darkTheme, lightTheme } from "naive-ui";
import { localeMap, dateLocaleMap } from "@/locales";
import { createHoverColor, createPressedColor } from "@/util/color";
import NFreeback from "./NFreeback.vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import type { GlobalThemeOverrides } from "naive-ui";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", xml);

const set = useSetStore();

const locale = $computed(() => localeMap[set.lang]);

const dateLocale = $computed(() => dateLocaleMap[set.lang]);

const theme = $computed<typeof darkTheme | null>(() => (set.navMode === "diablo" ? darkTheme : lightTheme));

const PRIMARYCOLOR = "#409EFF";
const SUCCESSCOLOR = "#67C23A";
const WARNINGCOLOR = "#E6A23C";
const ERRORCOLOR = "#F56C6C";
const INFOCOLOR = "#909399";

const themeOverrides = $computed<GlobalThemeOverrides>(() => {
    return {
        common: {
            primaryColor: set.themeColor,
            primaryColorHover: createHoverColor(set.themeColor),
            primaryColorPressed: createPressedColor(set.themeColor),
            successColor: SUCCESSCOLOR,
            successColorHover: createHoverColor(SUCCESSCOLOR),
            successColorPressed: createPressedColor(SUCCESSCOLOR),
            warningColor: WARNINGCOLOR,
            warningColorHover: createHoverColor(WARNINGCOLOR),
            warningColorPressed: createPressedColor(WARNINGCOLOR),
            errorColor: ERRORCOLOR,
            errorColorHover: createHoverColor(ERRORCOLOR),
            errorColorPressed: createPressedColor(ERRORCOLOR),
            infoColor: INFOCOLOR,
            infoColorHover: createHoverColor(INFOCOLOR),
            infoColorPressed: createPressedColor(INFOCOLOR),
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
        Message: {
            iconColorInfo: PRIMARYCOLOR,
        },
    };
});
</script>
