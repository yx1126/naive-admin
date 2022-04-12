import { defineStore } from "pinia";
import { ref } from "vue";

const useSetStore = defineStore(
    "set",
    () => {
        const drawerStatus = ref(false);

        function toggleDrawer(value?: boolean) {
            drawerStatus.value = typeof value === "boolean" ? value : !drawerStatus.value;
        }
        return {
            drawerStatus,
            toggleDrawer,
        };
    },
    {
        persistedstate: {
            storage: [{ storage: window.sessionStorage, paths: ["drawerStatus"] }],
        },
    }
);

export { useSetStore };
export default useSetStore;
