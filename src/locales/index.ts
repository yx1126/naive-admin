import { createI18n, useI18n } from "vue-i18n";
// import { location } from "@/util/storage";
import zhCN from "./langs/zh-CN.json";
import enUS from "./langs/enUS.json";

// const set = location.getItem("vue-pinia-set");

const i18n = createI18n({
    // locale: set?.lang || "zh-CN",
    fallbackLocale: "enUS",
    messages: {
        "zh-CN": zhCN,
        enUS: enUS,
    },
});

export type Lang = "zh-CN" | "enUS";
export interface LangMap {
    label: string;
    value: Lang;
}

const lang: LangMap[] = [
    { label: "简体中文", value: "zh-CN" },
    { label: "English", value: "enUS" },
];

export { useI18n, lang };

export default i18n;
