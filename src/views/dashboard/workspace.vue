<template>
    <div class="workspace" :style="{}">
        <h1>workspace</h1>
        <input v-model="inputValue" />
        <p>{{ inputValue }}</p>
        <n-button v-copy="inputValue" v-copy:success="onCopySuccess">点击复制</n-button>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Workspace",
});

const inputValue = $ref("copy");

function onCopySuccess(e: any) {
    console.log(e);
}
</script>

<style lang="scss" scoped></style>
