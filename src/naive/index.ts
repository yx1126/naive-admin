import NConfig from "./components/NConfig.vue";
import Icon from "@/components/Icon";
import type { Component, VNode } from "vue";
import type {
    useLoadingBar as useLoadingBarType,
    useDialog as useDialogType,
    useMessage as useMessageType,
    useNotification as useNotificationType,
    MenuOption,
    MenuDividerOption,
    MenuGroupOption,
} from "naive-ui";

export type LoadingBarApiInjection = ReturnType<typeof useLoadingBarType>;
export type DialogApiInjection = ReturnType<typeof useDialogType>;
export type MessageApiInjection = ReturnType<typeof useMessageType>;
export type NotificationApiInjection = ReturnType<typeof useNotificationType>;

export function renderIcon(icon: string): () => VNode;
export function renderIcon(icon: Component): () => VNode;
export function renderIcon(icon: string | Component) {
    if(typeof icon === "string") {
        return () => h(Icon, { icon });
    }
    return () => h(Icon, null, { default: () => h(icon) });
}

export type MenuOptions = Array<MenuOption | MenuDividerOption | MenuGroupOption>;

export { NConfig };
export default {};
