import { SettingOutlined, PlusOutlined, EditOutlined, DeleteOutlined, DownloadOutlined, ColumnHeightOutlined, ReloadOutlined, FullscreenOutlined, FullscreenExitOutlined } from "@vicons/antd";
import TableSet from "./components/TableSet.vue";
import Pagination from "../Pagination";
import Icon from "../Icon";
import { defineComponent, computed, h, ref, useAttrs, renderSlot, mergeProps, type PropType } from "vue";
import { NButton, NDataTable, NTooltip, NDropdown, type DataTableColumns, type DropdownOption } from "naive-ui";
import { useSetStore } from "@/stores";
import useTableColumns from "./hooks/useTableColumns";
import { useFullscreen } from "@/hooks";
import type { TableColumn, Behavior, TableSize } from "./index";
import "./BasicTable.scss";

export default defineComponent({
    name: "BasicTable",
    inheritAttrs: false,
    props: {
        showToolbar: { type: Boolean, default: true },
        behavior: { type: Boolean, default: true },
        columns: { type: Array as PropType<DataTableColumns<any>>, default: void 0 },
        showIndex: { type: Boolean, default: false },
        pagination: { type: Boolean, default: true },
        page: { type: Number, default: 1 },
        size: { type: Number, default: 10 },
        total: { type: Number, default: 0 },
    },
    emits: ["update:page", "update:size", "page-change", "behavior"],
    setup(props, { emit }) {
        const attrs = useAttrs();
        const { columns, reset } = useTableColumns(props.columns);
        const set = useSetStore();
        const basicTableWrapperRef = ref<HTMLDivElement | undefined>();
        const { fullScreen, toggle } = useFullscreen(basicTableWrapperRef);
        const a = {a:1};
        console.log(a);
        const tableSize = ref<TableSize>("medium");
        const isShowIndex = ref(props.showIndex);
        const isShowCheck = ref(false);

        const isCheckAll = computed(() => (columns.value ? columns.value?.every(column => !(column as any).hidden) : false));
        const basicTableStyle = computed(() => {
            return {
                "--icon-hover-color": set.themeColor,
                "--table-wrapper-back": set.navMode === "diablo" ? "" : "#fff",
            };
        });
        const densityOptions = computed<DropdownOption[]>(() => {
            return [
                { label: "紧凑", key: "small", props: { style: dropSelectStyle("small") } },
                { label: "默认", key: "medium", props: { style: dropSelectStyle("medium") } },
                { label: "宽松", key: "large", props: { style: dropSelectStyle("large") } },
            ];
        });
        const columnsList = computed(() => {
            const data = (columns.value || []).filter(c => !c.hidden);
            const fixed = (props.columns || []).some(c => c.fixed === "left") ? "left" : false;
            const columnIndex = props.pagination && props.page > 0 ? (props.page - 1) * props.size : 0;
            if (isShowCheck.value) {
                data.unshift({
                    type: "selection",
                    fixed,
                } as TableColumn);
            }
            if (isShowIndex.value) {
                data.splice(isShowCheck.value ? 1 : 0, 0, {
                    title: "序号",
                    key: "index",
                    align: "center",
                    fixed,
                    width: 80,
                    render: (_: any, rowIndex: number) => {
                        return h("span", columnIndex + rowIndex + 1);
                    },
                } as TableColumn);
            }
            return columns.value ? data : void 0;
        });

        function dropSelectStyle(key: TableSize) {
            return tableSize.value === key ? `color: ${set.themeColor};` : "";
        }
        function onDensitySelect(key: TableSize) {
            tableSize.value = key;
        }
        function onUpdateCheckAll() {
            if (columns.value) {
                const value = isCheckAll.value;
                columns.value.forEach(column => {
                    column.hidden = value;
                });
            }
        }
        function onResetSet() {
            isShowIndex.value = props.showIndex;
            isShowCheck.value = false;
            reset();
        }
        function onUpdateChecked({ checked, index }: { checked: boolean; index: number }) {
            if (columns.value) columns.value[index].hidden = checked;
        }
        function onPageChange() {
            emit("page-change");
        }
        function onUpdatePage(value: number) {
            emit("update:page", value);
        }
        function onUpdateSize(value: number) {
            emit("update:size", value);
        }
        function onBehavior(type: Behavior) {
            emit("behavior", type);
        }

        return {
            resourceColumus: columns,
            columnsList,
            attrs,
            basicTableStyle,
            densityOptions,
            tableSize,
            isCheckAll,
            isShowIndex,
            isShowCheck,
            onDensitySelect,
            onUpdateCheckAll,
            onResetSet,
            onUpdateChecked,
            onPageChange,
            onUpdatePage,
            onUpdateSize,
            onBehavior,
            basicTableWrapperRef,
            fullScreen,
            toggleScreen: toggle,
        };
    },
    render() {
        const behaviorList = [
            <NButton type="primary" onClick={() => this.onBehavior("insert")}>
                {{ default: () => "新增", icon: () => <PlusOutlined /> }}
            </NButton>,
            <NButton type="success" onClick={() => this.onBehavior("update")}>
                {{ default: () => "修改", icon: () => <EditOutlined /> }}
            </NButton>,
            <NButton type="error" onClick={() => this.onBehavior("delete")}>
                {{ default: () => "删除", icon: () => <DeleteOutlined /> }}
            </NButton>,
            <NButton type="warning" onClick={() => this.onBehavior("export")}>
                {{ default: () => "导出", icon: () => <DownloadOutlined /> }}
            </NButton>,
        ];
        const PaginationCom = (
            <div class="basic-table-pagination">
                <Pagination
                    page={this.page}
                    size={this.size}
                    total={this.total}
                    onUpdate:page={this.onUpdatePage}
                    onUpdate:size={this.onUpdateSize}
                    onChange={this.onPageChange}
                />
            </div>
        );
        const Tootip = (name: string, component: JSX.Element, fn?: () => void) => {
            return (
                <NTooltip>
                    {{
                        default: () => name,
                        trigger: () => <Icon class="icon" size={20} onClick={fn}>{component}</Icon>,
                    }}
                </NTooltip>
            );
        };
        const ToolBar = (
            <div class="basic-table-toolbar">
                <div class="behavior">{this.$slots.behavior ? renderSlot(this.$slots, "behavior") : behaviorList}</div>
                <div class="set">
                    {Tootip("表格全屏", this.fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />, this.toggleScreen)}
                    {Tootip("刷新", <ReloadOutlined />, this.onPageChange)}
                    <NDropdown trigger="click" options={this.densityOptions} onSelect={this.onDensitySelect}>
                        {Tootip("密度", <ColumnHeightOutlined />)}
                    </NDropdown>
                    <TableSet
                        checkAll={this.isCheckAll}
                        checkIndex={this.isShowIndex}
                        checkBox={this.isShowCheck}
                        columns={this.resourceColumus as any}
                        onUpdate:checkAll={this.onUpdateCheckAll}
                        onUpdate:checkIndex={$event => (this.isShowIndex = $event)}
                        onUpdate:checkBox={$event => (this.isShowCheck = $event)}
                        onUpdate:checked={this.onUpdateChecked}
                        onReset={this.onResetSet}
                    >
                        <NTooltip>
                            {{
                                default: () => "列设置",
                                trigger: () => (
                                    <Icon class="icon" size={20}>
                                        {{ default: () => <SettingOutlined /> }}
                                    </Icon>
                                ),
                            }}
                        </NTooltip>
                    </TableSet>
                </div>
            </div>
        );
        return (
            <div class="basic-table-wrapper" ref="basicTableWrapperRef" style={this.basicTableStyle}>
                {this.showToolbar ? ToolBar : null}
                <div class="basic-table">
                    <NDataTable {...mergeProps(this.attrs)} columns={this.columnsList as any} size={this.tableSize}>
                        {{ empty: () => renderSlot(this.$slots, "empty") }}
                    </NDataTable>
                </div>
                {this.pagination ? PaginationCom : null}
            </div>
        );
    },
});
