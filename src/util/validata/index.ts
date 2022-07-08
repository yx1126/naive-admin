// 手机号正则验证
export const mobileReg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
// 身份证正则验证
export const idCardReg =
    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
// 超链接正则验证
export const linkReg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/;
// email正则验证
export const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

export function typeOf(value: any) {
    const map: Record<string, string> = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
    };
    return map[Object.prototype.toString.call(value) as string];
}

export const isPhoneNum = (val: string) => mobileReg.test(val);
export const isIdCard = (val: string) => idCardReg.test(val);
export const isLink = (val: string) => linkReg.test(val);
export const isEmail = (val: string) => emailReg.test(val);

export function isObject(value: any) {
    return typeOf(value) === "object";
}

export function isString(value: any) {
    return typeOf(value) === "string";
}

export function isNumber(value: any) {
    return typeOf(value) === "number";
}

export function isArray(value: any) {
    return typeOf(value) === "array";
}

export function isFunction(value: any) {
    return typeOf(value) === "function";
}

export function isMobile() {
    const userAgentInfo = navigator.userAgent,
        phoneList = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return phoneList.some(item => userAgentInfo.includes(item));
}
