import type { ComputedRef, Ref } from "vue";

export default function<T, R = Ref<T> | ComputedRef<T> | T>(defaultValue: R) {
    const result = ref<R>(unref(defaultValue));

    return computed<T>({
        get() {
            return result.value as T;
        },
        set(value) {
            result.value = value as any;
        },
    });
}
