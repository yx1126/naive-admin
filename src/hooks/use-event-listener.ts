import { on, off } from "@/util/dom";
import { isBoolean } from "@/util/validata";
import type { MayBeRef } from "@/types/util";

export interface EventOptions extends EventListenerOptions {
    lazy?: boolean;
    delay?: number;
}

export default function(
    target: MayBeRef<Window | Document | HTMLElement | string>,
    key: keyof HTMLElementEventMap,
    fn: (e: Event)=> void,
    options?: boolean | EventOptions,
) {

    const defaultOptions = Object.assign({ lazy: false, delay: 500 }, isBoolean(options) ? { capture: options } : options);

    function event(e: Event) {
        fn.call(null, e);
    }

    function stop() {
        off(target, key, onListener, defaultOptions);
    }

    const onListener = defaultOptions.lazy ? useDeounce(event, defaultOptions.delay) : event;

    onMounted(() => {
        on(target, key, onListener, defaultOptions);
    });

    onBeforeUnmount(stop);

    return stop;
}
