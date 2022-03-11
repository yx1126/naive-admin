import { createPinia } from "pinia";

import VuexPinia from "./plugins/vuex-pinia";

const pinia = createPinia();

pinia.use(VuexPinia);

export default pinia;
