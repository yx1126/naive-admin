import type { InjectionKey } from "vue";

export function createInjectionKey<T>() {
    return Symbol() as InjectionKey<T>;
}
