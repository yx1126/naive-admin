import NConfig from "./components/NConfig.vue";
import { NIcon } from "naive-ui";
import { h, resolveComponent } from "vue";
import type { Component } from "vue";
import type { useLoadingBar, useDialog, useMessage, useNotification } from "naive-ui";

export type LoadingBarApiInjection = ReturnType<typeof useLoadingBar>;
export type DialogApiInjection = ReturnType<typeof useDialog>;
export type MessageApiInjection = ReturnType<typeof useMessage>;
export type NotificationApiInjection = ReturnType<typeof useNotification>;

export function renderIcon(icon: string | Component) {
    return () => h(NIcon, null, { default: () => h(typeof icon === "string" ? (resolveComponent(icon) as Component) : icon) });
}

export { NConfig };
export default {};
