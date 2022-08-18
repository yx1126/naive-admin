import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import menus from "@/assets/menu";
import { formatMenuPath } from "@/util/menus";
import type { MenuOption } from "naive-ui";


export interface UserState {
    info: Record<string, any> | null;
    menus: MenuOption[];
    permission: string[];
}

const useUserStore = defineStore(
    "user",
    () => {
        const state: UserState = reactive({
            info: null,
            menus: [],
            permission: [],
        });

        const setState = <T extends keyof UserState>(key: T, value: UserState[T]) => {
            state[key] = value as UserState[T];
        };

        const initMenu = async () => {
            state.menus = formatMenuPath(menus);
        };

        return {
            ...toRefs(state),
            initMenu,
            setState,
        };
    },
    {
        persistedstate: {
            enabled: true,
            storage: window.sessionStorage,
            paths: ["info"],
        },
    },
);

if(import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
