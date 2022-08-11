<template>
    <n-card title="图标选择器">
        <div class="icon-select">
            <IconSelect v-model:value="icon" clearable />
        </div>
    </n-card>
</template>

<script setup lang="ts">
import IconSelect from "@/components/IconSelect";

defineOptions({
    name: "IconSelectPage",
});

const icon = $ref("");
</script>

<style lang="scss" scoped></style>
