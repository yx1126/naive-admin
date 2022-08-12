import { isArray, isString } from "@/util/validata";

export default function(role: string | string[]) {
    const user = useUserStore();
    const roles = isArray(role) ? role : isString(role, true) ? role.split(",") : [];
    return user.permission.some(item => roles.includes(item));
}
