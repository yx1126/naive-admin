<template>
    <n-pagination
        :page-size="size"
        :item-count="total"
        :page-slot="7"
        show-size-picker
        show-quick-jumper
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        @update:page="onPageChange"
        @update:page-size="onSizeChange"
    >
        <template #prefix="{ itemCount }"> 共 {{ itemCount }} 条 </template>
    </n-pagination>
</template>

<script lang="ts" setup>
import { NPagination } from "naive-ui";

withDefaults(
    defineProps<{
        size?: number;
        total?: number;
    }>(),
    {},
);
defineOptions({
    name: "Pagination",
    extends: NPagination,
});

const emit = defineEmits<{
    (event: "change"): void;
    (event: "update:size", value: number): void;
}>();

function onPageChange() {
    emit("change");
}
function onSizeChange(value: number) {
    emit("change");
    emit("update:size", value);
}
</script>
