import { isString, isNumber, isArray, typeOf } from "./validata";

export function snToCssVars(value?: string | number) {
    if(isNumber(value)) return `${value}px`;
    if(isString(value)) {
        return value.endsWith("px") || value.endsWith("%") ? value : `${value}px`;
    }
    return void 0;
}

/**
 * @param value - value
 * @param symbol - separator
 * @returns `Array<string>` or `undefined`
 */
export function toArray<T = string>(value: string | string[] | T[] | undefined, symbol = ",") {
    if(isString(value)) return value.split(symbol);
    if(isArray(value)) return value;
    return void 0;
}

export function simpleCopy<T = unknown>(value: any): T {
    return JSON.parse(JSON.stringify(value));
}

export function deepCopy<T = unknown>(data: any): T {
    const t = typeOf(data);
    let o: any;
    if(t === "array") {
        o = [];
    } else if(t === "object") {
        o = {};
    } else {
        return data;
    }
    if(t === "array") {
        for(let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if(t === "object") {
        for(const i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o as T;
}

/**
 * @param data - source data
 * @param fields - fields
 * @remarks From data, pick a set of properties whose keys are in the fields
 */
export function pick<T extends object, K extends keyof T>(data: T, keys: Array<K>) {
    const result: Record<string, any> = {};
    for(const key in data) {
        if(keys.includes(key as any)) {
            result[key] = data[key];
        }
    }
    return result as Omit<T, Exclude<keyof T, K>>;
}

/**
 * @param data - source data
 * @param fields - fields
 * @remarks Construct a object with the properties of data except for those in fields.
 */
export function omit<T extends object, K extends keyof T>(data: T, keys: Array<K>) {
    const result: Record<string, any> = {};
    for(const key in data) {
        if(!keys.includes(key as any)) {
            result[key] = data[key];
        }
    }
    return result as Pick<T, Exclude<keyof T, K>>;
}
