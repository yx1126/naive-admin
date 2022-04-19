import NConfig from "./components/NConfig.vue";
import type { useLoadingBar, useDialog, useMessage, useNotification } from "naive-ui";

export type LoadingBarApiInjection = ReturnType<typeof useLoadingBar>;
export type DialogApiInjection = ReturnType<typeof useDialog>;
export type MessageApiInjection = ReturnType<typeof useMessage>;
export type NotificationApiInjection = ReturnType<typeof useNotification>;

export * from "./hooks";

export { NConfig };
export default {};
