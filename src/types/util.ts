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
