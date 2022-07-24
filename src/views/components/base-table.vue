<template>
    <div class="base-table">
        <h1>base-table</h1>
        <n-card>
            <basic-table
                v-model:page="page"
                v-model:size="size"
                :total="total"
                :single-line="false"
                :columns="columns"
                :data="data"
                @page-change="onPageChange"
                @behavior="onBehavior"
                :max-height="200"
                :scroll-x="1800"
            />
        </n-card>
    </div>
</template>

<script setup lang="ts">
import BasicTable, { type Behavior } from "@/components/BasicTable";
import { h } from "vue";
import { NTag, NButton, type DataTableColumns } from "naive-ui";
type RowData = {
    key: number;
    name: string;
    age: number;
    address: string;
    address1: string;
    address2: string;
    address3: string;
    tags: string[];
};

const page = $ref(0);
const size = $ref(10);
const total = $ref(1000);

const columns: DataTableColumns<RowData> = [
    {
        title: "Name",
        key: "name",
        fixed: "left",
        width: 200,
    },
    {
        title: "Age",
        key: "age",
        // minWidth: 100,
        width: "10%",
    },
    {
        title: "Address",
        key: "address",
        minWidth: 300,
    },
    {
        title: "Address1",
        key: "address1",
        minWidth: 300,
    },
    {
        title: "Address2",
        key: "address2",
        minWidth: 300,
    },
    {
        title: "Address3",
        key: "address3",
        minWidth: 300,
    },
    {
        title: "Tags",
        key: "tags",
        minWidth: 200,
        fixed: "right",
        render(row) {
            const tags = row.tags.map(tagKey => {
                return h(
                    NTag,
                    {
                        style: {
                            marginRight: "6px",
                        },
                        type: "primary",
                        bordered: false,
                    },
                    {
                        default: () => tagKey,
                    },
                );
            });
            return tags;
        },
    },
    {
        title: "Action",
        key: "actions",
        fixed: "right",
        width: 200,
        render() {
            return h(
                NButton,
                {
                    size: "small",
                },
                { default: () => "Send Email" },
            );
        },
    },
];

const data = $ref<RowData[]>([
    {
        key: 0,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        address1: "New York No. 1 Lake Park",
        address2: "New York No. 1 Lake Park",
        address3: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: 1,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        address1: "London No. 1 Lake Park",
        address2: "London No. 1 Lake Park",
        address3: "London No. 1 Lake Park",
        tags: ["wow"],
    },
    {
        key: 2,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
    {
        key: 3,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
    {
        key: 4,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
    {
        key: 5,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
]);

function onPageChange() {
    console.log("onPageChange");
}
function onBehavior(type: Behavior) {
    console.log(type);
}
</script>

<style lang="scss" scoped></style>
