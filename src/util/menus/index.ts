import { RouterView, type RouteMeta } from "vue-router";
import type { MenuOptions } from "@/naive";
import type { RouteRecordRaw } from "vue-router";
import type { Menu } from "@/types/menus";
import type { ResolveArray } from "@/types/util";

export const Layout = defineComponent({
    name: "DefaultLayout",
    render() {
        return h(RouterView);
    },
});

export function dynamicImport(menu: Menu): any {
    const path = menu.component?.startsWith("@") ? `..${menu.component?.substring(1)}` : menu.component;
    const modules = import.meta.glob("../views/*/*.vue");
    return modules[path as string];
}

export function formatMenuPath(menus: MenuOptions & RouteMeta[], path?: string) {
    return menus.map(menu => {
        const back: typeof menu = {
            ...menu,
            path: menu.isLink ? menu.path : path ? path + "/" + menu.path : menu.path,
        };
        if((menu.children as MenuOptions)?.length > 0)
            back.children = formatMenuPath(menu.children as MenuOptions & RouteMeta[], back.path as string);
        else delete back.children;
        return back;
    });
}

export function getMenusList(menus: Menu[], path?: string): MenuOptions {
    return menus.map(menu => {
        const back: ResolveArray<MenuOptions> = {
            label: menu.label,
            key: path ? path + "/" + menu.path : menu.path,
            name: menu.name,
        };
        if(menu.children?.length) back.children = getMenusList(menu.children, menu.path);
        return back;
    });
}

export function getRoutesByMenu(menus: Menu[]): RouteRecordRaw[] {
    return menus.map<RouteRecordRaw>(menu => {
        const children = getRoutesByMenu(menu?.children || []);
        return {
            path: menu.path,
            name: menu.name,
            redirect: "",
            component: children?.length > 0 ? Layout : dynamicImport(menu),
            meta: {
                title: menu.label,
            },
            children,
        };
    });
}

export function getRouteByPath(path: string, routes: RouteRecordRaw[]): RouteRecordRaw | undefined {
    let route: RouteRecordRaw | undefined = undefined;
    function start(routesList: RouteRecordRaw[]) {
        for(let i = 0; i < routesList.length; i++) {
            const item = routesList[i];
            if(item.path === path) {
                route = item;
                break;
            }
            start(item?.children || []);
        }
    }
    start(routes);
    return route;
}

export function getSearchMenuList(menus: MenuOptions, split = " -> ") {
    const result: MenuOptions = [];
    function start(list: MenuOptions, parentList: MenuOptions = []) {
        for(let i = 0; i < list.length; i++) {
            const item = list[i];
            if(!item.children || (item.children as MenuOptions)?.length <= 0) {
                result.push({ ...item, name: [...parentList, item].map(item => item.name).join(split) });
                continue;
            }
            start((item.children as MenuOptions) || [], [...parentList, item]);
        }
    }
    start(menus);
    return result;
}

export {};

export default {};
