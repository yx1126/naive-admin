import type { Directive } from "vue";

const permission: Directive = {
    mounted(el, binding) {
        if(binding.value === void 0) {
            throw new Error("binding.value cannot be empty!");
        }
        const hasPermission = usePermission(binding.value);
        if(!hasPermission) {
            (el as HTMLElement).remove();
        }
    },
};

export default permission;
