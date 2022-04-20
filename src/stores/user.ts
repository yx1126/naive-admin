import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import menus from "@/assets/menu";
import { getMenusList } from "@/util/menus";
import type { RouteRecordRaw } from "vue-router";
import type { MenuOption } from "naive-ui";

export interface UserInfo {
    [key: string]: any;
}

export interface UserState {
    count: number;
    info: UserInfo | null;
    routes: RouteRecordRaw[];
    menus: MenuOption[];
}

const useUserStore = defineStore(
    "user",
    () => {
        const state = reactive<UserState>({
            count: 0,
            info: null,
            routes: [],
            menus: [],
        });

        const increment = () => {
            state.count++;
        };

        const setState = <T extends keyof UserState>(key: T, value: UserState[T]) => {
            state[key] = value as any;
        };

        const initMenu = async () => {
            state.menus = getMenusList(menus) as any;
        };

        return {
            ...toRefs(state),
            increment,
            initMenu,
            setState,
        };
    },
    {
        persistedstate: {
            enabled: true,
            paths: ["info", "menus"],
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
