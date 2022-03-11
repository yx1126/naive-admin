import type { PiniaPluginContext } from "pinia";

function VuexPinia({ pinia, store }: PiniaPluginContext) {
    const state = pinia.state.value;
    console.log(state.menu);
    console.log(store);
}

export default VuexPinia;
