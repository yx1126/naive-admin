import type { PiniaPluginContext, PiniaPlugin } from "pinia";

const assign = Object.assign;
const isArray = Array.isArray;
const isString = (value: any): value is string => typeof value === "string";

type Store = PiniaPluginContext["store"];

type PartialState = Partial<Store["$state"]>;

export interface Subscriptions {
    detached?: boolean;
    immediate?: boolean;
    deep?: boolean;
}

type BaseStorage = Pick<Storage, "getItem" | "setItem">;

type Paths<S> = Array<ObjectKeys<S>> | ((s: Array<ObjectKeys<S>>) => Array<ObjectKeys<S>>);

interface StorageOptions<S> {
    key?: string;
    paths: Paths<S>;
    storage: BaseStorage;
}

type StorageOption<S> = BaseStorage | StorageOptions<S>[];

interface StoreOption<S> {
    enabled?: boolean;
    key?: string;
    paths?: Paths<S>;
    storage?: StorageOption<S>;
}

export interface PiniaStateOptions {
    prefix?: string;
    suffix?: string;
    storage?: BaseStorage;
    subscriptions?: Subscriptions;
    callback?: (app: PiniaPluginContext, state: PartialState) => void;
}

function createPiniaState(options?: PiniaStateOptions): PiniaPlugin {
    const prefix = options?.prefix ?? "vue-pinia-";
    const suffix = options?.suffix ?? "";
    const storage = options?.storage || window.localStorage;

    const createDefaultKey = (key: string) => prefix + key + suffix;

    function getItem(key: string, storage: BaseStorage) {
        const value = storage.getItem(createDefaultKey(key));
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any, storage: BaseStorage) {
        storage.setItem(createDefaultKey(key), isString(value) ? value : JSON.stringify(value));
    }

    return (context: PiniaPluginContext) => {
        const store = context.store;
        const persistedstate = context.options.persistedstate;
        if(!persistedstate?.enabled) return;
        function createStateList(state: Store["$state"]) {
            return isArray(persistedstate?.storage)
                ? persistedstate?.storage || []
                : [{ storage: persistedstate?.storage || storage, paths: persistedstate?.paths || Object.keys(state) }];
        }

        store.$subscribe((mutation, state) => {
            createStateList(state).forEach(s => {
                const pathsList = typeof s.paths === "function" ? s.paths(Object.keys(state)) : s.paths;
                const value = pathsList.reduce((baseState, cur) => {
                    baseState[cur] = state[cur];
                    return baseState;
                }, {} as PartialState);
                setItem(s.key || persistedstate?.key || mutation.storeId, value, s.storage);
            });
        }, assign({ detached: true }, options?.subscriptions));

        const storeState = createStateList(store.$state).reduce((state, s) => {
            const value = getItem(s.key || persistedstate?.key || store.$id, s.storage);
            if(value) state = assign(state, value);
            return state;
        }, {} as PartialState);
        options?.callback?.(context, assign({}, storeState));
        return storeState;
    };
}

export { createPiniaState as default };

declare module "pinia" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface DefineStoreOptionsBase<S, Store> {
        persistedstate?: StoreOption<S>;
    }
}
