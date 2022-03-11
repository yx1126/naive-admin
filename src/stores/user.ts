import { defineStore } from "pinia";

export interface UserState {
    info: { readonly [key: string]: any } | null;
    count: number;
}

const useUserStore = defineStore({
    id: "user",
    state: (): UserState => ({
        info: null,
        count: 0,
    }),
    getters: {
        doubleCount: s => s.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});

export { useUserStore };

export default useUserStore;
