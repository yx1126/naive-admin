import NConfig from "./components/NConfig.vue";
import Icon from "@/components/Icon";
import { h } from "vue";
import type { Component } from "vue";
import type {
    useLoadingBar as useLoadingBarType,
    useDialog as useDialogType,
    useMessage as useMessageType,
    useNotification as useNotificationType,
} from "naive-ui";

export type LoadingBarApiInjection = ReturnType<typeof useLoadingBarType>;
export type DialogApiInjection = ReturnType<typeof useDialogType>;
export type MessageApiInjection = ReturnType<typeof useMessageType>;
export type NotificationApiInjection = ReturnType<typeof useNotificationType>;

export function renderIcon(icon: string | Component) {
    if (typeof icon === "string") {
        return () => h(Icon, { icon });
    }
    return () => h(Icon, null, { default: () => h(icon) });
}

export { NConfig };
export default {};
