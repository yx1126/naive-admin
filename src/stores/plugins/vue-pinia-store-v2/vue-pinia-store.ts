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
type Paths<S> = (keyof S)[];

type StorageOptions<S> = {
    storage: BaseStorage;
    paths: Paths<S>;
};

type StorageOption<S> = BaseStorage | StorageOptions<S>[];

type StoreOption<S> = {
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

export type VuePiniaOptions = {
    prefix?: string;
    suffix?: string;
    storage?: BaseStorage;
    watchOptions?: WatchOptions;
};

/**
 * Creates a Pinia plugin to be used by keep data
 */
function createVuePinia(options?: VuePiniaOptions): PiniaPlugin {
    const prefix = options?.prefix ?? "vue-pinia-";
    const suffix = options?.suffix ?? "";
    const storage = options?.storage || window.localStorage;
    const watchOptions = options?.watchOptions || {};

    function getItem(key: string, storage: BaseStorage) {
        const value = storage.getItem(key);
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any, storage: BaseStorage) {
        storage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }

    return ({ store, options: { persistedstate } }: PiniaPluginContext) => {
        const key = prefix + store.$id + suffix;

        function stateList(state: Store["$state"]) {
            let stateList: StorageOptions<PartialState>[] = [];

            if (isArray(persistedstate?.storage)) {
                stateList = persistedstate?.storage || [];
            } else {
                stateList = [
                    {
                        storage: persistedstate?.storage || storage,
                        paths: persistedstate?.paths || Object.keys(state),
                    },
                ];
            }
            return stateList;
        }

        store.$subscribe(
            (_, state) => {
                stateList(state).forEach((s) => {
                    const value = s.paths.reduce((baseState, cur) => {
                        baseState[cur] = state[cur];
                        return baseState;
                    }, {} as Partial<typeof state>);
                    setItem(key, value, s.storage);
                });
            },
            assign(
                {
                    detached: true,
                },
                watchOptions
            )
        );

        return stateList(store.$state).reduce((state, s) => {
            const value = getItem(key, s.storage);
            if (value) state = assign(state, value);
            return state;
        }, {} as PartialState);
    };
}

export { createVuePinia as default };

declare module "pinia" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface DefineStoreOptionsBase<S, Store> {
        persistedstate?: StoreOption<S>;
    }
}
