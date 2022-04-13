import { defineStore, acceptHMRUpdate } from "pinia";
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
            enabled: true,
            storage: [{ storage: window.sessionStorage, paths: ["drawerStatus"] }],
        },
    }
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSetStore, import.meta.hot));
}

export { useSetStore };

export default useSetStore;
