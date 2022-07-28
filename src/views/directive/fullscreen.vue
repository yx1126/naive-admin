<template>
    <div class="fullscreen">
        <h1>v-fullscreen</h1>
        <code-card title="基础示例" :code="baseCode">
            <n-button v-fullscreen type="primary">
                <template #icon>
                    <Icon><FullscreenOutlined /></Icon>
                </template>
                全屏
            </n-button>
        </code-card>
    </div>
</template>

<script lang="ts" setup>
import CodeCard from "@/components/CodeCard";
import { FullscreenOutlined } from "@vicons/antd";

defineOptions({
    name: "Fullscreen",
});

const baseCode = `
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button v-copy="copyText" v-copy:success="onCopySuccess" v-copy:error="onCopyError" type="primary">
            <template #icon>
                <Icon><CopyOutlined /></Icon>
            </template>
            复制
        </n-button>
    <div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CopyOutlined } from "@vicons/antd";
import { useMessage } from "naive-ui";
import type { Event } from "clipboard";

const message = useMessage();

const copyText = ref("VueAdmin");

function onCopySuccess(e: Event){
    console.log(e);
    message.success("复制成功!");
}
function onCopyError(e: Event){
    console.log(e);
    message.error("复制失败!");
}
<\/script>
`;
</script>

