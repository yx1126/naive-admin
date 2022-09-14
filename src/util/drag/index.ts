import { on, off } from "../dom";

export default function drag(current: HTMLElement, move = current, father: HTMLElement = document.body) {
    current.style.cursor = "move";
    const position = getComputedStyle(move)["position"];
    if(!position) move.style.position = "relative";
    function onMousedown(downEvent: MouseEvent) {
        const faRect = father.getBoundingClientRect();
        const moveRect = move.getBoundingClientRect();
        // left top值
        const moveLeft = Number(getComputedStyle(move)["left"].replace(/px/, "") || 0);
        const moveTop = Number(getComputedStyle(move)["top"].replace(/px/, "") || 0);
        // 边界
        const offsetLeft = (faRect.left || 0) - moveRect.left + moveLeft;
        const offsetTop = (faRect.top || 0) - moveRect.top + moveTop;
        const boundary = {
            left: offsetLeft,
            top: offsetTop,
            right: offsetLeft + faRect.width - moveRect.width,
            bottom: offsetTop + faRect.height - moveRect.height,
        };
        function onMousemove(e: MouseEvent) {
            const baseLeft = e.clientX - downEvent.clientX + moveLeft;
            const baseTop = e.clientY - downEvent.clientY + moveTop;
            const left = baseLeft <= boundary.left ? boundary.left : baseLeft >= boundary.right ? boundary.right : baseLeft;
            const top = baseTop <= boundary.top ? boundary.top : baseTop >= boundary.bottom ? boundary.bottom : baseTop;
            move.style.left = left + "px";
            move.style.top = top + "px";
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
