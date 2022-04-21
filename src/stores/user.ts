import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import menus from "@/assets/menu";
import { formatKey } from "@/util/menus";
import type { MenuOption } from "naive-ui";

export interface UserInfo {
    [key: string]: any;
}

export interface UserState {
    count: number;
    info: UserInfo | null;
    menus: MenuOption[];
}

const useUserStore = defineStore(
    "user",
    () => {
        const state = reactive<UserState>({
            count: 0,
            info: null,
            menus: [],
        });

        const increment = () => {
            state.count++;
        };

        const setState = <T extends keyof UserState>(key: T, value: UserState[T]) => {
            state[key] = value as any;
        };

        const initMenu = async () => {
            state.menus = formatKey(menus) as any;
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
            paths: ["info"],
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
