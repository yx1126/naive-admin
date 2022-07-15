import { defineStore, acceptHMRUpdate } from "pinia";
import { computed, reactive, toRefs } from "vue";
import type { RouteMeta } from "vue-router";

export interface Tags {
    title: string;
    name: string;
    path: string;
    meta?: Partial<RouteMeta>;
}

export interface TagsState {
    keepTags: Tags[];
    activeTags: Tags[];
}

export type TagsType = "keepTags" | "activeTags";

const defaultTags: Tags[] = [{ title: "主控台", name: "Console", path: "/dashboard/console" }];

const useTagsStore = defineStore(
    "tags",
    () => {
        const state: TagsState = reactive({
            keepTags: [...defaultTags],
            activeTags: [],
        });

        // 缓存 组件 names
        const keepAliveList = computed(() => {
            return [...state.keepTags, ...state.activeTags].filter(t => t.meta?.keepAlive).map(t => t.name);
        });

        function setState<T extends keyof TagsState>(key: T, value: TagsState[T]) {
            state[key] = value;
        }
        // 初始化
        function init() {
            state.keepTags = [...defaultTags];
            state.activeTags = [];
        }
        // 添加
        function insert(type: TagsType, value: Tags) {
            if (!value.path) return;
            const tag = [...state.keepTags, ...state.activeTags].find(t => t.path === value.path);
            if (tag) return;
            state[type].push(value);
        }

        // base 移除
        function baseRemove(type: TagsType, path: string, direction: "this" | "left" | "right" | "other" | "all" = "this") {
            const index = state[type].findIndex(t => t.path === path);
            if (index === -1) return;
            switch (direction) {
                case "this":
                    state[type].splice(index, 1);
                    break;
                case "left":
                    state[type].splice(0, index);
                    break;
                case "right":
                    state[type].splice(index + 1, state[type].length);
                    break;
                case "other":
                    setState(
                        type,
                        state[type].filter(t => t.path === path),
                    );
                    break;
                case "all":
                    setState(type, []);
                    break;
                default:
                    break;
            }
        }
        // 移除
        function remove(path: string) {
            const kTags = state.keepTags.find(t => t.path === path);
            const aTags = state.activeTags.find(t => t.path === path);
            if (kTags) baseRemove("keepTags", path);
            else if (aTags) baseRemove("activeTags", path);
        }
        // 移除左边
        function removeLeft(path: string) {
            baseRemove("activeTags", path, "left");
        }
        // 移除右边
        function removeRight(path: string) {
            baseRemove("activeTags", path, "right");
        }
        // 移除 其他
        function removeOther(path: string) {
            baseRemove("activeTags", path, "other");
        }
        // 移除 其他
        function removeAll(path: string) {
            baseRemove("activeTags", path, "all");
        }
        // 保持固定
        function keepFixed(path: string) {
            const tag = state.activeTags.find(t => t.path === path);
            if (!tag) return;
            remove(path);
            insert("keepTags", tag);
        }
        // 解除固定
        function removeFixed(path: string) {
            const tag = state.activeTags.find(t => t.path === path);
            if (!tag) return;
            remove(path);
            insert("activeTags", tag);
        }

        return {
            ...toRefs(state),
            keepAliveList,
            setState,
            init,
            insert,
            remove,
            removeLeft,
            removeRight,
            removeOther,
            removeAll,
            keepFixed,
            removeFixed,
        };
    },
    {
        persistedstate: {
            enabled: true,
            storage: window.sessionStorage,
        },
    },
);

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTagsStore, import.meta.hot));
}

export { useTagsStore };

export default useTagsStore;
