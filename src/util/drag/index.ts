import { on, off } from "../dom";
// move = current, father: HTMLElement = document.body

export interface DragOptions {
    move?: HTMLElement;
    father?: HTMLElement;
    type?: "x" | "y" | "xy";
}

export default function drag(current: HTMLElement, options?: DragOptions) {
    const { move, father, type } = Object.assign({
        move: current,
        father: document.body,
        type: "xy",
    }, options);
    current.style.cursor = "move";
    const position = getComputedStyle(move)["position"];
    if(!position) move.style.position = "relative";
    function onMousedown(downEvent: MouseEvent) {
        const faRect = father.getBoundingClientRect();
        const moveRect = move.getBoundingClientRect();
        // left top值
        const moveBaseLeft = Number(getComputedStyle(move)["left"].replace(/px/, "") || 0);
        const moveBaseTop = Number(getComputedStyle(move)["top"].replace(/px/, "") || 0);
        // 边界
        const offsetLeft = (faRect.left || 0) - moveRect.left + moveBaseLeft;
        const offsetTop = (faRect.top || 0) - moveRect.top + moveBaseTop;
        const boundary = {
            left: offsetLeft,
            top: offsetTop,
            right: offsetLeft + faRect.width - moveRect.width,
            bottom: offsetTop + faRect.height - moveRect.height,
        };
        function onMousemove(e: MouseEvent) {
            if(["xy", "x"].includes(type)) {
                const baseLeft = e.clientX - downEvent.clientX + moveBaseLeft;
                const left = baseLeft <= boundary.left ? boundary.left : baseLeft >= boundary.right ? boundary.right : baseLeft;
                move.style.left = left + "px";
            }
            if(["xy", "y"].includes(type)) {
                const baseTop = e.clientY - downEvent.clientY + moveBaseTop;
                const top = baseTop <= boundary.top ? boundary.top : baseTop >= boundary.bottom ? boundary.bottom : baseTop;
                move.style.top = top + "px";
            }
        }
        function onMouseup() {
            off(document, "mousemove", onMousemove);
            off(document, "mouseup", onMouseup);
        }
        on(document, "mousemove", onMousemove);
        on(document, "mouseup", onMouseup);
    }
    on(current, "mousedown", onMousedown);
    return () => {
        off(current, "mousedown", onMousedown);
    };
}
