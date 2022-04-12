import { defineStore } from "pinia";
import { ref } from "vue";

export interface Menu {
    name: string;
    path: string;
    children?: Menu[];
}

const useMenuStore = defineStore(
    "menu",
    () => {
        const menu = ref<Menu[]>([]);
        const count = ref(0);

        function increment() {
            count.value++;
        }

        return {
            menu,
            count,
            increment,
        };
    },
    {
        persistedstate: {
            enabled: true,
            storage: [{ storage: window.localStorage, paths: ["count"] }],
        },
    }
);

export { useMenuStore };

export default useMenuStore;
