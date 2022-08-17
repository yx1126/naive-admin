import mitt from "mitt";
import type { LoadingBarOption, DialogOption, MessageOption, NotificationOption } from "./use-feed-back";

type Events = {
    // loadingbar
    loadingbar: LoadingBarOption;
    // dialog
    dialog: DialogOption;
    // message
    message: MessageOption;
    // notification
    notification: NotificationOption;
    // remove keepalive
    keepAlive: string;
};

const emitter = mitt<Events>();

export default () => {
    return emitter;
};
