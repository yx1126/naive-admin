import { isString } from "@/util/validata";
import type { MayBeRef } from "@/types/util";

export default (title: MayBeRef<string | null | undefined> = null, template = "%s") => {
    const value = $ref(title ?? document.title ?? null);
    watch(
        $$(value),
        (v, ov) => {
            if (isString(v) && v !== ov && document) {
                document.title = template.replaceAll("%s", v);
            }
        },
        {
            immediate: true,
        },
    );
    return $$(value);
};
