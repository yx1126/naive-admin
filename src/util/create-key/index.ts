import type { InjectionKey } from "vue";

export default function createInjectionKey<T>() {
    return Symbol() as InjectionKey<T>;
}
