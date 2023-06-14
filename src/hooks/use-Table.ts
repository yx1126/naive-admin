import type { ResponseResult, ListData } from "@/types/axios";

export interface TableRequest<T, S> {
    page?: number;
    size?: number;
    params?: Ref<S> | S;
    request: (params?: TableRequest<T, S>["params"]) => Promise<ResponseResult<Array<T>>>;
    immediate?: boolean;
    concat?: boolean;
    onCatch?: (error: unknown) => void;
    onFinally?: () => void;
    filter?: (value: Array<T>) => Array<T>;
}

export interface ReactiveBody<T> extends Writable<ListData<T>> {
    loading: boolean;
}

function useTableRequest<T, S>(options: TableRequest<T, S>) {
    const {
        page = 1,
        size = 10,
        params,
        request: requestFn,
        immediate = false,
        concat = false,
        onCatch,
        onFinally,
        filter,
    } = options;
    const state: ReactiveBody<T> = reactive({
        loading: false,
        page,
        size,
        total: 0,
        list: [],
    });

    async function request() {
        try {
            state.loading = true;
            const { data } = await requestFn(params);
            state.total = data.total;
            const list = filter ? filter(data.list) : data.list;
            if(concat) {
                state.list.push(...list);
            } else {
                state.list = list;
            }
        } catch (error) {
            console.error(`[useTable/request]：`, error);
            onCatch?.(error);
        } finally {
            state.loading = false;
            onFinally?.();
        }
    }
    async function nextPage() {
        state.page++;
        await request();
    }
    async function prevPage() {
        if(concat) return;
        state.page--;
        await request();
    }
    async function goToPage(page: number) {
        if(concat) return;
        state.page = page;
        await request();
    }

    onMounted(() => {
        if(immediate) {
            request();
        }
    });

    return {
        ...toRefs(state),
        request,
        nextPage,
        prevPage,
        goToPage,
    };

}


export default useTableRequest;
