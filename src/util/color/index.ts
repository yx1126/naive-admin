import { composite, changeColor } from "seemly";

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