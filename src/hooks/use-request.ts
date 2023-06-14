import type { ResponseResult, ListData } from "@/types/axios";

export interface RequestReturn<T = any> {
    data: T;
    loading: Ref<boolean>;
    request: (params: any) => void;
    message: Ref<string>;
}

export interface RequestOptions<T, U = ResponseResult<T>> {
    request: (params: any) => Promise<U>;
    value?: T;
    loading?: boolean;
    type?: "default" | "list" | "concat";
}

export interface RequestListOptions<T> extends RequestOptions<T, ResponseResult<ListData<T>>> {
    concat?: boolean;
}

function useRequest<T extends object>(options: RequestOptions<T>): RequestReturn<T> {
    const loading = ref(options.loading || false);
    let data = reactive(Object.assign({}, options.value)) as T;
    const message = ref("");

    async function request(parmas: any) {
        try {
            loading.value = true;
            const { code, data: result, message: msg } = await options.request(parmas);
            message.value = msg;
            if(code === 200) {
                data = Object.assign(data, result);
            }
        } catch (error) {
            console.error(`[useRequest/request]：`, error);
        } finally {
            loading.value = false;
        }
    }

    return {
        message,
        request,
        loading,
        data,
    };
}

function useListRequest<T = any>(options: RequestListOptions<T>): RequestReturn<Ref<Array<T>>> {
    const loading = ref(options.loading || false);
    const data: Ref<Array<T>> = ref([]);
    const message = ref("");
    const concat = options.concat || true;

    async function request(parmas: any) {
        try {
            loading.value = true;
            const { code, data: result, message: msg } = await options.request(parmas);
            message.value = msg;
            if(code === 200) {
                data.value = [...(concat ? data.value : []), ...result.list];
            }
        } catch (error) {
            console.error(`[useListRequest/request]：`, error);
        } finally {
            loading.value = false;
        }
    }

    return {
        message,
        request,
        loading,
        data,
    };
}


export {
    useRequest,
    useListRequest,
};


export default useRequest;
