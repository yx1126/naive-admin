import Clipboard from "clipboard";
import { isFunction } from "@/util/validata";
import type { Directive } from "vue";

const clipboard: Directive = {
    mounted(el, binding) {
        if (binding.arg === "success" && isFunction(binding.value)) {
            el._v_clipboard_success = binding.value;
            return;
        }
        if (binding.arg === "error" && isFunction(binding.value)) {
            el._v_clipboard_error = binding.value;
            return;
        }
        const clipboard = new Clipboard(el, {
            text() {
                return String(binding.value);
            },
            action() {
                return "copy";
            },
        });
        clipboard.on("success", e => {
            el._v_clipboard_success?.(e);
        });
        clipboard.on("error", e => {
            el._v_clipboard_error?.(e);
        });
        el._v_clipboard = clipboard;
    },
    updated(el, binding) {
        if (binding.arg === "success") {
            el._v_clipboard_success = binding.value;
            return;
        }
        if (binding.arg === "error") {
            el._v_clipboard_error = binding.value;
            return;
        }
        el._v_clipboard.text = function () {
            return binding.value;
        };
        el._v_clipboard.action = function () {
            return "copy";
        };
    },
    unmounted(el, binding) {
        if (binding.arg === "success") {
            delete el._v_clipboard_success;
            return;
        }
        if (binding.arg === "error") {
            delete el._v_clipboard_error;
            return;
        }
        el._v_clipboard.destroy();
        delete el._v_clipboard;
    },
};

export default clipboard;
