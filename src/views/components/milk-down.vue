<template>
    <div class="milk-down">
        <h1>milk-down</h1>
        <n-switch v-model:value="readonly" />
        <MilkDown :readonly="readonly" />
    </div>
</template>

<script setup lang="ts">
import MilkDown from "@/components/MilkDown";
defineOptions({
    name: "MilkDownPage",
});

const readonly = $ref(false);
</script>

<style lang="scss" scoped></style>
