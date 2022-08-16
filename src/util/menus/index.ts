import { RouterView, type RouteMeta } from "vue-router";
import type { MenuOptions } from "@/naive";

export const Layout = defineComponent({
    name: "DefaultLayout",
    render() {
        return h(RouterView);
    },
});

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
