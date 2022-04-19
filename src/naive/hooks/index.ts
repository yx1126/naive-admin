import useMitt from "@hooks/use-mitt";
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

export const useLoadingBar = () => {
    const mitt = useMitt();
    let loadingbar: LoadingBarApiInjection | undefined;
    mitt.emit("loadingbar", back => (loadingbar = back));
    return loadingbar as LoadingBarApiInjection;
};

export const useDialog = () => {
    const mitt = useMitt();
    let dialog: DialogApiInjection | undefined;
    mitt.emit("dialog", back => (dialog = back));
    return dialog as DialogApiInjection;
};

export const useMessage = () => {
    const mitt = useMitt();
    let message: MessageApiInjection | undefined;
    mitt.emit("message", back => (message = back));
    return message as MessageApiInjection;
};

export const useNotification = () => {
    const mitt = useMitt();
    let notification: NotificationApiInjection | undefined;
    mitt.emit("notification", back => (notification = back));
    return notification as NotificationApiInjection;
};

export const useFreeBack = <T extends keyof FreeBackOptions>(type: T): FreeBackOptions[T] => {
    const mitt = useMitt();
    let back: FreeBack | undefined;
    mitt.emit(type, (cbValue: FreeBack) => (back = cbValue));
    return back as FreeBackOptions[T];
};

export {};
