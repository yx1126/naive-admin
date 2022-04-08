import { defineStore } from "pinia";

export interface SetState {
    drawerStatus: boolean;
}

const useSetStore = defineStore({
    id: "set",
    state: (): SetState => ({
        drawerStatus: false,
    }),
    actions: {
        toggleDrawer(value?: boolean) {
            this.drawerStatus = value ? value : !this.drawerStatus;
        },
    },
    persistedstate: {
        storage: [{ storage: window.sessionStorage, paths: ["drawerStatus"] }],
    },
});

export { useSetStore };
export default useSetStore;
