import { onMounted, onBeforeUnmount } from "vue";
import useDeounce from "./use-deounce";

export interface EventOptions extends AddEventListenerOptions{
    lazy?: boolean;
    delay?: number;
}

export default function(
    target: HTMLElement | Window | Document,
    key: keyof HTMLElementEventMap,
    fn: (e: Event)=> void,
    options?: boolean | EventOptions,
){

    const defaultOptions = Object.assign({ lazy: false, delay: 500 }, options);

    function event(e: Event) {
        fn.call(null, e);
    }

    function stop() {
        target.removeEventListener(key, onListener, defaultOptions);
    }

    const onListener = defaultOptions.lazy ? useDeounce(event, defaultOptions.delay) : event;

    onMounted(() => {
        target.addEventListener(key, onListener, defaultOptions);
    });

    onBeforeUnmount(stop);

    return stop;
}
