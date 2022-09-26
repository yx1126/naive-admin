import { isString, isNumber, isArray, typeOf } from "./validata";

export function snToCssVars(value?: string | number) {
    if(isNumber(value)) return `${value}px`;
    if(isString(value)) {
        return value.endsWith("px") || value.endsWith("%") ? value : `${value}px`;
    }
    return void 0;
}

export function saToArray<T = string>(value: string | string[] | T[] | undefined, symbol = ",") {
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

function pickOmit<T extends Record<string, any>>(data: T, fields: string | string[], flag = false) {
    const fieldList = saToArray(fields) || [];
    const keys = Object.keys(data).filter(k => flag ? fieldList.includes(k) : !fieldList.includes(k));
    return keys.reduce((pre, cur) => {
        pre[cur] = data[cur];
        return pre;
    }, {} as Record<string, any>);
}

export function pick<T extends object>(data: T, fields: string | string[]) {
    return pickOmit(data, fields, true);
}
export function omit<T extends object>(data: T, fields: string | string[]) {
    return pickOmit(data, fields);
}
