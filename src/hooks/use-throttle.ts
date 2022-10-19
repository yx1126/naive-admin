import { isNumber, isBoolean } from "@/util/validata";
import type { AnyFn } from "@/types/util";

function useThrottle(fn: AnyFn): AnyFn;
function useThrottle(fn: AnyFn, delay: number): AnyFn;
function useThrottle(fn: AnyFn, immediate: boolean): AnyFn;
function useThrottle(fn: AnyFn, delay: number, immediate: boolean): AnyFn;
function useThrottle(fn: AnyFn, delay?: number | boolean, immediate?: boolean) {
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
        if(flag) {
            flag = false;
            if(defaultImmediate) fn.call(null, ...args);
            timer = setTimeout(() => {
                if(!defaultImmediate) fn.call(null, ...args);
                clearTimeout(timer);
                flag = true;
            }, defaultDelay);
        }
    };
}

export default useThrottle;
