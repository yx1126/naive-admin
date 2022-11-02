import { isArray, isString } from "@/util/validata";
import type { ComputedRef } from "vue";

export default function(role: string): ComputedRef<boolean>;
export default function(role: string[]): ComputedRef<boolean>;
export default function(role: string | string[]) {
    const user = useUserStore();
    const roles = isArray(role) ? role : isString(role, true) ? role.split(",") : [];
    return computed(() => user.permission.some(item => roles.includes(item)));
}
