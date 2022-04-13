import { defineStore, acceptHMRUpdate } from "pinia";
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
        },
    }
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
