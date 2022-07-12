import { createPinia } from "pinia";
import { useI18n } from "@/locales";
import { isString, isArray } from "@/util/validata";
// import createVuePinia from "./plugins/vue-pinia-store/vue-pinia-store";
import createVuePinia from "./plugins/vue-pinia-store-v2/vue-pinia-store";
import useSetStore from "./setting";
import useUserStore from "./user";
import useTagsStore from "./tags";

// export type SetModuleType = ReturnType<typeof useSetStore>
// export type UserModuleType = ReturnType<typeof useUserStore>
// export type TagsModuleType = ReturnType<typeof useTagsStore>

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

type Store = "set" | "user" | "tags";

export function useStore(store: "default" | Store | Store[] = "default") {
    const set = useSetStore();
    const user = useUserStore();
    const tags = useTagsStore();
}

export * from "./setting";
export * from "./user";
export * from "./tags";

export default pinia;
