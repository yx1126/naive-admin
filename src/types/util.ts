import type { Ref } from "vue";
export type MayBeRef<T = any> = Ref<T> | T;
export type LRDirection = "left" | "right";

export type TBDirection = "top" | "bottom";

export type LRTBDirection = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";

export type Direction = LRDirection | TBDirection;

export type Placement = Direction | LRTBDirection;
