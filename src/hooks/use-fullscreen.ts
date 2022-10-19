import Screenfull from "screenfull";
import { isString, isUndefined } from "@/util/validata";
import { $select } from "@/util/dom";
import useFeedBack from "./use-feedBack";
import type { MayBeRef } from "@/types/util";

export default (selectors?: MayBeRef<HTMLElement | string | undefined>, options?: FullscreenOptions) => {
    const target = ref<HTMLElement | null>();
    const isEnabled = Screenfull.isEnabled;
    const isFullScreen = ref(Screenfull.isFullscreen);
    const message = useFeedBack("message");

    function onFullScreenChange() {
        isFullScreen.value = Screenfull.isFullscreen;
    }

    function isSupport() {
        if(!Screenfull.isEnabled) {
            message.warning("您的浏览器不支持全屏！");
        }
        return isEnabled;
    }

    function full() {
        if(!isSupport()) return;
        Screenfull.request(target.value ? target.value : void 0, options);
    }
    function exit() {
        if(!isSupport()) return;
        Screenfull.exit();
    }
    function toggle() {
        if(!isSupport()) return;
        Screenfull.toggle(target.value ? target.value : void 0, options);
    }

    onMounted(async () => {
        if(!isEnabled) return;
        await nextTick();
        if(isUndefined(selectors)) {
            target.value = $select("body");
        } else if(isString(selectors)) {
            target.value = $select<HTMLElement>(unref<string>(selectors));
        } else {
            target.value = unref(selectors) as HTMLElement;
        }
        Screenfull.on("change", onFullScreenChange);
        Screenfull.on("error", event => {
            console.log(event);
        });
    });

    onBeforeUnmount(() => {
        Screenfull.off("change", onFullScreenChange);
    });

    return {
        isEnabled,
        isFullScreen: readonly(isFullScreen),
        full,
        exit,
        toggle,
    };
};
