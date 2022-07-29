import Screenfull from "screenfull";
import { getParentNode, $select } from "@/util/dom";
import { isString } from "@/util/validata";
import type { Directive } from "vue";

const screenfull: Directive = {
    mounted(el, binding) {
        if (!Screenfull.isEnabled) return;
        const target = el as HTMLElement;
        const {
            modifiers: { body, parent, stop },
            value,
            arg = 1,
        } = binding;
        el._v_listenEvent = function(e: MouseEvent) {
            if(stop) e.stopPropagation();
            const fullTarget = body ? $select("body") : isString(value, true) ? $select(value) : target;
            Screenfull.toggle(fullTarget!);
        };
        el._v_level = isNaN(parseInt(arg as string, 10)) ? 1 : parseInt(arg as string, 10);
        (parent ? getParentNode(target, el._v_level) : target)?.addEventListener("click", el._v_listenEvent);
    },
    unmounted(el, binding) {
        const target = el as HTMLElement;
        const {
            modifiers: { parent },
        } = binding;
        if (el._v_listenEvent && el._v_level) {
            (parent ? getParentNode(target, el._v_level) : target)?.removeEventListener("click", el._v_listenEvent);
        }
    },
};

export default screenfull;
