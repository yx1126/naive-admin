import type { Directive } from "vue";
import { getParentNode } from "@/util/dom";
import { isObject } from "@/util/validata";
import setDrag from "@/util/drag";

const drag: Directive = {
    mounted(el: HTMLElement, binding) {
        const { value = {}, modifiers: { right } } = binding;
        if(!isObject(value)) {
            throw new Error("binding.value must be Object");
        }
        const modalNode = getParentNode(el, (node: HTMLElement) => {
            const role = node.getAttribute?.("role");
            if(role === "dialog" && node.className.includes("n-modal")) {
                return node;
            }
        });
        const cardHeader = modalNode?.querySelector(".n-card-header .n-card-header__main") as HTMLElement;
        const dialogHeader = modalNode?.querySelector(".n-dialog__title") as HTMLElement;
        if(cardHeader) {
            (el as any)._v_cardStopEvent = setDrag(cardHeader, { move: modalNode, ...value, eventType: right ? "right" : "left" });
        }
        if(dialogHeader) {
            (el as any)._v_dialogStopEvent = setDrag(dialogHeader, { move: modalNode, ...value, eventType: right ? "right" : "left" });
        }
    },
    unmounted(el) {
        if(el._v_cardStopEvent) {
            el._v_cardStopEvent();
        }
        if(el._v_dialogStopEvent) {
            el._v_dialogStopEvent();
        }
    },
};

export default drag;
