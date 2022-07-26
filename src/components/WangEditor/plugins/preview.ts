import type { IButtonMenu, IDomEditor } from "@wangeditor/editor";

class PreviewMenu implements IButtonMenu {
    title: string;
    tag: string;
    constructor(){
        this.title = "预览";
        this.tag = "button";
    }

    getValue(no_editor: IDomEditor): string | boolean{
        return false;
    }
    isActive(no_editor: IDomEditor): boolean {
        return false;
    }

    // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
    isDisabled(no_editor: IDomEditor): boolean {
        return false;
    }

    // 点击菜单时触发的函数
    exec(editor: IDomEditor, no_value: string | boolean) {
        editor.emit("on-priview", editor.getHtml());
    }
}


export {
    PreviewMenu,
};

export default {
    key: "preview",
    factory() {
        return new PreviewMenu();
    },
};
