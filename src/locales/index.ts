import { zhCN, enUS, dateZhCN, dateEnUS } from "naive-ui";
import { createI18n } from "vue-i18n";
// import { location } from "@/util/storage";
import type { SelectOption } from "naive-ui";

// const set = location.getItem("vue-pinia-set");

const i18n = createI18n({
    // locale: set?.lang || "zh-CN",
    legacy: false,
    fallbackLocale: "enUS",
});

export type Lang = "zh-CN" | "enUS";


const lang: SelectOption[] = [
    { label: "简体中文", value: "zh-CN" },
    { label: "English", value: "enUS" },
];

// n-config-provider local 配置
const localeMap = { "zh-CN": zhCN, enUS: enUS };
// n-config-provider dateLocal 配置
const dateLocaleMap = { "zh-CN": dateZhCN, enUS: dateEnUS };

export { lang, localeMap, dateLocaleMap };

export default i18n;
