import { computed } from "vue";
import { isArray, isString } from "@/util/validata";
import { useUserStore } from "@/stores";

export default function(role: string | string[]){
    const user = useUserStore();
    const permission = computed(() => user.permission);
    const roles = isArray(role) ? role : isString(role, true) ? role.split(",") : [];
    return {
        permission,
        hasPermission: permission.value.some(item => roles.includes(item)),
    };
}
