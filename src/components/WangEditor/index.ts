import WangEditor from "./WangEditor.vue";
import type { Boot } from "@wangeditor/editor";

export type RegisterMenu = Parameters<typeof Boot.registerMenu>;

export default WangEditor;
