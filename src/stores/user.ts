import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";

export interface UserInfo {
    [key: string]: any;
}

export interface Menu {
    name: string;
    path: string;
    children?: Menu[];
}

export interface UserState {
    count: number;
    info: UserInfo | null;
    menu: Menu[];
}
const useUserStore = defineStore(
    "user",
    () => {
        const state = reactive<UserState>({
            count: 0,
            info: null,
            menu: [],
        });

        const increment = () => {
            state.count++;
        };

        return {
            ...toRefs(state),
            increment,
        };
    },
    {
        persistedstate: {
            enabled: true,
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
