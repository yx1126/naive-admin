import Clipboard from "clipboard";
import type { Event } from "clipboard";

export default function copy(text: string, action: "cut" | "copy" = "copy", el?: HTMLElement, destroy = true) {
    return new Promise<Event>((resolve, reject) => {
        const node = el || document.createElement("button");
        node.style.display = "none";
        const clipboard = new Clipboard(node, {
            text: function () {
                return text;
            },
            action: function () {
                return action;
            },
        });

        clipboard.on("success", function (e) {
            destroy && clipboard.destroy();
            e.clearSelection();
            resolve(e);
        });

        clipboard.on("error", function (e) {
            destroy && clipboard.destroy();
            reject(e);
        });

        if (node) {
            document.body.appendChild(node);
            node?.click?.();
            document.body.removeChild(node);
        }
    });
}
