import type { DataTableColumns } from "naive-ui";
import type { TableColumn } from "../index";

function formatColumns(columns?: DataTableColumns<any>) {
    return columns?.map(column => {
        return {
            hidden: false,
            fixed: false,
            ...column,
        } as TableColumn;
    });
}

export default function useTableColumns(columns?: DataTableColumns<any>) {
    const value = ref(formatColumns(columns));
    function reset() {
        value.value = formatColumns(columns);
    }
    return {
        columns: value,
        reset,
    };
}
