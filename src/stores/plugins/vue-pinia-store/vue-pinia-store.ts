import type { PiniaPluginContext, PiniaPlugin, PiniaCustomProperties, PiniaCustomStateProperties } from "pinia";

const assign = Object.assign;

/**
 * Turns tree structure data into optional nodes
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Options<Store> = {
    key?: string;
    separate?: boolean;
    stroage?: Pick<Storage, "getItem" | "setItem">;
    modules?: (keyof Store)[];
    reducer?: (state: Store) => DeepPartial<Store>;
};

/**
 * Creates a Pinia plugin to be used by keep data
 */
function createVuePinia<Store extends object = any>(options?: Options<Store>): PiniaPlugin {
    const storage = options?.stroage || (window && window.localStorage);
    const isSeparate = options?.separate || false;

    function getItem(key: string) {
        const value = storage.getItem(key);
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any) {
        storage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }
    return ({ store }: PiniaPluginContext): Partial<PiniaCustomProperties & PiniaCustomStateProperties> | void => {
        const key = `${options?.key || "vue-pinia"}${isSeparate ? "-" + store.$id : ""}`;

        store.$subscribe(
            (mutation, state) => {
                let saveValue = { [mutation.storeId]: state };
                if (!isSeparate) saveValue = assign(getItem(key), saveValue);
                const reducerValue = options?.reducer
                    ? isSeparate
                        ? (options.reducer(saveValue as Store) as any)[mutation.storeId]
                        : options.reducer(saveValue as Store)
                    : saveValue;
                if (reducerValue) setItem(key, reducerValue);
            },
            {
                detached: true,
            }
        );

        const value = getItem(key);
        return isSeparate ? value : assign(store.$state, value[store.$id]);
    };
}

export default createVuePinia;
