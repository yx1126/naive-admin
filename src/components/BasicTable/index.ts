import BasicTable from "./BasicTable";
import useTable from "./hooks/useTable";
import type { DataTableColumns } from "naive-ui";
import type { ResolveArray } from "@/types/util";
import type { InjectionKey } from "vue";


export const BasicTableSymbol = Symbol("BasicTable") as InjectionKey<{ loading: boolean }>;

export type TableColumn = ResolveArray<DataTableColumns<any>> & { hidden?: boolean };

export type Behavior = "insert" | "update" | "delete" | "export";

export type TableSize = "small" | "medium" | "large";

export type BasicTableInstance = InstanceType<typeof BasicTable> | null | undefined;

export interface Column {
    title: string;
    fixed: false | "left" | "right";
    hidden?: boolean;
}

export {
    useTable,
};

export default BasicTable;
