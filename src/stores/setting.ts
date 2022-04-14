import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";

export type NavTheme = "light" | "dark" | "diablo";
export type LayoutMode = "aside" | "top" | "mixin" | "asideMixin";
export type RouterTrans = "fade" | "slide" | "scale" | "scale-slide" | null;

export const user = {
    name: "test",
    age: 18,
};

export interface SetState {
    drawerStatus: boolean;
    navMode: NavTheme;
    layoutMode: LayoutMode;
    isShowLogo: boolean;
    uniqueMenuOpened: boolean;
    isShowBreadcrumb: boolean;
    isKeepHeader: boolean;
    isKeepTabs: boolean;
    isCutMenu: boolean;
    routerTrans: RouterTrans;
}

const useSetStore = defineStore(
    "set",
    () => {
        const state = reactive<SetState>({
            drawerStatus: false,
            navMode: "light",
            layoutMode: "aside",
            isShowLogo: false,
            uniqueMenuOpened: false,
            isShowBreadcrumb: false,
            isKeepHeader: false,
            isKeepTabs: false,
            isCutMenu: false,
            routerTrans: null,
        });

        const toggleDrawer = (value?: boolean) => {
            state.drawerStatus = typeof value === "boolean" ? value : !state.drawerStatus;
        };

        return {
            ...toRefs(state),
            toggleDrawer,
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
