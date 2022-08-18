import type { DataTableFilterState } from "naive-ui";
import type { Ref, InjectionKey } from "vue";
import { BasicTableSymbol, type BasicTableInstance } from "../";

export default function useTable(tableInstance: Ref<BasicTableInstance>, inject: InjectionKey<symbol | string> | symbol | string = BasicTableSymbol) {
    const tableRef = ref(tableInstance);

    const basicTableData = reactive({
        loading: false,
    });

    provide(inject, basicTableData as any);

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
        tableRef: ref({
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
