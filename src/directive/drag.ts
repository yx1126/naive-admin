import type { Directive } from "vue";

const drag: Directive = {
    mounted(el, binding) {
        console.log(el, binding);
    },
    updated(el, binding) {
        console.log(el, binding);
    },
    unmounted(el, binding) {
        console.log(el, binding);
    },
};

export default drag;
