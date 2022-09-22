
export default function usePage(page = 1, size = 10, total = 0) {
    const state = reactive({
        page,
        size,
        total,
    });
    const result = {
        ...toRefs(state),
        setPage(value: number) {
            state.page = value;
            return result;
        },
        setSize(value: number) {
            state.size = value;
            return result;
        },
        setTotal(value: number) {
            state.total = value;
            return result;
        },
    };
    return result;
}
