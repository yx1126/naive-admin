import createInjectionKey from "@/util/create-key";
import type { Ref } from "vue";
import type { RenderFormProvide, RenderFormInitParams } from "../types";

function defaultInitFn(fn: string) {
    return () => {
        throw new Error(`can not find ${fn}!`);
    };
}

export default function useForm<T extends object>(data: () => T) {

    const context = createInjectionKey<RenderFormProvide<T>>("RenderForm");

    const model = ref(data ? data() : {}) as Ref<T>;
    const loading = ref(false);

    const validate = shallowRef<RenderFormInitParams["validate"]>(defaultInitFn("validate") as any);
    const restoreValidation = shallowRef<RenderFormInitParams["restoreValidation"]>(defaultInitFn("restoreValidation") as any);

    provide(context, {
        loading,
        model,
        init: (params) => {
            validate.value = params.validate;
            restoreValidation.value = params.restoreValidation;
        },
        setModel(key, value) {
            model.value[key] = value;
        },
        resetFields,
    });

    function resetFields() {
        model.value = data();
        restoreValidation.value();
    }

    return {
        context,
        model,
        loading,
        formInstance: computed(() => ({
            validate: validate.value,
            restoreValidation: restoreValidation.value,
            resetFields,
        })),
    };
}
