import { onMounted, onBeforeUnmount } from "vue";
import useDeounce from "./use-deounce";
import { isObject } from "@/util/validata";

export default function(
    target: HTMLElement | Window,
    key: keyof HTMLElementEventMap,
    fn: (e: Event)=> void,
    options: boolean | AddEventListenerOptions & { lazy?: boolean, delay?: number } = { delay: 200 },
){



    function onListener(e: Event) {
        if(isObject(options)) {
            const defaultOptions = Object.assign({ delay: 200, lazy: false }, options);
            defaultOptions.lazy ? useDeounce(fn, defaultOptions.delay) : fn(e);
        } else {
            fn(e);
        }
    }

    onMounted(() => {
        target.addEventListener(key, onListener, options);
    });

    onBeforeUnmount(() => {
        target.removeEventListener(key, onListener, options);
    });
}
