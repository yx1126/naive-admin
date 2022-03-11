import { defineStore } from "pinia";

export interface Menu {
    name: string;
    path: string;
    children?: Menu[];
}

export interface MenuState {
    menu: Menu[];
    count: number;
}

const useMenuStore = defineStore({
    id: "menu",
    state: (): MenuState => ({
        menu: [],
        count: 0,
    }),
    getters: {},
    actions: {
        increment() {
            this.count++;
        },
    },
});

export { useMenuStore };

export default useMenuStore;
