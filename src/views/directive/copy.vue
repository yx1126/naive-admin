<template>
    <div class="directive">
        <h1>v-copy</h1>
        <n-grid :cols="1" y-gap="12">
            <n-gi>
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
            </n-gi>
            <n-gi>
                <code-card title="函数调用" :code="fnCode">
                    <n-space>
                        <n-input v-model:value="copyTextFn" clearable />
                        <n-button type="primary" @click="onCopy">
                            <template #icon>
                                <Icon><CopyOutlined /></Icon>
                            </template>
                            复制
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { CopyOutlined } from "@vicons/antd";
import copy from "@/util/clipboard";
import type { Event } from "clipboard";

defineOptions({
    name: "Copy",
});

const message = useFreeBack("message");

const copyText = $ref("v-copy");
const copyTextFn = $ref("copyFn");

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
const fnCode = `
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button type="primary" @click="onCopy">
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
import copy from "@/util/clipboard";

const message = useMessage();

const copyText = ref("copyFn");

function onCopy(){
    copy(copyText.value).then((e) => {
        console.log(e);
        message.success("复制成功!");
    }).catch(error => {
        console.log(error);
        message.error("复制失败!");
    });
}
<\/script>
`;

function onCopySuccess(e: Event) {
    console.log(e);
    message.success("复制成功!");
}
function onCopyError(e: Event) {
    console.log(e);
    message.error("复制失败!");
}

function onCopy() {
    copy(copyTextFn).then((e) => {
        console.log(e);
        message.success("复制成功!");
    }).catch(error => {
        console.log(error);
        message.error("复制失败!");
    });
}
</script>

