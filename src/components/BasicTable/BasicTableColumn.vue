<template>
    <slot />
</template>

<script lang="ts" setup>
import type { VNodeChild } from "vue";
import type { DataTableColumn, EllipsisProps } from "naive-ui";

interface BasicTableColumn {
    align?: "left" | "right" | "center";
    cellProps?: (rowData: object, rowIndex: number) => object;
    children?: DataTableColumn[];
    className?: string;
    colSpan?: (rowData: object, rowIndex: number) => number;
    defaultFilterOptionValue?: string | number | null;
    defaultFilterOptionValues?: Array<string | number>;
    defaultSortOrder?: "descend" | "ascend" | false;
    disabled?: (rowData: object, rowIndex: number) => boolean;
    ellipsis?: boolean | EllipsisProps;
    expandable?: (rowData: object) => boolean;
    filter?: boolean | ((optionValue: string | number, rowData: object) => boolean | "default");
    filterMode?: "and" | "or";
    filterMultiple?: boolean;
    filterOptionValue?: string | number | null;
    filterOptionValues?: Array<string | number> | null;
    filterOptions?: Array<{ label: string; value: string | number }>;
    fixed?: "left" | "right" | false;
    minWidth?: number | string;
    multiple?: boolean;
    options?: Array<"all" | "none" | { label: string; key: string | number; onSelect: (pageData: any) => void }>;
    render?: (rowData: object, rowIndex: number) => VNodeChild;
}

defineOptions({
    name: "BasicTableColumn",
});

withDefaults(defineProps<BasicTableColumn>(), {
    align: "left",
    defaultFilterOptionValue: null,
    defaultFilterOptionValues: () => [],
    defaultSortOrder: false,
    ellipsis: false,
    filterMode: "or",
    filterMultiple: true,
    fixed: false,
    multiple: true,
});
</script>
