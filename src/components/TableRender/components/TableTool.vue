<template>
    <div class="table-render-toolbar">
        <div class="behavior">
            <slot v-if="showBehavior" name="behavior">
                <NButton type="primary" @click="onBehavior('insert')">
                    <span>新增</span>
                    <template #icon><PlusOutlined /></template>
                </NButton>
                <NButton type="success" @click="onBehavior('update')">
                    <span>修改</span>
                    <template #icon><EditOutlined /></template>
                </NButton>
                <NButton type="error" @click="onBehavior('delete')">
                    <span>删除</span>
                    <template #icon><DeleteOutlined /></template>
                </NButton>
                <NButton type="warning" @click="onBehavior('export')">
                    <span>导出</span>
                    <template #icon><DownloadOutlined /></template>
                </NButton>
            </slot>
        </div>
        <div class="set">
            <n-tooltip>
                <span>斑马纹</span>
                <template #trigger>
                    <n-switch :value="showStriped" @update:value="setStriped" />
                </template>
            </n-tooltip>
            <n-tooltip>
                <span>表格全屏</span>
                <template #trigger>
                    <Icon class="icon" :size="20" @click="onToggle">
                        <FullscreenOutlined v-if="isFullScreen" />
                        <FullscreenExitOutlined v-else />
                    </Icon>
                </template>
            </n-tooltip>
            <n-tooltip>
                <span>刷新</span>
                <template #trigger>
                    <Icon class="icon" :size="20" @click="onRefresh"><ReloadOutlined /></Icon>
                </template>
            </n-tooltip>
            <n-dropdown trigger="click" :options="densityOptions" @select="onSelect">
                <n-tooltip>
                    <span>密度</span>
                    <template #trigger>
                        <Icon class="icon" :size="20"><ColumnHeightOutlined /></Icon>
                    </template>
                </n-tooltip>
            </n-dropdown>
            <table-set
                v-model:check-all="checkAll"
                v-model:check-index="checkIndex"
                v-model:check-box="checkBox"
                :columns="columns"
                @reset="onReset"
                @update:fixed="onFixed"
                @update:checked="onUpdateChecked"
            >
                <n-tooltip>
                    <span>列设置</span>
                    <template #trigger>
                        <Icon class="icon" :size="20"><SettingOutlined /></Icon>
                    </template>
                </n-tooltip>
            </table-set>
        </div>
    </div>
</template>

<script lang="ts">
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
import { NTooltip, NSwitch, NDropdown, type DropdownOption } from "naive-ui";
import TableSet from "./TableSet.vue";
import { tableToolContext } from "../index";
import type { Behavior, TableSize, TableColumn } from "../types";

export default defineComponent({
    name: "TableTool",
    components: {
        PlusOutlined,
        EditOutlined,
        DeleteOutlined,
        DownloadOutlined,
        FullscreenOutlined,
        FullscreenExitOutlined,
        ReloadOutlined,
        ColumnHeightOutlined,
        SettingOutlined,
        NTooltip,
        NSwitch,
        NDropdown,
        TableSet,
    },
    props: {
        showBehavior: { type: Boolean, default: true },
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

        const checkAll = computed({
            get: () => columns.value.every((column: TableColumn) => !column.hidden),
            set: (value) => {
                tableInject.onUpdateCheckAll(!value);
            },
        });
        const checkIndex = computed({
            get: () => tableInject.showIndex.value || false,
            set: (value) => tableInject.setValue("showIndex", value),
        });
        const checkBox = computed({
            get: () => tableInject.showCheck.value || false,
            set: (value) => tableInject.setValue("showCheck", value),
        });

        function setStriped(value: boolean) {
            tableInject.setValue("showStriped", value);
        }

        function onSelect(value: TableSize) {
            tableInject.setValue("size", value);
        }

        function onBehavior(type: Behavior) {
            emit("behavior", type);
        }
        function onRefresh() {
            emit("refresh");
        }
        function onUpdateChecked({ checked, index }: { checked: boolean; index: number }) {
            tableInject.onUpdateCheckAll(checked, index);
        }

        return {
            checkAll,
            checkIndex,
            checkBox,
            isFullScreen: computed(() => !tableInject.isFullScreen.value),
            showStriped: computed(() => tableInject.showStriped.value),
            columns,
            onToggle: tableInject.toggleFull,
            setStriped,
            onBehavior,
            onRefresh,
            onSelect,
            onFixed: tableInject.setFixed,
            onReset: tableInject.reset,
            onUpdateChecked,
            densityOptions,
        };
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
