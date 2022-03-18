import type { PiniaPluginContext, PiniaPlugin, StateTree, PiniaCustomProperties, PiniaCustomStateProperties } from "pinia";

const assign = Object.assign;

export type VuePiniaOptions = {
    key?: string;
    separate?: boolean;
    stroage?: Pick<Storage, "getItem" | "setItem">;
    reducer?: (state: Record<string, StateTree>) => object;
};

/**
 * Creates a Pinia plugin to be used by keep data
 */
function createVuePinia(options?: VuePiniaOptions): PiniaPlugin {
    const storage = options?.stroage || (window && window.localStorage);

    function getItem(key: string) {
        const value = storage.getItem(key);
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any) {
        storage.setItem(key, JSON.stringify(value));
    }
    return ({ store }: PiniaPluginContext): Partial<PiniaCustomProperties & PiniaCustomStateProperties> | void => {
        const key = `${options?.key || "vue-pinia"}${options?.separate ? "-" + store.$id : ""}`;

        store.$subscribe(
            (mutation, state) => {
                let saveValue = { [mutation.storeId]: state };
                if (!options?.separate) saveValue = assign(getItem(key), saveValue);
                const reducerValue = options?.reducer
                    ? options.separate
                        ? (options.reducer(saveValue) as any)[mutation.storeId]
                        : options.reducer(saveValue)
                    : saveValue;
                setItem(key, reducerValue);
            },
            {
                detached: true,
            },
        );
        const value = getItem(key);
        return options?.separate ? value : assign(store.$state, value[store.$id]);
    };
}

export default createVuePinia;
