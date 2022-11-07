import type { DataTableColumns } from "naive-ui";
import type { TableColumn, TableRenderProps } from "../types";

function formatColumns(columns?: DataTableColumns<any>) {
    return columns?.map(column => {
        return {
            hidden: false,
            fixed: false,
            ...column,
        } as TableColumn;
    });
}

export default function(props: TableRenderProps) {
    const defaultColumns = ref(formatColumns(props.columns));
    const showCheck = ref(!!props.showCheck);
    const showIndex = ref(!!props.showIndex);

    function reset() {
        showCheck.value = !!props.showCheck;
        showIndex.value = !!props.showIndex;
        defaultColumns.value = formatColumns(props.columns);
    }
    const fixedData = computed(() => {
        return (defaultColumns.value || []).reduce<Record<"left" | "middle" | "right", TableColumn[]>>((pre, cur: TableColumn) => {
            if(cur.fixed === "left") {
                pre.left.push(cur);
            } else if(cur.fixed === "right") {
                pre.right.push(cur);
            } else {
                pre.middle.push(cur);
            }
            return pre;
        }, { left: [], middle: [], right: [] });
    });

    const columns = computed<TableColumn[] | undefined>(() => {
        const { columns: propColumn, pagination, page, size, showCheck: showCheckValue, showIndex: showIndexValue } = props;
        if(!propColumn) return void 0;
        const { left, middle, right } = fixedData.value;
        const data = [...left, ...middle, ...right].filter(c => !c.hidden);
        const hasSelection = (propColumn || []).some(c => c.type === "selection");
        const columnIndex = pagination !== false && page > 0 ? (page - 1) * size : 0;
        if(showIndex.value) {
            data.unshift({
                title: "序号",
                key: "index",
                align: "center",
                fixed: showCheckValue === "left" ? "left" : left.length > 0 ? "left" : showIndexValue,
                width: 80,
                render: (_, rowIndex) => {
                    return h("span", columnIndex + rowIndex + 1);
                },
            } as TableColumn);
        }
        if(showCheck.value && !hasSelection) {
            data.unshift({
                type: "selection",
                fixed: left.length > 0 ? "left" : showCheckValue,
            } as TableColumn);
        }
        return data as TableColumn[];
    });

    return {
        baseColumns: defaultColumns,
        columns,
        showCheck,
        showIndex,
        reset,
    };
}
