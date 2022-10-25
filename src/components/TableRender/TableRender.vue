<template>
    <div ref="basicTableWrapperRef" class="table-render-wrapper" :style="basicTableStyle">
        <slot name="tool" />
        <div v-if="columns && columns?.length <= 0" class="table-render-empty">
            <NEmpty description="暂无列数据" />
        </div>
        <div class="table-render">
            <NDataTable
                ref="dataTableRef"
                remote
                :columns="columns"
                :striped="showStriped"
                :pagination="defaultPagination"
                :size="tableSize"
                v-bind="$attrs"
            >
                <template #empty>
                    <slot name="empty" />
                </template>
            </NDataTable>
        </div>
    </div>
</template>


<script lang="ts">
import { isBoolean } from "@/util/validata";
import { NDataTable,  NEmpty, type PaginationProps, type DataTableFilterState } from "naive-ui";
import useColumns from "./hooks/useColumns";
import tableRenderProps from "./props";
import { tableToolContext } from "./index";
import type { TableSize } from "./types";

export default defineComponent({
    name: "TableRender",
    components: { NDataTable, NEmpty },
    inheritAttrs: false,
    props: tableRenderProps,
    emits: ["update:page", "update:size", "page-change"],
    setup(props, { emit, expose }) {

        const basicTableWrapperRef = ref<HTMLDivElement | undefined>();
        const dataTableRef = ref<InstanceType<typeof NDataTable> | null>(null);
        const set = useSetStore();
        const { isFullScreen, toggle: toggleFull } = useFullscreen(basicTableWrapperRef);
        const  { baseColumns, columns, showCheck, showIndex, reset } = useColumns(props);

        const tableSize = ref<TableSize>("medium");
        const showStriped = ref(props.striped);

        const basicTableStyle = computed(() => {
            return {
                "--icon-hover-color": set.themeColor,
                "--table-wrapper-back": set.navMode === "diablo" ? "" : "#fff",
            };
        });

        provide(tableToolContext, {
            columns: baseColumns,
            size: tableSize,
            showStriped,
            isFullScreen,
            showCheck,
            showIndex,
            toggleFull,
            reset,
            setFixed,
            setValue,
            onUpdateCheckAll,
        });

        const defaultPagination = computed<PaginationProps | false>(() => {
            const { pagination, page, size, total } = props;
            const hander = Object.assign<PaginationProps, any>({
                page,
                pageSize: size,
                itemCount: total,
                pageSizes: [10, 20, 30, 40, 50, 100],
                pageSlot: 7,
                showSizePicker: true,
                showQuickJumper: true,
                prefix: ({ itemCount }) => {
                    return h("span", null, `共${itemCount}条`);
                },
                onUpdatePage: (page: number) => {
                    emit("update:page", page);
                    emit("page-change");
                },
                onUpdatePageSize: (size: number) => {
                    emit("update:size", size);
                    emit("page-change");
                },
            }, pagination as any);
            return isBoolean(pagination) ? pagination ? hander : false : hander;
        });

        function setFixed(fixed: any, index: number) {
            if(!baseColumns.value) return;
            baseColumns.value[index].fixed = fixed;
        }
        function onUpdateCheckAll(value: boolean, index?: number) {
            if(!baseColumns.value) return;
            if(index !== void 0) {
                // 单选
                baseColumns.value[index].hidden = value;
                return;
            }
            // 全选 全不选
            baseColumns.value.forEach(column => {
                column.hidden = value;
            });
        }
        function setValue(key: string, value: any) {
            switch (key) {
                case "size":
                    tableSize.value = value;
                    break;
                case "showCheck":
                    showCheck.value = value;
                    break;
                case "showIndex":
                    showIndex.value = value;
                    break;
                case "showStriped":
                    showStriped.value = value;
                    break;
            }
        }

        function clearFilters() {
            dataTableRef.value?.clearFilters();
        }
        function clearSorter() {
            dataTableRef.value?.clearSorter();
        }
        function filters(filters: DataTableFilterState | null) {
            dataTableRef.value?.filters(filters);
        }
        function scrollTo(options: { left?: number; top?: number; behavior?: ScrollBehavior }): void;
        // eslint-disable-next-line no-redeclare
        function scrollTo(x: number, y: number): void;
        // eslint-disable-next-line no-redeclare
        function scrollTo(options: any, y?: any) {
            dataTableRef.value?.scrollTo(options, y);
        }
        function sort(columnKey: string | number | null, order: "ascend" | "descend" | false) {
            dataTableRef.value?.sort(columnKey as any, order);
        }

        expose({
            clearFilters,
            clearSorter,
            filters,
            scrollTo,
            sort,
        });

        return {
            basicTableWrapperRef,
            dataTableRef,
            columns,
            tableSize,
            showStriped,
            basicTableStyle,
            defaultPagination,
            clearFilters,
            clearSorter,
            filters,
            scrollTo,
            sort,
        };
    },
});
</script>

<style lang="scss">
.table-render-wrapper {
    width: 100%;
    @each $full in fullscreen, -webkit-full-screen, -ms-fullscreen, -moz-full-screen {
        &:#{$full} {
            background-color: var(--table-wrapper-back) !important;
        }
    }
    .table-render {
        width: 100%;
    }
    .table-render-empty {
        width: 100%;
        padding: 48px 0;
    }
}
</style>
