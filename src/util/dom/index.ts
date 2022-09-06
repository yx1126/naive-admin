import type { MayBeRef, DOMElement, DOMEventKeyMap } from "@/types/util";
import { isString } from "../validata";

export function getParentNode(node: HTMLElement, level = 1) {
    let index = 0,
        parentNode: HTMLElement | null = node.parentNode as HTMLElement;
    while(index < level - 1) {
        parentNode = parentNode?.parentNode as HTMLElement;
        index++;
    }
    return parentNode;
}

export function $select(selectors: keyof HTMLElementTagNameMap | string) {
    return document.querySelector(selectors);
}

export function on<T extends DOMElement, K extends keyof DOMEventKeyMap, E extends DOMEventKeyMap[K]>(
    target: MayBeRef<T | string>,
    key: K,
    fn: (e: E) => void,
    options?: boolean | EventListenerOptions,
) {
    const targetRef = unref(target);
    const dom = isString(targetRef) ? $select(targetRef) : targetRef;
    dom?.addEventListener(key, fn as EventListener, options);
}

export function off<T extends DOMElement, K extends keyof DOMEventKeyMap, E extends DOMEventKeyMap[K]>(
    target: MayBeRef<T | string>,
    key: K,
    fn: (e: E) => void,
    options?: boolean | EventListenerOptions,
) {
    const targetRef = unref(target);
    const dom = isString(targetRef) ? $select(targetRef) : targetRef;
    dom?.removeEventListener(key, fn as EventListener, options);
}

export function once<T extends DOMElement, K extends keyof DOMEventKeyMap, E extends DOMEventKeyMap[K]>(
    target: MayBeRef<T | string>,
    key: K,
    fn: (e: E) => void,
    options?: boolean | EventListenerOptions,
) {
    function onceFn(e: E) {
        fn(e);
        off(target, key, onceFn, options);
    }
    on(target, key, onceFn, options);
}

export function drag(el: HTMLElement) {
    // 在盒子上按下
    function onMousedown(e: MouseEvent) {
        const ev = e || window.event;
        const disX = ev.clientX - el.offsetLeft; // 鼠标到盒子的距离
        const disY = ev.clientY - el.offsetTop;
        // 盒子宽高
        const boxW = el.clientWidth;
        const boxH = el.clientHeight;

        function onMousemove(e: MouseEvent) {
            const ev = e || window.event;
            // 可视区的宽高
            const clientW = document.documentElement.clientWidth;
            const clientH = document.documentElement.clientHeight;
            let l = ev.clientX - disX;
            let t = ev.clientY - disY;
            // 控制范围
            if(l <= 0) {
                l = 0;
            } else if(l >= clientW - boxW) {
                l = clientW - boxW;
            }
            if(t <= 0) {
                t = 0;
            } else if(t >= clientH - boxH) {
                t = clientH - boxH;
            }
            el.style.left = l + "px";
            el.style.top = t + "px";
        }

        function onMouseup() {
            off(document, "mousemove", onMousemove);
            off(document, "mouseup", onMouseup);
            off(document, "mousedown", onMousedown);
        }
        on(document, "mousemove", onMousemove);
        on(document, "mouseup", onMouseup);
        return false;
    }

    on(el, "mousedown", onMousedown);
}


export default {};
