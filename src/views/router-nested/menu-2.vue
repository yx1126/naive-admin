<template>
    <div class="menu-2">
        <h1>menu-2</h1>
        <n-input v-model:value="input" />
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Menu2",
});
const input = ref("");
</script>

<style lang="scss" scoped></style>
