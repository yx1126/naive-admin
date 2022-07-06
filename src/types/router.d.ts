import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        title: string;
        requiredAuth?: boolean;
        icon?: string;
        keepAlive?: boolean;
        activeMenu?: string;
        isLink?: boolean;
        isIFrame?: boolean;
    }
}
