import { composite, changeColor } from "seemly";
import { isNumber } from "../validata";

/**
 * @see node_modules/naive-ui/es/_utils/color/index.js
 */
export function createHoverColor(rgb: string) {
    return composite(rgb, [255, 255, 255, 0.16]);
}
export function createPressedColor(rgb: string) {
    return composite(rgb, [0, 0, 0, 0.12]);
}

/**
 * @see node_modules/naive-ui/es/alert/styles/light.js
 */
export function createColor(rgb: string, cColor: string, alpha: number) {
    return composite(rgb, changeColor(cColor, { alpha }));
}

/**
 * @remarks RGB 转为 HEX
 *
 * @param rgb - color
 * @returns string
 */
export function rgbToHex(rgb: string): string;
export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHex(r: number | string, g?: number, b?: number) {
    const reg = /\((.+?)\)/;
    let _r: number, _g = g!, _b = b!;
    if(isNumber(r)) {
        _r = r;
    } else {
        const rgb = r.match(reg)![1];
        if(!rgb) {
            return "";
        }
        const [rr, gg, bb] = rgb.replace(/\s/g, "").split(",");
        _r = Number(rr);
        _g = Number(gg);
        _b = Number(bb);
    }
    const hex = "#" + ((1 << 24) + (_r << 16) + (_g << 8) + _b).toString(16).slice(1);
    return hex;
}

/**
 * @remarks HEX 转为 RGB
 *
 * @param hex - 颜色值
 * @param opacity - 透明度
 * @returns rgb/rgba
 */
export function hexToRgb(hex: string): string;
export function hexToRgb(hex: string, opacity: number | string): { r: number; g: number; b: number; rgba: string };
export function hexToRgb(hex: string, opacity?: unknown) {
    const r = parseInt("0x" + hex.slice(1, 3)),
        g = parseInt("0x" + hex.slice(3, 5)),
        b = parseInt("0x" + hex.slice(5, 7));
    if(opacity === void 0) {
        return {
            r, g, b,
            rgba: `rgb(${[r, g, b].join(", ")})`,
        };
    }
    return `rgba(${[r, g, b, opacity].join(", ")})`;
}
