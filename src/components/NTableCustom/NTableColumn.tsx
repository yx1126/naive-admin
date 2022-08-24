
import type { PropType, VNodeChild } from "vue";
import type { DataTableColumn, EllipsisProps } from "naive-ui";
import type { RowData } from "naive-ui/es/data-table/src/interface";

type Options = Array<"all" | "none" | { label: string; key: string | number; onSelect: (pageData: RowData[]) => void }>;

export default defineComponent({
    name: "NDataTableColumn",
    props: {
        align: { type: String as PropType<"left" | "right" | "center">, default: "left" },
        cellProps: { type: Function as PropType<(rowData: object, rowIndex: number) => object>, default: void 0 },
        children: { type: Array as PropType<DataTableColumn[]>, default: void 0 },
        className: { type: String, default: void 0 },
        colSpan: { type: Function as PropType<(rowData: object, rowIndex: number) => number>, default: void 0 },
        defaultFilterOptionValue: { type: [String, Number] as PropType<string | number | null>, default: null },
        defaultFilterOptionValues: { type: Array as PropType<Array<string | number>>, default: () => [] },
        defaultSortOrder: { type: [String, Boolean] as PropType<"descend" | "ascend" | false>, default: false },
        disabled: { type: Function as PropType<(rowData: object, rowIndex: number) => boolean>, default: void 0 },
        ellipsis: { type: [Boolean, Object] as PropType<boolean | EllipsisProps>, default: false },
        expandable: { type: Function as PropType<(rowData: object) => boolean>, default: void 0 },
        filter: { type: [Boolean, Function] as PropType<boolean | ((optionValue: string | number, rowData: object) => boolean | "default")>, default: void 0 },
        filterMode: { type: String as PropType<"and" | "or">, default: "or" },
        filterMultiple: { type: Boolean, default: true },
        filterOptionValue: { type: [String, Number] as PropType<string | number | null>, default: void 0 },
        filterOptionValues: { type: Array as PropType<Array<string | number> | null>, default: void 0 },
        filterOptions: { type: Array as  PropType<Array<{ label: string; value: string | number }>>, default: void 0 },
        fixed: { type: [String, Boolean] as PropType<"left" | "right" | false>, default: false },
        // eslint-disable-next-line vue/no-reserved-props
        key: { type: [String, Number], default: void 0 },
        minWidth: { type: [Number, String], default: void 0 },
        multiple: { type: Boolean, default: true },
        options: { type: [String, Object] as PropType<Options>, default: void 0 },
        // render
        // renderExpand
        // renderFilter
        // renderFilterIcon
        // renderFilterMenu
        // renderSorter
        // renderSorterIcon
        rowSpan: { type: Function as PropType<(rowData: object, rowIndex: number) => number>, default: void 0 },
        sortOrder: { type: [String, Boolean] as PropType<"descend" | "ascend" | false>, default: void 0 },
        sorter: { type: [String, Boolean, Function] as PropType<boolean | (() => void) | "default">, default: void 0 },
        tree: { type: Boolean, default: false },
        title: { type: [String, Function] as PropType<string | (() => VNodeChild)>, default: void 0 },
        titleRowSpan: { type: Number, default: void 0 },
        type: { type: String as PropType<"selection" | "expand">, default: void 0 },
        width: { type: [Number, String], default: void 0 },

    },
    setup() {
        return {};
    },
    render() {
        return null;
    },
});
