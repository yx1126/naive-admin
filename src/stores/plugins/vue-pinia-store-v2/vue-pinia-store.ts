import type { PiniaPluginContext, PiniaPlugin } from "pinia";

const assign = Object.assign;
const isArray = Array.isArray;

type Store = PiniaPluginContext["store"];

type PartialState = Partial<Store["$state"]>;

type WatchOptions = Parameters<Store["$subscribe"]>[1];

type BaseStorage = Pick<Storage, "getItem" | "setItem">;

/**
 * Stored keys
 */
type Paths<S> = (keyof S)[] | ((s: (keyof S)[]) => (keyof S)[]);

type StorageOptions<S> = {
    key?: string;
    paths: Paths<S>;
    storage: BaseStorage;
};

type StorageOption<S> = BaseStorage | StorageOptions<S>[];

type StoreOption<S> = {
    enabled?: boolean;
    key?: string;
    paths?: Paths<S>;
    storage?: StorageOption<S>;
};

/**
 * Turns tree structure data into optional nodes
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type PiniaStateOptions = {
    prefix?: string;
    suffix?: string;
    storage?: BaseStorage;
    watchOptions?: WatchOptions;
};

/**
 * Creates a Pinia plugin to be used by keep data
 */
function createPiniaState(options?: PiniaStateOptions): PiniaPlugin {
    const prefix = options?.prefix ?? "vue-pinia-";
    const suffix = options?.suffix ?? "";
    const storage = options?.storage || window.localStorage;
    const watchOptions = options?.watchOptions || {};

    const createDefaultKey = (key: string) => prefix + key + suffix;

    function getItem(key: string, storage: BaseStorage) {
        const value = storage.getItem(createDefaultKey(key));
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any, storage: BaseStorage) {
        storage.setItem(createDefaultKey(key), typeof value === "string" ? value : JSON.stringify(value));
    }

    return ({ store, options: { persistedstate } }: PiniaPluginContext) => {
        if (!persistedstate?.enabled) return;
        function createStateList(state: Store["$state"]) {
            const stateKeys = Object.keys(state);
            const pathsList = typeof persistedstate?.paths === "function" ? persistedstate?.paths(stateKeys) : persistedstate?.paths;
            return isArray(persistedstate?.storage)
                ? persistedstate?.storage || []
                : [{ storage: persistedstate?.storage || storage, paths: pathsList || stateKeys }];
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
        }, assign({ detached: true }, watchOptions));

        return createStateList(store.$state).reduce((state, s) => {
            const value = getItem(s.key || persistedstate?.key || store.$id, s.storage);
            if (value) state = assign(state, value);
            return state;
        }, {} as PartialState);
    };
}

export { createPiniaState as default };

declare module "pinia" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface DefineStoreOptionsBase<S, Store> {
        persistedstate?: StoreOption<S>;
    }
}
