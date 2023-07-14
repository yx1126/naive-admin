import { typeOf } from "@/util/validata";

export interface PageConfig {
    page: number;
    size: number;
    total: number;
}

export type PageResult = Record<keyof PageConfig, Ref<number>> & {
    source: ComputedRef<Omit<PageConfig, "total">>;
};

function usePage(page: number): PageResult;
function usePage(page: Partial<PageConfig>): PageResult;
function usePage(page: number, size: number): PageResult;
function usePage(page: number, size: number, total: number): PageResult;
function usePage(page: unknown, size?: number, total?: number): PageResult {
    const state: PageConfig = reactive(
        Object.assign<PageConfig, any>({
            page: page && typeOf(page) === "number" ? (page as number) : 1,
            size: size ? size : 10,
            total: total ? total : 0,
        },
        typeOf(page) === "object" ? page : null),
    );
    return {
        ...toRefs(state),
        source: computed(() => {
            return {
                page: state.page,
                size: state.size,
            };
        }),
    };
}

export default usePage;
