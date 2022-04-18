import mitt from "mitt";
import type { VNodeChild } from "vue";
import type { DialogOptions, MessageOptions } from "naive-ui";

export interface MessageOption {
    content: string | (() => VNodeChild);
    option?: MessageOptions;
}

type Events = {
    // loadingbar
    "loadingbar:start"?: undefined;
    "loadingbar:finish"?: undefined;
    "loadingbar:error"?: undefined;
    // dialog
    "dialog:destroyAll"?: undefined;
    "dialog:create": DialogOptions;
    "dialog:error": DialogOptions;
    "dialog:info": DialogOptions;
    "dialog:success": DialogOptions;
    "dialog:warning": DialogOptions;
    // message
    "message:destroyAll"?: undefined;
    "message:create": MessageOption;
    "message:error": MessageOption;
    "message:info": MessageOption;
    "message:loading": MessageOption;
    "message:success": MessageOption;
    "message:warning": MessageOption;
};

const emitter = mitt<Events>();

export default () => {
    return emitter;
};
