import {
    SettingOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
    ColumnHeightOutlined,
    ReloadOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
} from "@vicons/antd";
import TableSet from "./components/TableSet.vue";
import Icon from "../Icon";
import type { PropType } from "vue";
import { NButton, NDataTable, NTooltip, NDropdown, NSwitch, NEmpty, type DataTableColumns, type DropdownOption, type PaginationProps } from "naive-ui";
import useTableColumns from "./hooks/useTableColumns";
import { BasicTableSymbol, type TablePrivide, type TableColumn, type Behavior, type TableSize } from "./index";
import { isBoolean, isString, isUndefined } from "@/util/validata";
import "./BasicTable.scss";

export default defineComponent({
    name: "BasicTable",
    inheritAttrs: false,
    props: {
        showToolbar: { type: Boolean, default: true },
        behavior: { type: Boolean, default: true },
        toolbar: { type: Boolean, default: true },
        columns: { type: Array as PropType<DataTableColumns<any>>, default: void 0 },
        pagination: { type: [Boolean, Object] as PropType<boolean | PaginationProps>, default: true },
        page: { type: Number, default: 1 },
        size: { type: Number, default: 10 },
        total: { type: Number, default: 0 },
        loading: { type: Boolean, default: void 0 },
        injectkey: { type: [String, Symbol], default: void 0 },
        defaultShowCheck: { type: [Boolean, String] as PropType<boolean | "left" | "right">, default: false },
        defaultShowIndex: { type: [Boolean, String] as PropType<boolean | "left" | "right">, default: false },
    },
    emits: ["update:page", "update:size", "page-change", "behavior", "refresh"],
    setup(props, { emit }) {
        const { columns, reset } = useTableColumns(props.columns);
        const set = useSetStore();

        const tableInject: TablePrivide = inject(isUndefined(props.injectkey) ? BasicTableSymbol : props.injectkey, { loading: false, size: "medium" });

        const basicTableWrapperRef = ref<HTMLDivElement | undefined>();
        const { isFullScreen, toggle } = useFullscreen(basicTableWrapperRef);

        const dataTableRef = ref<InstanceType<typeof NDataTable> | null>(null);
        const tableSize = ref<TableSize>(tableInject.size);
        const isShowIndex = ref(!!props.defaultShowIndex);
        const isShowCheck = ref(!!props.defaultShowCheck);
        const isShowStriped = ref(false);

        const baseLoading = computed(() => isBoolean(props.loading) ? props.loading : tableInject.loading);

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
            const { columns: propColumn, pagination, page, size, defaultShowCheck, defaultShowIndex } = props;
            const data = (columns.value || []).filter(c => !c.hidden);
            const hasLeftFixed = (propColumn || []).some(c => c.fixed === "left");
            const columnIndex = pagination !== false && page > 0 ? (page - 1) * size : 0;
            if(isShowCheck.value) {
                data.unshift({
                    type: "selection",
                    fixed: defaultShowIndex === "left" ? "left" : hasLeftFixed ? "left" : isString(defaultShowCheck) ? defaultShowCheck : false,
                } as TableColumn);
            }
            if(isShowIndex.value) {
                data.unshift({
                    title: "序号",
                    key: "index",
                    align: "center",
                    fixed: hasLeftFixed ? "left" : isString(defaultShowIndex) ? defaultShowIndex : false,
                    width: 80,
                    render: (_: any, rowIndex: number) => {
                        return h("span", columnIndex + rowIndex + 1);
                    },
                } as TableColumn);
            }
            return columns.value ? data : void 0;
        });
        const defaultpagination = computed<PaginationProps | false>(() => {
            const { pagination, page, size, total } = props;
            const hander = Object.assign<PaginationProps, false>({
                page,
                pageSize: size,
                itemCount: total,
                pageSizes: [10, 20, 30, 40, 50, 100],
                pageSlot: 7,
                showSizePicker: true,
                showQuickJumper: true,
                prefix: ({ itemCount }) => {
                    return (<span>共{itemCount}条</span>);
                },
                onUpdatePage: (page: number) => {
                    emit("update:page", page);
                    emit("page-change");
                },
                onUpdatePageSize: (size: number) => {
                    emit("update:size", size);
                    emit("page-change");
                },
            }, pagination as false);
            return isBoolean(pagination) ? pagination ? hander : false : hander;
        });

        function dropSelectStyle(key: TableSize) {
            return tableSize.value === key ? `color: ${set.themeColor};` : "";
        }
        function onDensitySelect(key: TableSize) {
            tableSize.value = key;
        }
        function onUpdateCheckAll() {
            if(columns.value) {
                const value = isCheckAll.value;
                columns.value.forEach(column => {
                    column.hidden = value;
                });
            }
        }
        function onResetSet() {
            isShowIndex.value = !!props.defaultShowIndex;
            isShowCheck.value = !!props.defaultShowCheck;
            reset();
        }
        function onUpdateChecked({ checked, index }: { checked: boolean; index: number }) {
            if(columns.value) columns.value[index].hidden = checked;
        }
        function onBehavior(type: Behavior) {
            emit("behavior", type);
        }
        function onRefresh() {
            emit("refresh");
        }
        function onUpdateMove({ type, index }: { type: "up" | "down"; index: number }) {
            if(!columns.value) return;
            const moveIndex = type === "up" ? (index <= 0 ? columns.value.length - 1 : index - 1) : (index >= columns.value.length - 1 ? 0 : index + 1);
            const current = columns.value[index];
            const move = columns.value[moveIndex];
            columns.value[index] =  move;
            columns.value[moveIndex] = current;
        }

        return {
            dataTableRef,
            resourceColumus: columns,
            columnsList,
            basicTableStyle,
            densityOptions,
            defaultpagination,
            tableSize,
            isCheckAll,
            isShowIndex,
            isShowCheck,
            isShowStriped,
            onDensitySelect,
            onUpdateCheckAll,
            onResetSet,
            onUpdateChecked,
            onUpdateMove,
            onBehavior,
            onRefresh,
            basicTableWrapperRef,
            isFullScreen,
            toggleScreen: toggle,
            baseLoading,
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
        const Tootip = (name: string, component: JSX.Element) => {
            return  <NTooltip>{{ default: () => name, trigger: () => component }}</NTooltip>;
        };
        const IconTootip = (name: string, component: JSX.Element, fn?: () => void) => {
            return Tootip(name, <Icon class="icon" size={20} onClick={fn}>{component}</Icon>);
        };
        const ToolBar = (
            <div class="basic-table-toolbar">
                <div class="behavior">{this.behavior ? this.$slots.behavior ? renderSlot(this.$slots, "behavior") : behaviorList : null}</div>
                <div class="set">
                    {Tootip("斑马纹", <NSwitch v-model:value={this.isShowStriped} />)}
                    {IconTootip("表格全屏", this.isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />, this.toggleScreen)}
                    {IconTootip("刷新", <ReloadOutlined />, this.onRefresh)}
                    <NDropdown trigger="click" options={this.densityOptions} onSelect={this.onDensitySelect}>
                        {IconTootip("密度", <ColumnHeightOutlined />)}
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
                        onUpdate:move={this.onUpdateMove}
                    >
                        {IconTootip("列设置", <SettingOutlined />)}
                    </TableSet>
                </div>
            </div>
        );
        return (
            <div class="basic-table-wrapper" ref="basicTableWrapperRef" style={this.basicTableStyle}>
                {this.showToolbar ? ToolBar : null}
                <div class="basic-table">
                    <NDataTable
                        ref="dataTableRef"
                        remote
                        columns={this.columnsList as any}
                        size={this.tableSize}
                        striped={this.isShowStriped}
                        loading={this.baseLoading}
                        pagination={this.defaultpagination}
                        {...mergeProps(this.$attrs)}
                    >
                        {{ empty: () => renderSlot(this.$slots, "empty") }}
                    </NDataTable>
                </div>
                {this.columnsList && this.columnsList?.length <= 0 ? <div class="basic-table-empty"><NEmpty description="暂无列数据" /></div> : null}
            </div>
        );
    },
});
