
export default <P extends object, K extends keyof P>(props: P, key?: K) => {
    const instance = useInstance();
    key = key ? key : ("modelValue" as K);
    const event = `update:${key.toString()}`;

    return computed<P[K]>({
        get() {
            return props[key!];
        },
        set(...args) {
            instance.emit(event, ...args);
        },
    });
};
