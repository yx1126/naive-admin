import "vue-router";
import type { Component } from "vue";

declare module "vue-router" {
    interface RouteMeta {
        title?: string;
        requiredAuth?: boolean;
        icon?: string | Component | (() => VNode);
        keepAlive?: boolean;
        activeMenu?: string;
        isLink?: boolean;
        isIFrame?: boolean;
        permissions?: string[];
    }
}
