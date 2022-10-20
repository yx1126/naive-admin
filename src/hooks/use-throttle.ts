import { isNumber, isBoolean } from "@/util/validata";

function useThrottle(fn: ArrayFn): ArrayFn;
function useThrottle(fn: ArrayFn, delay: number): ArrayFn;
function useThrottle(fn: ArrayFn, immediate: boolean): ArrayFn;
function useThrottle(fn: ArrayFn, delay: number, immediate: boolean): ArrayFn;
function useThrottle(fn: ArrayFn, delay?: number | boolean, immediate?: boolean) {
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
