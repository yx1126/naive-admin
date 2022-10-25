import type TableRender from "./TableRender.vue";
import type { ExtractPropTypes, InjectionKey, Ref } from "vue";
import type TableRenderProps from "./props";
import type { DataTableColumns } from "naive-ui";

export type TableRenderProps = ExtractPropTypes<typeof TableRenderProps>;

export type Behavior = "insert" | "update" | "delete" | "export";

export type TableSize = "small" | "medium" | "large";
export type TableFixed = "left" | "right" | false;

export type TableColumn<T = any> = ParseArray<DataTableColumns<T>> & {
    hidden?: boolean;
};

interface BaseTableToolData {
    columns: Ref<Array<TableColumn> | undefined>;
    size: Ref<TableSize>;
    isFullScreen: Ref<boolean>;
    showStriped: Ref<boolean>;
    showCheck: Ref<boolean>;
    showIndex: Ref<boolean>;
}

export interface BaseTableToolVoid {
    toggleFull: () => void;
    reset: () => void;
    setFixed: (fixed: TableFixed, index: number) => void;
    setValue: <T extends keyof BaseTableToolData, R extends BaseTableToolData[T]>(key: T, value: ParseRef<R>) => void;
    onUpdateCheckAll: (value: boolean, index?: number) => void;
}

export type TableToolProvide = InjectionKey<BaseTableToolData & BaseTableToolVoid>;

export type TableRenderInstance = Empty<InstanceType<typeof TableRender>>;
