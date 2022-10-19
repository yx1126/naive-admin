import mitt from "mitt";
import type { LoadingBarOption, DialogOption, MessageOption, NotificationOption } from "./use-feedBack";

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
    // show update pwd modal
    updatePwd: void;
    scroll: Event;
};

const emitter = mitt<Events>();

export default () => {
    return emitter;
};
