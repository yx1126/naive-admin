<template>
    <n-badge class="message-badge" :value="value" :max="99" dot>
        <Icon :size="20"><BellOutlined /></Icon>
    </n-badge>
</template>

<script setup lang="ts">
import { BellOutlined } from "@vicons/antd";

const value = ref(10);
</script>

<style lang="scss" scoped>
.message-badge {
    color: currentColor;
}
</style>
