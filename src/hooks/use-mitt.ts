import mitt from "mitt";
import type { LoadingBarOption, DialogOption, MessageOption, NotificationOption } from "@/naive";

type Events = {
    // loadingbar
    loadingbar: LoadingBarOption;
    // dialog
    dialog: DialogOption;
    // message
    message: MessageOption;
    // notification
    notification: NotificationOption;
};

const emitter = mitt<Events>();

export default () => {
    return emitter;
};
