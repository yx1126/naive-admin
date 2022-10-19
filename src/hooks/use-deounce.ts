
import { isNumber, isBoolean } from "@/util/validata";
import type { AnyFn } from "@/types/util";

function useDeounce(fn: AnyFn): AnyFn;
function useDeounce(fn: AnyFn, delay: number): AnyFn;
function useDeounce(fn: AnyFn, immediate: boolean): AnyFn;
function useDeounce(fn: AnyFn, delay: number, immediate: boolean): AnyFn;
function useDeounce(fn: AnyFn, delay?: number | boolean, immediate?: boolean) {
    let defaultDelay: number | undefined = 500,
        defaultImmediate: boolean | undefined = false;
    if(isNumber(delay)) {
        defaultDelay = delay;
    } else if(isBoolean(delay)) {
        defaultImmediate = delay;
    }
    if(isBoolean(immediate)) {
        defaultImmediate = immediate;
    }
    let timer: NodeJS.Timeout;
    let flag = true;
    return function(...args: any[]) {
        if(timer) clearTimeout(timer);
        if(defaultImmediate && flag) {
            fn.call(null, ...args);
            flag = false;
        }
        timer = setTimeout(defaultImmediate ? () => flag = true : fn.bind(null, ...args), defaultDelay);
    };
}

export default useDeounce;
