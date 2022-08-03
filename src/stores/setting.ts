import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import type { Lang } from "@/locales";
import type { SelectOption } from "naive-ui";

export type NavTheme = "light" | "dark" | "diablo";
export type LayoutMode = "aside" | "top" | "mixin" | "asideMixin";
export type RouterTrans = "fade" | "scale" | "scale-slide" | "null";
export type RouterTransOptions = { mode?: "default" | "out-in" | "in-out" } & SelectOption;

export interface SetState {
    drawerStatus: boolean;
    themeColor: string;
    navMode: NavTheme;
    layoutMode: LayoutMode;
    isShowLogo: boolean;
    isShowTabs: boolean;
    uniqueMenuOpened: boolean;
    isShowBreadcrumb: boolean;
    isKeepHeader: boolean;
    isKeepTags: boolean;
    isCutMenu: boolean;
    routerTrans: RouterTrans;
    lang: Lang;
    collapsed: boolean;
    inverted: boolean;
    asideMixinCollapsed: boolean;
    menuTrigger: "bar" | "arrow-circle" | "false";
}

export const navTheme: NavTheme[] = ["light", "dark", "diablo"];
export const layoutMode: LayoutMode[] = ["aside", "top", "mixin", "asideMixin"];

export const routerTransOptions: RouterTransOptions[] = [
    { label: "fade", value: "fade", mode: "out-in" },
    { label: "scale", value: "scale", mode: "out-in" },
    { label: "fade-slide", value: "fade-slide", mode: "out-in" },
    { label: "scale-slide", value: "scale-slide", mode: "out-in" },
];

export const menuTriggerOptions: SelectOption[] = [
    { label: "bar", value: "bar" },
    { label: "arrow-circle", value: "arrow-circle" },
    { label: "null", value: "false" },
];

export const defaultSetting: SetState = {
    drawerStatus: false, // 全局设置
    themeColor: "#409EFF",
    navMode: "dark", // 系统主题
    layoutMode: "aside", // 导航模式
    isShowLogo: true, // 显示 logo
    isShowTabs: true, // 显示 标签页
    uniqueMenuOpened: false, // 菜单单选
    isShowBreadcrumb: true, // 显示 面包屑
    isKeepHeader: true, // 固定 顶栏
    isKeepTags: true, // 固定 标签页
    isCutMenu: false, // 切割菜单
    routerTrans: "fade", // 路由动画
    lang: "zh-CN", // 语言
    collapsed: false, // 菜单折叠
    inverted: false, // 反转颜色
    asideMixinCollapsed: false, // asideMixin 布局 子菜单折叠
    menuTrigger: "bar",
};

const useSetStore = defineStore(
    "set",
    () => {
        const state: SetState = reactive(Object.assign({}, defaultSetting));

        const toggleDrawer = (value?: boolean | MouseEvent) => {
            state.drawerStatus = typeof value === "boolean" ? value : !state.drawerStatus;
        };

        const togglCollapse = (value?: boolean | MouseEvent) => {
            state.collapsed = typeof value === "boolean" ? value : !state.collapsed;
        };

        const setState = <T extends keyof SetState>(key: T, value: SetState[T]) => {
            state[key] = value;
        };

        const reset = () => {
            const set = useSetStore();
            set.$patch(defaultSetting);
        };

        return {
            ...toRefs(state),
            toggleDrawer,
            togglCollapse,
            setState,
            reset,
        };
    },
    {
        persistedstate: {
            enabled: true,
            // paths: s => {
            //     return s.filter(k => !["drawerStatus"].includes(k));
            // },
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSetStore, import.meta.hot));
}

export { useSetStore };

export default useSetStore;
