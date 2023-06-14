import { isArray, isString } from "@/util/validata";

export default function(role: string): ComputedRef<boolean>;
export default function(role: string[]): ComputedRef<boolean>;
export default function(role: string | string[]) {
    const user = useUserStore();
    const roles = isArray(role) ? role : isString(role, true) ? role.split(",") : [];
    return computed(() => user.permission.some(item => roles.includes(item)));
}
