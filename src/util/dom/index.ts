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

export default {};
