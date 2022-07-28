import BasicTable from "./BasicTable";

import type { DataTableColumns } from "naive-ui";
import type { ResolveArray } from "@/types/util";

export type TableColumn = ResolveArray<DataTableColumns<any>> & { hidden?: boolean };

export type Behavior = "insert" | "update" | "delete" | "export";

export type TableSize = "small" | "medium" | "large";

export interface Column {
    title: string;
    fixed: false | "left" | "right";
    hidden?: boolean;
}

export default BasicTable;
