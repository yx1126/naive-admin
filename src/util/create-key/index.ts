export default function createInjectionKey<T = symbol>(description?: string | number) {
    return Symbol(description) as T;
}
