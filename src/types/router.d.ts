import "vue-router";
import type { Component } from "vue";

declare module "vue-router" {
    interface RouteMeta {
        readonly title?: string;
        readonly requiredAuth?: boolean;
        readonly icon?: string | Component | (() => VNode);
        readonly keepAlive?: boolean;
        readonly activeMenu?: string;
        readonly isLink?: boolean;
        readonly isIFrame?: boolean;
        readonly permissions?: string[];
    }
}
