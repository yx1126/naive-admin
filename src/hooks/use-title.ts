import { isString } from "@/util/validata";

export default (title: MayBeRef<Empty<string>> = null, template = "%s") => {
    const value = $ref(title ?? document.title ?? null);
    watch(
        $$(value),
        (v, ov) => {
            if(isString(v) && v !== ov && document) {
                document.title = template.replaceAll("%s", v);
            }
        },
        {
            immediate: true,
        },
    );
    return $$(value);
};
