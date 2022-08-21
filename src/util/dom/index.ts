import type { MayBeRef } from "@/types/util";
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

export function on(
    target: MayBeRef<Window | Document | HTMLElement | SVGElement | string>,
    key: keyof HTMLElementEventMap,
    fn: (e: Event) => void,
    options?: boolean | EventListenerOptions,
) {
    const targetRef = unref(target);
    const dom = isString(targetRef) ? $select(targetRef) : targetRef;
    dom?.addEventListener(key, fn, options);
}

export function off(
    target: MayBeRef<Window | Document | HTMLElement | SVGElement | string>,
    key: keyof HTMLElementEventMap,
    fn: (e: Event) => void,
    options?: boolean | EventListenerOptions,
) {
    const targetRef = unref(target);
    const dom = isString(targetRef) ? $select(targetRef) : targetRef;
    dom?.removeEventListener(key, fn, options);
}

export default {};
