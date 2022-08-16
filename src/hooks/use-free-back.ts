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

export { useFreeBack as default };
