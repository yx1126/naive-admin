<template>
    <div class="base-list">
        <n-space vertical :wrap-item="false">
            <n-card>
                <BasicForm ref="baseFormRef" :model="model" :show-feedback="false" inline>
                    <n-form-item label="name：" path="name">
                        <n-input v-model:value="model.name" placeholder="name" clearable />
                    </n-form-item>
                    <n-form-item label="age：" path="age">
                        <n-input v-model:value="model.age" placeholder="age" clearable />
                    </n-form-item>
                    <n-form-item label="address：" path="address">
                        <n-input v-model:value="model.address" placeholder="address" clearable />
                    </n-form-item>
                    <n-form-item>
                        <n-space>
                            <n-button type="primary" @click="search">搜 索</n-button>
                            <n-button @click="formRef.resetFields">重 置</n-button>
                        </n-space>
                    </n-form-item>
                </BasicForm>
            </n-card>
            <n-card>
                <basic-table
                    ref="basicTableRef"
                    v-model:page="page"
                    v-model:size="size"
                    :total="total"
                    :single-line="false"
                    :columns="columns"
                    :data="data"
                    :scroll-x="1800"
                    max-height="calc(100vh - 50px - 35px - 20px - 40px - 49px - 40px - 50px - 90px)"
                    @page-change="onPageChange"
                />
            </n-card>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import BasicTable, { useTable, type BasicTableInstance } from "@/components/BasicTable";
import BasicForm, { useForm, type BasicFormInstance } from "@/components/BasicForm";
import { NTag, NButton, type DataTableColumns } from "naive-ui";

defineOptions({
    name: "BaseList",
});

const baseFormRef = ref<BasicFormInstance>(null);

const { model, formRef } = useForm(baseFormRef, () => ({
    name: "",
    age: "",
    address: "",
}));

const basicTableRef = $ref<BasicTableInstance>();
const { loading } = useTable($$(basicTableRef));


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

const page = $ref(0);
const size = $ref(20);
const total = $ref(1000);

const columns: DataTableColumns<RowData> = [
    { title: "Name", key: "name", fixed: "left", width: 200 },
    { title: "Age", key: "age", width: 150 },
    { title: "Address", key: "address", minWidth: 300 },
    { title: "Address1", key: "address1", minWidth: 300 },
    { title: "Address2", key: "address2", minWidth: 300 },
    { title: "Address3", key: "address3", minWidth: 300 },
    {
        title: "Tags",
        key: "tags",
        minWidth: 200,
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

const data = $ref<RowData[]>(Array.from({ length: size }).map((_, i) => {
    return {
        key: i,
        name: "Joe Black -- " + i,
        age: Math.floor(Math.random() * 20),
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
        loading.value = false;
        message.info("search");
    }, 1500);
}

function onPageChange() {
    message.info("change");
}

</script>

<style lang="scss" scoped></style>
