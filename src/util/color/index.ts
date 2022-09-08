import { composite } from "seemly";

/**
 * @remarks this is in node_modules/naive-ui/es/_utils/color/index.js
 */
export function createHoverColor(rgb: string) {
    return composite(rgb, [255, 255, 255, 0.16]);
}
export function createPressedColor(rgb: string) {
    return composite(rgb, [0, 0, 0, 0.12]);
}
