import Screenfull from "screenfull";
import { getParentNode } from "@/util/dom";
import type { Directive } from "vue";

const screenfull: Directive = {
    mounted(el, binding) {
        if (!Screenfull.isEnabled) return;
        const target = el as HTMLElement;
        const {
            modifiers: { body, parent },
            value,
            arg = 0,
        } = binding;
        el._v_listenEvent = function () {
            const fullTarget = document.querySelector(body ? "body" : typeof value === "string" ? value : "body");
            Screenfull.toggle(fullTarget!);
        };
        const level = isNaN(parseInt(arg as string, 10)) ? 0 : parseInt(arg as string, 10);
        console.log(parent ? getParentNode(target, level) : target);
        (parent ? getParentNode(target, level) : target)?.addEventListener("click", el._v_listenEvent);
    },
    unmounted(el, binding) {
        const target = el as HTMLElement;
        const {
            modifiers: { parent },
            arg = 0,
        } = binding;
        const level = isNaN(parseInt(arg as string, 10)) ? 0 : parseInt(arg as string, 10);
        if (el._v_listenEvent) {
            (parent ? getParentNode(target, level) : target)?.removeEventListener("click", el._v_listenEvent);
        }
    },
};

export default screenfull;
