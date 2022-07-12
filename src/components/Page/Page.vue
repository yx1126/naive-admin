<template>
    <div class="page-container" :style="pageConStyle"></div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores";

const pageConStyle = $computed(() => ({}));
</script>

<style lang="scss" scoped>
.page-container {
}
</style>
