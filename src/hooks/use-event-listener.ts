import { on, off } from "@/util/dom";
import { isBoolean } from "@/util/validata";
import type { MayBeRef, DOMElement, DOMEventKeyMap } from "@/types/util";

export interface EventOptions extends EventListenerOptions {
    lazy?: boolean;
    delay?: number;
}

export default function(
    target: MayBeRef<DOMElement | string>,
    key: keyof DOMEventKeyMap,
    fn: (e: Event) => void,
    options?: boolean | EventOptions,
) {

    const route = useRoute();

    const defaultOptions = Object.assign({ lazy: false, delay: 500 }, isBoolean(options) ? { capture: options } : options);

    function event(e: Event) {
        fn.call(null, e);
    }

    function stop() {
        off(target, key, onListener, defaultOptions);
    }

    const onListener = defaultOptions.lazy ? useDeounce(event, defaultOptions.delay) : event;

    if(route.meta.keepAlive === true) {
        onActivated(() => {
            on(target, key, onListener, defaultOptions);
        });
        onDeactivated(stop);
    } else {
        onMounted(() => {
            on(target, key, onListener, defaultOptions);
        });
        onBeforeUnmount(stop);
    }

    return stop;
}
