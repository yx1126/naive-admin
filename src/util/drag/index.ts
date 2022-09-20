import { on, off } from "../dom";
import type { CursorType } from "@/types/util";

export interface DragOptions {
    move?: HTMLElement;
    father?: HTMLElement;
    type?: "x" | "y" | "xy";
    eventType?: "left" | "right";
    cursor?: CursorType;
}

export default function drag(current: HTMLElement, options?: DragOptions) {
    const { move, father, type, eventType, cursor } = Object.assign({
        move: current,
        father: document.body,
        type: "xy",
        eventType: "left",
        cursor: "move",
    }, options);
    current.style.cursor = cursor;
    const position = getComputedStyle(move)["position"];
    if(!position || position === "static") move.style.position = "relative";
    function onMousedown(downEvent: MouseEvent) {
        // 鼠标左键拖动
        if(eventType === "left" && downEvent.button !== 0) return;
        // 鼠标右键拖动
        if(eventType === "right" && downEvent.button !== 2) return;
        const faRect = father.getBoundingClientRect();
        const moveRect = move.getBoundingClientRect();
        // left top值
        const defaultLeft = getComputedStyle(move)["left"].replace(/px/, "");
        const defaultTop = getComputedStyle(move)["top"].replace(/px/, "");
        const moveBaseLeft = ["auto", ""].includes(defaultLeft) ? 0 : Number(defaultLeft);
        const moveBaseTop = ["auto", ""].includes(defaultTop) ? 0 : Number(defaultTop);
        // 边界
        const left = (faRect.left || 0) - moveRect.left + moveBaseLeft;
        const top = (faRect.top || 0) - moveRect.top + moveBaseTop;
        const right = left + faRect.width - moveRect.width;
        const bottom = top + faRect.height - moveRect.height;
        function onMousemove(e: MouseEvent) {
            if(["xy", "x"].includes(type)) {
                const baseLeft = e.clientX - downEvent.clientX + moveBaseLeft;
                const offsetLeft = baseLeft <= left ? left : baseLeft >= right ? right : baseLeft;
                move.style.left = offsetLeft + "px";
            }
            if(["xy", "y"].includes(type)) {
                const baseTop = e.clientY - downEvent.clientY + moveBaseTop;
                const offsetTop = baseTop <= top ? top : baseTop >= bottom ? bottom : baseTop;
                move.style.top = offsetTop + "px";
            }
        }
        function onMouseup() {
            off(document, "mousemove", onMousemove);
            off(document, "mouseup", onMouseup);
        }
        on(document, "mousemove", onMousemove);
        on(document, "mouseup", onMouseup);
    }
    on(current, "contextmenu", (e) => e.preventDefault());
    on(current, "mousedown", onMousedown);
    return () => {
        off(current, "mousedown", onMousedown);
    };
}
