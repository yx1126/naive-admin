import { defineStore } from "pinia";
import { ref } from "vue";

export interface UserInfo {
    [key: string]: any;
}

const useUserStore = defineStore(
    "user",
    () => {
        const count = ref(0);
        const info = ref<UserInfo | null>(null);

        const increment = () => {
            count.value++;
        };

        return {
            count,
            info,
            increment,
        };
    },
    {
        persistedstate: {
            enabled: true,
            key: "user-test",
            // paths: ["count", "info"],
            storage: [
                { storage: window.localStorage, paths: ["info"] },
                { key: "test2", storage: window.localStorage, paths: ["count"] },
            ],
        },
    }
);

export { useUserStore };

export default useUserStore;
