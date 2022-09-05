<template>
    <n-data-table
        class="todo-table"
        :columns="columns"
        :data="toDoList"
        :style="{ height: '375px' }"
        :bordered="false"
        flex-height
    />
</template>

<script setup lang="ts">
import Icon from "@/components/Icon";
import { CloseOutlined } from "@vicons/antd";
import { NCheckbox, NTag, type DataTableColumns } from "naive-ui";

defineOptions({
    name: "ToDoList",
});

interface ToDoThings {
    things: string;
    isFinish: boolean;
}

const columns: DataTableColumns<ToDoThings> = [
    {
        title: "", key: "", width: 50, align: "center",
        render(row, i) {
            return h(NCheckbox, {
                checked: row.isFinish,
                onUpdateChecked: (value) => {
                    toDoList[i].isFinish = value;
                },
            });
        },
    },
    {
        title: "things", key: "things",
        render(row) {
            return h("span", { style: row.isFinish ? "text-decoration: line-through; color: #999;" : "" }, row.things);
        },
    },
    {
        title: "finish", key: "isFinish", width: 120, align: "center",
        render(row) {
            return h(NTag, { type: row.isFinish ? "success" : "error" }, { default: () => row.isFinish ? "已完成" : "未完成" });
        },
    },
    {
        title: "finish", key: "isFinish", width: 120, align: "center",
        render(_, i) {
            return h(Icon, {
                style: "cursor: pointer;",
                onClick: () => {
                    toDoList.splice(i, 1);
                },
            }, { default: () => h(CloseOutlined) });
        },
    },
];

const toDoList = $ref<ToDoThings[]>([
    { things: "今天要修复100个bug", isFinish: false },
    { things: "今天要修复100个bug", isFinish: false },
    { things: "今天要写100行代码加几个bug吧", isFinish: false },
    { things: "今天要修复100个bug", isFinish: false },
    { things: "今天要修复100个bug", isFinish: true },
    { things: "今天要写100行代码加几个bug吧", isFinish: true },
    { things: "今天要修复100个bug", isFinish: false },
    { things: "今天要修复100个bug", isFinish: true },
    { things: "今天要写100行代码加几个bug吧", isFinish: true },
]);

</script>

<style lang="scss" scoped>
.todo-table {
    :deep(.n-data-table-base-table-header) {
        display: none;
    }
}
</style>
