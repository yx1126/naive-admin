import type { Directive } from "vue";

const permission: Directive = {
    mounted(el, binding){
        if(binding.value === void 0) {
            throw new Error("binding.value 不能为空！");
        }
        const { hasPermission } = usePermission(binding.value);
        if(!hasPermission.value) {
            (el as HTMLElement).remove();
        }
    },
};

export default permission;
