<template>
    <n-popover trigger="click" placement="bottom-end" content-style="padding: 0;">
        <template #trigger>
            <slot />
        </template>
        <template #header>
            <div class="table-set__header">
                <n-checkbox v-model:checked="isCheckAll">列展示</n-checkbox>
                <n-checkbox v-model:checked="isCheckIndex">序号列</n-checkbox>
                <n-checkbox v-model:checked="isCheckBox">勾选列</n-checkbox>
                <n-button type="primary" text @click="onReset">重置</n-button>
            </div>
        </template>
        <transition-group class="table-set__list" :style="tableSetStyle" tag="div" name="list-fade">
            <template v-for="(column, i) in columns" :key="column.title + column.key">
                <div class="table-set__list-item">
                    <span class="index">{{ i + 1 }}</span>
                    <n-checkbox class="checkbox" :checked="!column.hidden" @update:checked="onUpdateChecked($event, i)">
                        <span class="text">{{ (column as any).title }}</span>
                    </n-checkbox>
                    <n-button-group size="tiny">
                        <n-button :type="column.fixed === 'left' ? 'primary' : 'default'" @click="onFixed('left', column, i)">
                            <template #icon>
                                <Icon :size="18"><VerticalRightOutlined /></Icon>
                            </template>
                        </n-button>
                        <n-button :type="column.fixed === 'right' ? 'primary' : 'default'" @click="onFixed('right', column, i)">
                            <template #icon>
                                <Icon :size="18"><VerticalLeftOutlined /></Icon>
                            </template>
                        </n-button>
                    </n-button-group>
                </div>
            </template>
        </transition-group>
    </n-popover>
</template>

<script lang="ts">
import Icon from "@/components/Icon";
import { VerticalLeftOutlined, VerticalRightOutlined } from "@vicons/antd";
import { NCheckbox, NButton } from "naive-ui";
import type { TableColumn, TableFixed } from "../types";

export default defineComponent({
    name: "TableSet",
    components: { NCheckbox, NButton, Icon, VerticalLeftOutlined, VerticalRightOutlined },
    props: {
        checkAll: {
            type: Boolean,
            default: false,
        },
        checkIndex: {
            type: Boolean,
            default: false,
        },
        checkBox: {
            type: Boolean,
            default: false,
        },
        columns: {
            type: Array as PropType<TableColumn[]>,
            default: () => [],
        },
    },
    emits: ["update:checkAll", "update:checkIndex", "update:checkBox", "reset", "update:checked", "update:fixed"],
    setup(props, { emit }) {
        const set = useSetStore();

        const columnsList = ref<typeof props.columns>([]);

        const tableSetStyle = computed(() => {
            return {
                "--icon-hover-color": set.themeColor,
            };
        });
        const isCheckAll = useVModel(props, "checkAll");
        const isCheckIndex = useVModel(props, "checkIndex");
        const isCheckBox = useVModel(props, "checkBox");

        watch(
            props.columns,
            value => {
                columnsList.value = value as typeof props.columns;
            },
            { immediate: true, deep: true },
        );

        function onReset() {
            emit("reset");
        }

        function onUpdateChecked(value: boolean, index: number) {
            emit("update:checked", { checked: !value, index });
        }

        function onFixed(fixed: TableFixed, column: TableColumn, index: number) {
            emit("update:fixed", column.fixed === fixed ? false : fixed, index);
        }

        return {
            columnsList,
            tableSetStyle,
            isCheckAll,
            isCheckIndex,
            isCheckBox,
            onReset,
            onFixed,
            onUpdateChecked,
        };
    },
});
</script>

<style lang="scss" scoped>
$hover-color: var(--icon-hover-color);
.table-set__header {
    width: 250px;
    @extend .flex-around-center;
}
.table-set__list {
    position: relative;
    max-height: 300px;
    overflow-y: auto;
    padding: 8px 14px;
    &-item {
        width: 100%;
        height: 34px;
        @extend .flex-align-center;
        .index {
            display: inline-block;
            width: 30px;
        }
        .checkbox {
            flex: 1;
        }
    }
}
</style>
