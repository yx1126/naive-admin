import type { Ref } from "vue";

export type MayBeRef<T = any> = Ref<T> | T;

export type LRDirection = "left" | "right";

export type TBDirection = "top" | "bottom";

export type LRTBDirection = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";

export type Direction = LRDirection | TBDirection;

export type Placement = Direction | LRTBDirection;

export type BaseTypeOfKeys = "Boolean" | "Number" | "String" | "Function" | "Array" | "Date" | "RegExp" | "Undefined" | "Null" | "Object";
export type TypeOfKey = `[object ${BaseTypeOfKeys}]`;
export type TypeOfValues = "boolean" | "number" | "string" | "function" | "array" | "date" | "regExp" | "undefined" | "null" | "object";

export type ResolveArray<T> = T extends Array<infer A> ? A : never;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type DOMElement = Window | Document | HTMLElement | SVGElement;
export type DOMEventKeyMap<T = DOMElement> = T extends Window
    ? WindowEventMap : T extends Document
        ? DocumentEventMap : T extends HTMLElement
            ? HTMLElementEventMap : T extends SVGElement
                ? SVGElementEventMap : ElementEventMap;

export type CursorType =
    | "default"
    | "auto"
    | "crosshair"
    | "pointer"
    | "move"
    | "e-resize"
    | "ne-resize"
    | "nw-resize"
    | "n-resize"
    | "se-resize"
    | "sw-resize"
    | "s-resize"
    | "w-resize"
    | "text"
    | "wait"
    | "help";
