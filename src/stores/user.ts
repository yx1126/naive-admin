import { defineStore } from "pinia";

export type UserId = "user";

export interface UserState {
    info: { readonly [key: string]: any } | null;
    count: number;
}

export interface UserGetter<S> {
    doubleCount: (s: S) => number;
}

export interface UserActions {
    increment: () => void;
}

const useUserStore = defineStore<UserId, UserState>({
    id: "user",
    state: () => ({
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
