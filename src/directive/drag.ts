import type { Directive } from "vue";
import { getParentNode } from "@/util/dom";
import setDrag from "@/util/drag";

const drag: Directive = {
    mounted(el: HTMLElement) {
        const modalNode = getParentNode(el, (el) => {
            const node = el as HTMLElement;
            const role = node.getAttribute("role");
            if(role === "dialog" && node.className.includes("n-modal")) {
                return node;
            }
        }) as HTMLElement | undefined;
        const cardHeader = modalNode?.querySelector(".n-card-header .n-card-header__main");
        const dialogHeader = modalNode?.querySelector(".n-dialog__title");
        if(cardHeader) {
            (el as any)._v_cardStopEvent = setDrag(cardHeader as HTMLElement, modalNode);
        }
        if(dialogHeader) {
            (el as any)._v_dialogStopEvent = setDrag(dialogHeader as HTMLElement, modalNode);
        }
    },
    unmounted(el) {
        if(el._v_cardStopEvent) {
            el._v_cardStopEvent();
        }
        if(el._v_dialogStopEvent) {
            el._v_cardStopEvent();
        }
    },
};

export default drag;
