import { createPinia } from "pinia";

// import createVuePinia from "./plugins/vue-pinia-store/vue-pinia-store";
import createVuePinia from "./plugins/vue-pinia-store-v2/vue-pinia-store";

const pinia = createPinia();

pinia.use(createVuePinia());

export default pinia;
