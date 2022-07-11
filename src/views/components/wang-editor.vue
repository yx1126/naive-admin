<template>
    <div class="wang-editor">
        <h1>wang-editor</h1>
        <n-grid :x-gap="12" :cols="2">
            <n-gi>
                <WangEditor v-model:value="value" />
            </n-gi>
            <n-gi>
                <div class="html" v-html="value"></div>
            </n-gi>
        </n-grid>
        <div>{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
import WangEditor from "@/components/WangEditor";
let value = $ref("");
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin: 20px 0;
}
.html {
    padding: 10px;
    height: 583px;
    overflow: auto;
    border: 1px solid #ccc;
}
</style>
