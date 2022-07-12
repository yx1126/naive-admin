import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, toRefs } from "vue";
import type { RouteMeta } from "vue-router";

export interface Tags {
    title: string;
    name: string;
    path: string;
    meta: RouteMeta;
}

export interface TagsState {
    tags: Tags[];
}

const useUserStore = defineStore(
    "tags",
    () => {
        const state: TagsState = reactive({
            tags: [],
        });

        const setState = <T extends keyof TagsState>(key: T, value: TagsState[T]) => {
            state[key] = value;
        };

        return {
            ...toRefs(state),
            setState,
        };
    },
    {
        persistedstate: {
            enabled: true,
            storage: window.sessionStorage,
            paths: [],
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };

export default useUserStore;
