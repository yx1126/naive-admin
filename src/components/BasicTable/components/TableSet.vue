<template>
    <n-popover trigger="click" placement="bottom-end">
        <template #trigger>
            <slot />
        </template>
        <template #header>
            <div class="table-set__header">
                <n-checkbox v-model:checked="isCheckAll">
                    列展示
                </n-checkbox>
                <n-checkbox v-model:checked="isCheckIndex">
                    序号列
                </n-checkbox>
                <n-checkbox v-model:checked="isCheckBox">
                    勾选列
                </n-checkbox>
                <n-button type="primary" text @click="onReset">
                    重置
                </n-button>
            </div>
        </template>
        <transition-group class="table-set__list" tag="div" name="list-fade">
            <template v-for="(column, i) in columns" :key="column.title + column.key">
                <div class="table-set__list-item">
                    <span class="index">{{ i + 1 }}</span>
                    <n-checkbox class="checkbox" :checked="!column.hidden" @update:checked="onUpdateChecked($event, i)">
                        <span class="text">{{ column.title }}</span>
                    </n-checkbox>
                    <div class="move">
                        <Icon class="arrow" :size="18" @click="onMove('up', i)"><ArrowUpOutlined /></Icon>
                        <Icon class="arrow" :size="18" @click="onMove('down', i)"><ArrowDownOutlined /></Icon>
                    </div>
                </div>
            </template>
        </transition-group>
    </n-popover>
</template>

<script lang="ts">
import Icon from "@/components/Icon";
import { ArrowDownOutlined, ArrowUpOutlined } from "@vicons/antd";
import { NCheckbox, NButton, type DataTableColumns } from "naive-ui";
import type { Column } from "../index";

export default defineComponent({
    name: "TableSet",
    components: { NCheckbox, NButton, Icon, ArrowDownOutlined, ArrowUpOutlined },
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
            type: Array as PropType<DataTableColumns<any> & Array<Column>>,
            default: () => [],
        },
    },
    emits: ["update:checkAll", "update:checkIndex", "update:checkBox", "reset", "update:checked", "update:move"],
    setup(props, { emit }) {
        const set = useSetStore();

        const columnsList = ref<typeof props.columns>([]);

        const tableSetStyle = computed(() => {
            return {
                "--icon-hover-color": set.themeColor,
            };
        });
        const isCheckAll = computed({
            get: () => props.checkAll,
            set: value => emit("update:checkAll", value),
        });
        const isCheckIndex = computed({
            get: () => props.checkIndex,
            set: value => emit("update:checkIndex", value),
        });
        const isCheckBox = computed({
            get: () => props.checkBox,
            set: value => emit("update:checkBox", value),
        });

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

        function onMove(type: "up" | "down", index: number) {
            emit("update:move", { type, index });
        }

        return {
            columnsList,
            tableSetStyle,
            isCheckAll,
            isCheckIndex,
            isCheckBox,
            onReset,
            onUpdateChecked,
            onMove,
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
    &-item {
        width: 100%;
        height: 34px;
        @extend .flex-align-center;
        &:hover {
            .text {
                color: $hover-color;
            }
        }
        .index {
            display: inline-block;
            width: 20px;
        }
        .icon {
            cursor: pointer;
            &:hover,
            &.active {
                color: $hover-color;
            }
        }
        .checkbox {
            flex: 1;
        }
        .move {
            @extend .flex-align-center;
            .arrow {
                cursor: pointer;
                margin: 0 5px;
                &:hover {
                    color: $hover-color;
                }
            }
        }
        &-fixed {
            width: 60px;
            margin-left: 10px;
            @extend .flex-between-center;
            .vertical-right {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
