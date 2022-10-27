<script lang="tsx">
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
import { NButton, NTooltip, NSwitch, NDropdown, type DropdownOption } from "naive-ui";
import TableSet from "./TableSet.vue";
import Icon from "@/components/Icon";
import { tableToolContext } from "../index";
import type { Behavior, TableColumn } from "../types";

export default defineComponent({
    name: "TableTool",
    props: {
        showBehavior: { type: Boolean, default: true },
        tools: { type: Array as PropType<string[]>, default: () => ["striped", "full", "refresh", "size", "set"] },
    },
    emits: ["behavior", "refresh"],
    setup(_, { emit }) {

        const set = useSetStore();

        const tableInject = inject(tableToolContext)!;
        if(!tableInject) {
            throw new Error("[TableRedner/TableTool]：`TableTool` must be placed in `TableRedner`");
        }

        const columns =  computed<any>(() => tableInject.columns.value || []);

        const densityOptions = computed<DropdownOption[]>(() => {
            const size = tableInject.size.value;
            const color = `color: ${set.themeColor};`;
            return [
                { label: "紧凑", key: "small", props: { style: size === "small" ? color : "" } },
                { label: "默认", key: "medium", props: { style: size === "medium" ? color : "" } },
                { label: "宽松", key: "large", props: { style: size === "large" ? color : "" } },
            ];
        });

        const checkAll = computed<boolean>(() => columns.value.every((column: TableColumn) => !column.hidden));
        const checkIndex = computed(() => tableInject.showIndex.value);
        const checkBox = computed(() => tableInject.showCheck.value);
        const isFullScreen = computed(() => !tableInject.isFullScreen.value);
        const showStriped = computed(() => tableInject.showStriped.value);

        const setListMap = computed<Record<string, () => JSX.Element>>(() => {
            const { setValue, toggleFull, reset, setFixed } = tableInject;
            return {
                striped: () => {
                    return Tootip("斑马纹", <NSwitch value={showStriped.value} onUpdateValue={(value) => setValue("showStriped", value)} />);
                },
                full: () => {
                    return Tootip(
                        "表格全屏",
                        <Icon class="icon" size={20} onClick={toggleFull}>
                            { isFullScreen ? <FullscreenOutlined /> : <FullscreenExitOutlined /> }
                        </Icon>,
                    );
                },
                refresh: () => {
                    return Tootip(
                        "刷新",
                        <Icon class="icon" size={20} onClick={() => emit("refresh")}><ReloadOutlined /></Icon>,
                    );
                },
                size: () => {
                    return (
                        <NDropdown trigger="click" options={densityOptions.value} onSelect={(value) => setValue("size", value)}>
                            {{ default: () => Tootip("密度", <Icon class="icon" size={20}><ColumnHeightOutlined /></Icon>) }}
                        </NDropdown>
                    );
                },
                set: () => {
                    return (
                        <TableSet
                            checkAll={checkAll.value}
                            checkIndex={checkIndex.value}
                            checkBox={checkBox.value}
                            onUpdate:checkAll={$event => onUpdateChecked({ checked: !$event })}
                            onUpdate:checkIndex={$event => setValue("showIndex", $event)}
                            onUpdate:checkBox={$event =>  setValue("showCheck", $event)}
                            columns={columns.value}
                            onReset={reset}
                            onUpdate:fixed={setFixed}
                            onUpdate:checked={onUpdateChecked}
                        >
                            { Tootip("列设置", <Icon class="icon" size={20}><SettingOutlined /></Icon>) }
                        </TableSet>
                    );
                },
            };
        });

        function Tootip(value: string, node: JSX.Element) {
            return (
                <NTooltip>{{ default: () => <span>{value}</span>, trigger: () => node }}</NTooltip>
            );
        }

        function onBehavior(type: Behavior) {
            emit("behavior", type);
        }
        function onUpdateChecked({ checked, index }: { checked: boolean; index?: number }) {
            tableInject.onUpdateCheckAll(checked, index);
        }

        return {
            onBehavior,
            setListMap,
        };
    },
    render() {
        const { $slots, tools, showBehavior, onBehavior, setListMap } = this;
        return (
            <div class="table-render-toolbar">
                <div class="behavior">
                    {showBehavior ? renderSlot($slots, "behavior", undefined, () => {
                        return [
                            <NButton type="primary" onClick={() => onBehavior("insert")}>
                                {{ default: () => <span>新增</span>, icon: () => <PlusOutlined /> }}
                            </NButton>,
                            <NButton type="success" onClick={() => onBehavior("update")}>
                                {{ default: () => <span>修改</span>, icon: () => <EditOutlined /> }}
                            </NButton>,
                            <NButton type="error" onClick={() => onBehavior("delete")}>
                                {{ default: () => <span>删除</span>, icon: () => <DeleteOutlined /> }}
                            </NButton>,
                            <NButton type="warning" onClick={() => onBehavior("export")}>
                                {{ default: () => <span>导出</span>, icon: () => <DownloadOutlined /> }}
                            </NButton>,
                        ];
                    }) : null}
                </div>
                <div class="set">
                    {
                        [...new Set(tools)].map(tool => {
                            const node = setListMap[tool];
                            return node ? node() : null;
                        })
                    }
                </div>
            </div>
        );
    },
});
</script>

<style lang="scss">
.table-render-toolbar {
    width: 100%;
    min-height: 34px;
    margin-bottom: 15px;
    @extend .flex-between-center;
    .behavior {
        height: 100%;
        & > *:not(:last-child) {
            margin-right: 8px;
        }
    }
    .set {
        height: 100%;
        @extend .flex-align-center;
        & > *:not(:first-child) {
            margin-left: 15px;
        }
    }
    .icon {
        cursor: pointer;
        &:hover {
            color: var(--icon-hover-color);
        }
    }
}
</style>
