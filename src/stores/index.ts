import { createPinia } from "pinia";
import { useI18n } from "@/locales";
// import createVuePinia from "./plugins/vue-pinia-store/vue-pinia-store";
import createVuePinia from "./plugins/vue-pinia-store-v2/vue-pinia-store";
import useUserStore from "./user";
import useSetStore from "./setting";
import useTagsStore from "./tags";
import { isString } from "@/util/validata";

export const Store = {
    user: useUserStore,
    set: useSetStore,
    tags: useTagsStore,
};

export type StoreMap = {
    user: ReturnType<typeof useUserStore>;
    set: ReturnType<typeof useSetStore>;
    tags: ReturnType<typeof useTagsStore>;
};

const pinia = createPinia();
pinia.use(
    createVuePinia({
        callback: (app, state) => {
            if (app.store.$id !== "set") return;
            const { locale } = useI18n();
            locale.value = state?.lang || "zh-CN";
        },
    }),
);
export type Storekeys = keyof StoreMap;

export function useStore(): StoreMap;
export function useStore<T extends Storekeys, R = StoreMap[T]>(value: T): R;
export function useStore<T extends Array<Storekeys>, R = Partial<StoreMap>>(value: T): R;
export function useStore(store?: Storekeys | Storekeys[]) {
    if (isString(store)) return Store[store]();
    return getStoreByKeys(store ? store : ["set", "tags", "user"]);
}
export function getStoreByKeys(keys: Storekeys[]) {
    return keys.reduce((pre, cur) => {
        pre[cur] = Store[cur]() as any;
        return pre;
    }, {} as Partial<StoreMap>);
}

export * from "./setting";
export * from "./user";
export * from "./tags";

export default pinia;
