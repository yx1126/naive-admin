<template>
    <div class="directive">
        <h1>v-copy</h1>
        <code-card title="基础示例" :code="baseCode">
            <n-space>
                <n-input v-model:value="copyText" clearable />
                <n-button v-copy="copyText" v-copy:success="onCopySuccess" v-copy:error="onCopyError" type="primary">
                    <template #icon>
                        <Icon><CopyOutlined /></Icon>
                    </template>
                    复制
                </n-button>
            </n-space>
        </code-card>
    </div>
</template>

<script lang="ts" setup>
import { CopyOutlined } from "@vicons/antd";
import CodeCard from "@/components/CodeCard";
import { useFreeBack } from "@/hooks";
import type { Event } from "clipboard";

defineOptions({
    name: "Directive",
});

const message = useFreeBack("message");

const copyText = $ref("VueAdmin");

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

function onCopySuccess(e: Event){
    console.log(e);
    message.success("复制成功!");
}
function onCopyError(e: Event){
    console.log(e);
    message.error("复制失败!");
}
</script>

