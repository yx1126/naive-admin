import { isString, isNumber, isArray } from "./validata";

export function snToCssVars(value?: string | number) {
    if (isNumber(value)) return `${value}px`;
    if (isString(value)) {
        return value.endsWith("px") || value.endsWith("%") ? value : `${value}px`;
    }
    return void 0;
}

export function saToArray<T = string>(value: string | string[] | T[] | undefined, symbol = ",") {
    if (isString(value)) return value.split(symbol);
    if (isArray(value)) return value;
    return void 0;
}
