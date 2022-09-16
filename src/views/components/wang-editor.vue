<template>
    <div class="wang-editor">
        <n-grid :x-gap="12" :y-gap="12" :cols="2">
            <n-gi>
                <n-card><WangEditor v-model:value="value" /></n-card>
            </n-gi>
            <n-gi>
                <n-card><div>{{ value }}</div></n-card>
            </n-gi>
            <n-gi :span="2">
                <n-card><div class="html" v-html="value" /></n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import WangEditor from "@/components/WangEditor";
defineOptions({
    name: "WandEditor",
});
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
