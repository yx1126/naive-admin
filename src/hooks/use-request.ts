import type { ResponseResult } from "@/types/axios";
import { typeOf } from "@/util/validata";
import type { Ref } from "vue";

interface UseRequestReturn<T = any> {
    data: T extends Array<infer A> ? Ref<Array<A>> : T extends object ? T : Ref<T>;
    loading: Ref<boolean>;
    axios: () => void;
}

function useRequest<T = any>(request: () => Promise<ResponseResult<T>>, value: any = null, concat = false): UseRequestReturn<T> {

    const loading = ref(false);
    let data = typeOf(value) === "object" ? reactive(value) : ref(value) as Ref<T>;

    async function axios() {
        try {
            loading.value = true;
            const { data: result } = await request();
            if(![null, undefined, "null", "undefined"].includes(result as any)) {
                let newData: any;
                if(concat && typeOf(result) === "array") {
                    newData = [...unref(data), ...(result as any)];
                } else {
                    newData = result;
                }
                if(isRef(data)) {
                    data.value = newData;
                } else {
                    data = newData;
                }
            }
        } catch (error) {
            console.error(`[useRequest/request]：`, error);
        } finally {
            loading.value = false;
        }
    }

    onBeforeMount(axios);

    return {
        axios,
        data,
        loading,
    };
}

export default useRequest;
