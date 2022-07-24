import BasicTable from "./BasicTable.vue";
import BasicTableColumn from "./BasicTableColumn.vue";

import type { DataTableColumns } from "naive-ui";
import type { ResolveArray } from "@/types/util";

export type TableColumn = ResolveArray<DataTableColumns<any>> & { hidden?: boolean };

export type Behavior = "insert" | "update" | "delete" | "export";

export interface Column {
    title: string;
    fixed: false | "left" | "right";
    hidden?: boolean;
}

export { BasicTableColumn };

export default BasicTable;
