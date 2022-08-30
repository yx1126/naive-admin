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
        <template #prefix="{ itemCount }">
            共 {{ itemCount }} 条
        </template>
    </n-pagination>
</template>

<script lang="ts" setup>
import { NPagination } from "naive-ui";

defineOptions({
    name: "Pagination",
    extends: NPagination,
});

withDefaults(
    defineProps<{
        size?: number;
        total?: number;
    }>(),
    {},
);
const emit = defineEmits<{
    (event: "change"): void;
    (event: "update:page", value: number): void;
    (event: "update:size", value: number): void;
}>();

function onPageChange(value: number) {
    emit("change");
    emit("update:page", value);
}
function onSizeChange(value: number) {
    emit("change");
    emit("update:size", value);
}
</script>
