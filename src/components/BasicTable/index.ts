import BasicTable from "./BasicTable";
import useTable from "./hooks/useTable";
import type { DataTableColumns } from "naive-ui";
import type { ResolveArray } from "@/types/util";
import type { InjectionKey } from "vue";


const BasicTableSymbol = Symbol("BasicTable") as InjectionKey<TablePrivide>;

interface TablePrivide {
    loading: boolean;
    size: "small" | "medium" | "large";
}

export type TableColumn = ResolveArray<DataTableColumns<any>> & { hidden?: boolean };

export type Behavior = "insert" | "update" | "delete" | "export";

export type TableSize = "small" | "medium" | "large";

export type BasicTableInstance = Empty<typeof BasicTable>;

export interface Column {
    title: string;
    fixed: false | "left" | "right";
    hidden?: boolean;
}

export {
    useTable,
    BasicTableSymbol,
    type TablePrivide,
};

export default BasicTable;
