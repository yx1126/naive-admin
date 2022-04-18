import { createPinia } from "pinia";
import { useI18n } from "@/locales";
// import createVuePinia from "./plugins/vue-pinia-store/vue-pinia-store";
import createVuePinia from "./plugins/vue-pinia-store-v2/vue-pinia-store";

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

export default pinia;
