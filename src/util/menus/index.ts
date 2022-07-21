import { defineComponent, h } from "vue";
import { RouterView } from "vue-router";
import type { MenuOption } from "naive-ui";
import type { RouteRecordRaw } from "vue-router";
import type { Menu } from "@/types/menus";

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

export function formatKey(menus: MenuOption[], path?: string | number): MenuOption[] {
    return menus.map(menu => {
        const back: MenuOption = {
            ...menu,
            path: path ? path + "/" + menu.path : menu.path,
        };
        if (menu.children?.length) back.children = formatKey(menu.children, back.path as string);
        return back;
    });
}

export function getMenusList(menus: Menu[], path?: string): MenuOption[] {
    return menus.map<MenuOption>(menu => {
        const back: MenuOption = {
            label: menu.label,
            key: path ? path + "/" + menu.path : menu.path,
            name: menu.name,
        };
        if (menu.children?.length) back.children = getMenusList(menu.children, menu.path);
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
        for (let i = 0; i < routesList.length; i++) {
            const item = routesList[i];
            if (item.path === path) {
                route = item;
                break;
            }
            start(item?.children || []);
        }
    }
    start(routes);
    return route;
}

type Unpack<T> = T extends { item: infer U } ? Unpack<U> : T;

export function getSearchMenuList(menus: MenuOption[], parentList: MenuOption[] = [], split = " -> "): Unpack<MenuOption[]> {
    let list: MenuOption[] = [];
    for (let i = 0; i < menus.length; i++) {
        const item = menus[i];
        if (item.children && item.children.length > 0) {
            const childList = getSearchMenuList(item.children || [], [...parentList, item]);
            list = [...list, ...childList];
        } else {
            if (parent) {
                list.push({ ...item, name: [...parentList, item].map(item => item.name).join(split) });
            } else {
                list.push(item);
            }
        }
    }
    return list;
}

export {};

export default {};
