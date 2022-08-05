import useEventListener, { type EventOptions } from "./use-event-listener";

function useResize(fn?: ((e: Event, value: { width: number, height: number }) => void) | null, options?: EventOptions) {

    let width = $ref(document.documentElement.clientWidth);
    let height = $ref(document.documentElement.clientHeight);

    const stop = useEventListener(window, "resize", (e: Event) => {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        fn?.(e, { width, height });
    }, options);

    return {
        width: $$(width),
        height: $$(height),
        stop,
    };
}

export default useResize;
