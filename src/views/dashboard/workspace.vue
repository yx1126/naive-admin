<template>
    <div class="workspace">
        <n-grid :cols="12" :x-gap="12" :y-gap="12">
            <n-gi :span="12">
                <n-card title="工作台">
                    <h1 op-10 hover="op-100 c-red cursor-pointer">workspace</h1>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Workspace",
});
</script>

<style lang="scss" scoped></style>

