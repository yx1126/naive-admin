import { computed } from "vue";
import useApp from "./use-app";

export default <P extends object, K extends keyof P>(props: P, key?: K) => {
    const app = useApp();
    key = key ? key : ("modelValue" as K);
    const event = `update:${key.toString()}`;

    return computed<P[K]>({
        get() {
            return props[key!];
        },
        set(...args) {
            app.emit(event, ...args);
        },
    });
};
