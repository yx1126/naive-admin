
import type { DataTableColumns, PaginationProps } from "naive-ui";

const tableRenderProps = {
    columns: { type: Array as PropType<DataTableColumns<any>>, default: void 0 },
    pagination: { type: [Boolean, Object] as PropType<boolean | PaginationProps>, default: true },
    page: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 0 },
    loading: { type: Boolean, default: void 0 },
    showCheck: { type: [Boolean, String] as PropType<boolean | "left">, default: false },
    showIndex: { type: [Boolean, String] as PropType<boolean | "left">, default: false },
    striped: { type: Boolean, default: false },
} as const;


export default tableRenderProps;
