<template>
    <div class="base-list">
        <n-space vertical :wrap-item="false">
            <n-card>
                <BasicForm
                    ref="baseFormRef"
                    :model="model"
                    :show-feedback="false"
                    inline
                    :grid="true"
                    :cols="4"
                    x-gap="12"
                    y-gap="12"
                >
                    <n-form-item-gi label="姓名：" path="name">
                        <n-input v-model:value="model.name" placeholder="请输入名称" />
                        <template #label>
                            test
                        </template>
                    </n-form-item-gi>
                    <n-form-item-gi label="年龄：" path="age">
                        <n-input v-model:value="model.age" placeholder="请输入年龄" />
                    </n-form-item-gi>
                    <n-form-item-gi label="地址：" path="address">
                        <n-input v-model:value="model.address" placeholder="请输入地址" />
                    </n-form-item-gi>
                    <n-form-item-gi label=" ">
                        <n-space>
                            <n-button type="primary">搜 索</n-button>
                            <n-button>重 置</n-button>
                        </n-space>
                    </n-form-item-gi>
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
                    @page-change="onPageChange"
                />
            <!-- max-height="calc(100vh - 50px - 35px - 20px - 40px - 49px - 40px - 50px)" -->
            </n-card>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import BasicTable from "@/components/BasicTable";
import BasicForm, { useForm, type BasicFormInstance } from "@/components/BasicForm";
import { NTag, NButton, type DataTableColumns } from "naive-ui";

defineOptions({
    name: "BaseList",
});

const baseFormRef = ref<BasicFormInstance>(null);

const { model } = useForm(baseFormRef, () => ({
    name: "",
    age: "",
    address: "",
}));

const basicTableRef = $ref();

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
const size = $ref(4);
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
function onPageChange() {
    message.info("change");
    console.log(basicTableRef);
}

</script>

<style lang="scss" scoped></style>
