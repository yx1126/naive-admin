import { createPinia } from "pinia";
import createVuePinia from "./plugins/pinia-store";

const pinia = createPinia();
pinia.use(
    createVuePinia({
        callback: (app, state) => {
            if(app.store.$id === "set") {
                const { locale } = useI18n();
                locale.value = state?.lang || "zh-CN";
            }
        },
    }),
);

export * from "./setting";
export * from "./user";
export * from "./tags";

export default pinia;
