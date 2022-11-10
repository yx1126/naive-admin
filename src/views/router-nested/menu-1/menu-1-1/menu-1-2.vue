<template>
    <div class="menu-1-1">
        <h1>menu-1-2</h1>
        <n-input v-model:value="input" />
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Menu12",
});
const input = $ref("");
</script>

<style lang="scss" scoped></style>
