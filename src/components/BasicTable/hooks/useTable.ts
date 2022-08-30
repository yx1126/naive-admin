import type { DataTableFilterState } from "naive-ui";
import type { Ref, InjectionKey } from "vue";
import { BasicTableSymbol, type BasicTableInstance, type TablePrivide } from "../";

interface TableOptions {
    inject?: InjectionKey<symbol | string | TablePrivide> | symbol | string;
    size?: TablePrivide["size"];
}

export default function useTable(tableInstance: Ref<BasicTableInstance>, options?: TableOptions) {
    const tableRef = ref(tableInstance);
    const { inject, size } = Object.assign({ inject: BasicTableSymbol, size: "medium" }, options || {});

    const basicTableData = reactive<TablePrivide>({
        loading: false,
        size: size,
    });

    provide(inject, basicTableData);

    function clearFilters() {
        tableRef.value?.dataTableRef?.clearFilters();
    }

    function clearSorter() {
        tableRef.value?.dataTableRef?.clearSorter();
    }

    function filters(filters: DataTableFilterState | null) {
        tableRef.value?.dataTableRef?.filters(filters);
    }

    function page(page: number) {
        tableRef.value?.dataTableRef?.page(page);
    }

    function scrollTo(options: { left?: number; top?: number; behavior?: ScrollBehavior }) {
        tableRef.value?.dataTableRef?.scrollTo(options);
    }

    function sort(columnKey: string | number, order: "ascend" | "descend" | false) {
        tableRef.value?.dataTableRef?.sort(columnKey, order);
    }

    return {
        tableRef: shallowRef({
            clearFilters,
            clearSorter,
            filters,
            page,
            scrollTo,
            sort,
        }),
        ...toRefs(basicTableData),
    };
}
