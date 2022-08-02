<template>
    <div class="workspace" :style="{}">
        <h1>workspace</h1>
        <input v-model="inputValue">
        <p>{{ inputValue }}</p>
        <n-button v-copy="inputValue" v-copy:success="onCopySuccess">点击复制</n-button>
        <div class="flex-just-center">
            <Pagination v-model:page="page" v-model:size="size" :total="total" @change="onChange" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useEventListener } from "@/hooks";

defineOptions({
    name: "Workspace",
});

const inputValue = $ref("copy");
const page = $ref(0);
const size = $ref(10);
const total = $ref(1000);

useEventListener(window, "resize", (e?: Event) => {
    console.log(e);
});

function onCopySuccess(e: any) {
    console.log(e);
}

function onChange() {
    console.log("change");
}
</script>

<style lang="scss" scoped></style>
