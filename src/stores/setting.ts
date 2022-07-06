import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import type { Lang } from "@/locales";

export type NavTheme = "light" | "dark" | "diablo";
export type LayoutMode = "aside" | "top" | "mixin" | "asideMixin";
export type RouterTrans = "fade" | "slide" | "scale" | "scale-slide" | "null";

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
    isKeepTabs: boolean;
    isCutMenu: boolean;
    routerTrans: RouterTrans;
    lang: Lang;
    collapsed: boolean;
}

export const navTheme: NavTheme[] = ["light", "dark", "diablo"];
export const layoutMode: LayoutMode[] = ["aside", "top", "mixin", "asideMixin"];

export const routerTransOptions = ["null", "fade", "slide", "scale", "scale-slide"].map(t => ({
    label: t,
    value: t,
}));

export const defaultSetting: SetState = {
    drawerStatus: false, // 全局设置
    themeColor: "#409EFF",
    navMode: "dark", // 系统主题
    layoutMode: "aside", // 导航模式
    isShowLogo: true, // 显示 logo
    isShowTabs: true, // 显示 标签页
    uniqueMenuOpened: false, // 菜单单选
    isShowBreadcrumb: false, // 显示 面包屑
    isKeepHeader: false, // 固定 顶栏
    isKeepTabs: false, // 固定 标签页
    isCutMenu: false, // 切割菜单
    routerTrans: "null", // 路由动画
    lang: "zh-CN",
    collapsed: false,
};

const useSetStore = defineStore(
    "set",
    () => {
        const state: SetState = reactive(Object.assign({}, defaultSetting));

        const toggleDrawer = (value?: boolean) => {
            state.drawerStatus = typeof value === "boolean" ? value : !state.drawerStatus;
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
            setState,
            reset,
        };
    },
    {
        persistedstate: {
            enabled: true,
            paths: s => {
                return s.filter(k => !["drawerStatus"].includes(k));
            },
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSetStore, import.meta.hot));
}

export { useSetStore };

export default useSetStore;
