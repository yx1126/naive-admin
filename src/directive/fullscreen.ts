import Screenfull from "screenfull";
import type { Directive } from "vue";

const screenfull: Directive = {
    mounted(el, binding) {
        if (!Screenfull.isEnabled) return;
        const target = el as HTMLElement;
        const { body, parent } = binding.modifiers;
        el._v_listenEvent = function () {
            const fullTarget = document.querySelector(body ? "body" : typeof binding.value === "string" ? binding.value : "body");
            Screenfull.toggle(fullTarget!);
        };
        (parent ? target.parentNode : target)?.addEventListener("click", el._v_listenEvent);
    },
    unmounted(el, binding) {
        const target = el as HTMLElement;
        const { parent } = binding.modifiers;
        if (el._v_listenEvent) {
            (parent ? target.parentNode : target)?.removeEventListener("click", el._v_listenEvent);
        }
    },
};

export default screenfull;
