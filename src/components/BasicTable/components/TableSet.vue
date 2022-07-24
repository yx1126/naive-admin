<template>
    <n-popover trigger="click" placement="bottom-end">
        <template #trigger>
            <slot></slot>
        </template>
        <template #header>
            <div class="table-set__header">
                <n-checkbox v-model:checked="isCheckAll">列展示</n-checkbox>
                <n-checkbox v-model:checked="isCheckIndex">序号列</n-checkbox>
                <n-checkbox v-model:checked="isCheckBox">勾选列</n-checkbox>
                <n-button type="primary" text @click="onReset">重置</n-button>
            </div>
        </template>
        <div class="table-set__list" :style="tableSetStyle">
            <template v-for="(column, i) in columns" :key="i">
                <div class="table-set__list-item">
                    <Icon class="drag icon" :size="20"><DragOutlined /></Icon>
                    <n-checkbox class="checkbox" :checked="!column.hidden" @update:checked="onUpdateChecked($event, i)">
                        <span class="text">{{ column.title }}</span>
                    </n-checkbox>
                </div>
            </template>
        </div>
    </n-popover>
</template>

<script lang="ts">
import Icon from "@/components/Icon";
import { DragOutlined } from "@vicons/antd";
import { defineComponent, computed, type PropType } from "vue";
import { NCheckbox, NButton, type DataTableColumns } from "naive-ui";
import { useSetStore } from "@/stores";
import type { Column } from "../index";

export default defineComponent({
    name: "TableSet",
    components: { NCheckbox, NButton, Icon, DragOutlined },
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
    emits: ["update:checkAll", "update:checkIndex", "update:checkBox", "reset", "update:checked"],
    setup(props, { emit }) {
        const set = useSetStore();

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

        function onReset() {
            emit("reset");
        }

        function onUpdateChecked(value: boolean, index: number) {
            emit("update:checked", { checked: !value, index });
        }
        return {
            tableSetStyle,
            isCheckAll,
            isCheckIndex,
            isCheckBox,
            onReset,
            onUpdateChecked,
        };
    },
});
</script>

<style lang="scss" scoped>
.table-set__header {
    width: 250px;
    @extend .flex-around-center;
}
.table-set__list {
    &-item {
        width: 100%;
        height: 34px;
        @extend .flex-align-center;
        .drag {
            margin-right: 10px;
        }
        .icon {
            cursor: pointer;
            &:hover,
            &.active {
                color: var(--icon-hover-color);
            }
        }
        .text:hover {
            color: var(--icon-hover-color);
        }
        .checkbox {
            flex: 1;
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
