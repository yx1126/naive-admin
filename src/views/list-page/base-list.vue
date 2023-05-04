<template>
    <div class="base-list">
        <n-space vertical :wrap-item="false">
            <n-card>
                <FormRender :context="context" :model="model" :show-feedback="false" inline>
                    <n-form-item label="name：" path="name">
                        <n-input v-model:value="model.name" placeholder="name" clearable />
                    </n-form-item>
                    <n-form-item label="age：" path="age">
                        <n-input v-model:value="model.age" placeholder="age" clearable />
                    </n-form-item>
                    <n-form-item label="address：" path="address">
                        <n-input v-model:value="model.address" placeholder="address" clearable />
                    </n-form-item>
                    <template #action>
                        <FormAction submit-text="搜 索" @submit="search" />
                    </template>
                </FormRender>
            </n-card>
            <n-card>
                <table-render
                    v-model:page="page"
                    v-model:size="size"
                    :total="total"
                    :single-line="false"
                    :columns="columns"
                    :data="data"
                    :scroll-x="1950"
                    :show-index="true"
                    :show-check="true"
                    :loading="loading"
                    max-height="calc(100vh - 50px - 35px - 20px - 76px - 12px - 40px - 49px - 40px - 50px)"
                    @page-change="onPageChange"
                >
                    <template #tool>
                        <table-tool @behavior="onBehavior" />
                    </template>
                </table-render>
            </n-card>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import TableRender, { TableTool, type Behavior } from "@/components/TableRender";
import FormRender, { useForm, FormAction } from "@/components/FormRender";
import { NTag, NButton, type DataTableColumns } from "naive-ui";
import { exportExcel } from "@/util/export";

defineOptions({
    name: "BaseList",
});

const loading = ref(false);

const { model, context } = useForm(() => ({
    name: "",
    age: "",
    address: "",
}));

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

const message = useFeedBack("message");

const page = ref(1);
const size = ref(20);
const total = ref(1000);

const columns: DataTableColumns<RowData> = [
    { title: "Name", key: "name", fixed: "left", width: 200 },
    { title: "Age", key: "age", width: 150 },
    { title: "Address", key: "address", width: 300 },
    { title: "Address1", key: "address1", width: 300 },
    { title: "Address2", key: "address2", width: 300 },
    { title: "Address3", key: "address3", width: 300 },
    {
        title: "Tags",
        key: "tags",
        width: 200,
        fixed: "right",
        render(row) {
            const tags = row.tags.map(tagKey => {
                return h(
                    NTag,
                    { style: { marginRight: "6px"  }, type: "primary", bordered: false },
                    { default: () => tagKey },
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
            return h(NButton, { size: "small" }, { default: () => "Send Email" } );
        },
    },
];

const data = computed<RowData[]>(() => Array.from({ length: size.value }).map((_, i) => {
    return {
        key: i,
        name: "Joe Black -- " + i,
        age: 20 + Math.round(Math.random() * 15),
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    };
}));

function search() {
    loading.value = true;
    setTimeout(() => {
        message.info("search");
        loading.value = false;
    }, 1500);
}

function onPageChange() {
    message.info("change");
}

function onBehavior(type: Behavior) {
    if(type === "export") {
        const header = [
            { label: "Id" },
            {
                label: "Main Information",
                children: [
                    { label: "Title" },
                    { label: "Author" },
                    { label: "Readings" },
                ],
            },
            { label: "Date" },
        ];
        const filterVal = ["key", "name", "age", "address", "tags"];
        const merges = ["A1:A2", "B1:D1", "E1:E2"];
        exportExcel(header, data.value, filterVal, merges);
    } else {
        switch (type) {
            case "insert":
                message.info(type);
                break;
            case "update":
                message.success(type);
                break;
            case "delete":
                message.error(type);
                break;
        }
    }
}

</script>

<style lang="scss" scoped></style>
