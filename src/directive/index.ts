import Screenfull from "screenfull";
import type { App } from "vue";

export default {
    install: (app: App) => {
        // 全屏
        app.directive("fullscreen", {
            created(el, binding) {
                if (!Screenfull.isEnabled) return;
                const target = el as HTMLElement;
                el._v_listenEvent = function () {
                    const fullTarget = document.querySelector(
                        binding.modifiers.body ? "body" : typeof binding.value === "string" ? binding.value : "body",
                    );
                    Screenfull.toggle(fullTarget!);
                };
                target.addEventListener("click", el._v_listenEvent);
            },
            beforeUnmount(el) {
                const target = el as HTMLElement;
                if (el._v_listenEvent) {
                    target.removeEventListener("click", el._v_listenEvent);
                }
            },
        });
    },
};
