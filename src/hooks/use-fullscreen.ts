import { onMounted, ref, unref, onBeforeUnmount, nextTick } from "vue";
import Screenfull from "screenfull";
import { isString } from "@/util/validata";
import { useMessage } from "./use-free-back";
import type { MayBeRef } from "@/types/util";

export default (selectors: MayBeRef<HTMLElement> | string = "body", options?: FullscreenOptions) => {
    const target = ref<HTMLElement | null>();
    const isEnabled = Screenfull.isEnabled;
    const fullScreen = ref(Screenfull.isFullscreen);
    const message = useMessage();

    function onFullScreenChange() {
        fullScreen.value = Screenfull.isFullscreen;
    }

    function isSupport() {
        if (!Screenfull.isEnabled) {
            message.warning("您的浏览器不支持全屏！");
        }
        return isEnabled;
    }

    function full() {
        if (!isSupport()) return;
        Screenfull.request(target.value ? target.value : void 0, options);
    }
    function exit() {
        if (!isSupport()) return;
        Screenfull.exit();
    }
    function toggle() {
        if (!isSupport()) return;
        Screenfull.toggle(target.value ? target.value : void 0, options);
    }

    onMounted(async () => {
        if (!isEnabled) return;
        await nextTick();
        target.value = isString(selectors) ? (document.querySelector(selectors) as HTMLElement) : unref(selectors);
        Screenfull.on("change", onFullScreenChange);
        Screenfull.on("error", event => {
            console.log(event);
        });
    });

    onBeforeUnmount(() => {
        Screenfull.off("change", onFullScreenChange);
    });

    return {
        target,
        isEnabled,
        fullScreen,
        full,
        exit,
        toggle,
    };
};
