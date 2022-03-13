import type { PiniaPluginContext, StateTree } from "pinia";

const assign = Object.assign;

export type VuePiniaOptions = {
    name?: string;
    separate?: boolean;
    stroage?: Storage;
    reducer?: (state: Record<string, StateTree>) => object;
};

/**
 * Creates a Pinia plugin to be used by keep data
 */
function createVuePinia(options?: VuePiniaOptions) {
    function getItem(key: string) {
        const value = (options?.stroage || window.sessionStorage).getItem(key);
        return value ? JSON.parse(value) : {};
    }
    function setItem(key: string, value: any) {
        (options?.stroage || window.sessionStorage).setItem(key, JSON.stringify(value));
    }
    return ({ store }: PiniaPluginContext) => {
        // default key
        const key = (options?.separate ? `${options.name || "vue-pinia"}-${store.$id}` : options?.name || "vue-pinia") as string;
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
