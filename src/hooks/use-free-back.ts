import useMitt from "./use-mitt";
import type { LoadingBarApiInjection, DialogApiInjection, MessageApiInjection, NotificationApiInjection } from "@/naive";

export type LoadingBarOption = (back: LoadingBarApiInjection) => void;
export type DialogOption = (back: DialogApiInjection) => void;
export type MessageOption = (back: MessageApiInjection) => void;
export type NotificationOption = (back: NotificationApiInjection) => void;

export type FreeBack = LoadingBarApiInjection | DialogApiInjection | MessageApiInjection | NotificationApiInjection;

export interface FreeBackOptions {
    loadingbar: LoadingBarApiInjection;
    dialog: DialogApiInjection;
    message: MessageApiInjection;
    notification: NotificationApiInjection;
}

const useFreeBack = <T extends keyof FreeBackOptions>(type: T): FreeBackOptions[T] => {
    const mitt = useMitt();
    let back: FreeBack | undefined;
    mitt.emit(type, (cbValue: FreeBack) => (back = cbValue));
    return back as FreeBackOptions[T];
};

export const useLoadingBar = () => {
    return useFreeBack("loadingbar");
};

export const useDialog = () => {
    return useFreeBack("dialog");
};

export const useMessage = () => {
    return useFreeBack("message");
};

export const useNotification = () => {
    return useFreeBack("notification");
};

export { useFreeBack as default };
