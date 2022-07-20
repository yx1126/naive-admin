import fullscreen from "./fullscreen";
import clipboard from "./clipboard";
import type { App } from "vue";

export default {
    install: (app: App) => {
        /**
         * 全屏
         */
        app.directive("fullscreen", fullscreen);
        /**
         * 复制
         */
        app.directive("copy", clipboard);
    },
};
