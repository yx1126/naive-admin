<template>
    <div class="fullscreen">
        <h1>v-fullscreen</h1>
        <n-grid :cols="1" y-gap="12">
            <n-gi>
                <code-card title="基础示例" :code="baseCode">
                    <n-button v-fullscreen type="primary">
                        <template #icon>
                            <Icon><FullscreenOutlined /></Icon>
                        </template>
                        按钮全屏
                    </n-button>
                </code-card>
            </n-gi>
            <n-gi>
                <code-card title="修饰符" :code="modifiersCode">
                    <n-space>
                        <n-button v-fullscreen.body type="primary">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            全屏
                        </n-button>
                        <n-button v-fullscreen:1.parent type="primary">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            按钮全屏
                        </n-button>
                        <n-button v-fullscreen.stop type="primary">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            按钮全屏
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
            <n-gi>
                <code-card class="full-card" title="选择器" :code="selectorCode">
                    <n-button v-fullscreen="'.full-card'" type="primary">
                        <template #icon>
                            <Icon><FullscreenOutlined /></Icon>
                        </template>
                        card 全屏
                    </n-button>
                </code-card>
            </n-gi>
            <n-gi>
                <code-card class="full-card" title="函数调用" :code="fnCode">
                    <n-space>
                        <n-tag :type="isEnabled ? 'primary' : 'error'" size="large">{{ isEnabled ? "支持全屏" : "不支持全屏" }}</n-tag>
                        <n-tag :type="isFullScreen ? 'primary' : 'error'" size="large">{{ isFullScreen ? "全屏" : "非全屏" }}</n-tag>
                        <n-button type="primary" @click="full">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            full
                        </n-button>
                        <n-button type="primary" @click="exit">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            exit
                        </n-button>
                        <n-button type="primary" @click="toggle">
                            <template #icon>
                                <Icon><FullscreenOutlined /></Icon>
                            </template>
                            toggle
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import CodeCard from "@/components/CodeCard";
import { FullscreenOutlined } from "@vicons/antd";
import { useFullscreen } from "@/hooks";

defineOptions({
    name: "Fullscreen",
});

const { isEnabled, isFullScreen, full, exit, toggle } = useFullscreen();

const baseCode = `
<template>
    <div>
        <n-button v-fullscreen type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            按钮全屏
        </n-button>
    <div>
</template>
`;

const modifiersCode = `
<template>
    <n-space>
        // body 网页全屏
        <n-button v-fullscreen.body type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            全屏
        </n-button>

        // parent：将点击事件挂载到父级元素 arg: 接收一个Number值 向上查找的父元素层级 默认为1
        <n-button v-fullscreen:1.parent type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            按钮全屏
        </n-button>

        // 阻止事件冒泡
        <n-button v-fullscreen.stop type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card 全屏
        </n-button>
    </n-space>
</template>
`;

const selectorCode = `
<template>
    <n-card class="full-card" title="选择器">
        <n-button v-fullscreen="'.full-card'" type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card 全屏
        </n-button>
    </n-card>
</template>
`;

const fnCode = `
<template>
    <n-space>
        <n-tag :type="isEnabled ? 'primary' : 'error'" size="large">{{ isEnabled ? "支持全屏" : "不支持全屏" }}</n-tag>
        <n-tag :type="isFullScreen ? 'primary' : 'error'" size="large">{{ isFullScreen ? "全屏" : "非全屏" }}</n-tag>
        <n-button type="primary" @click="full">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            full
        </n-button>
        <n-button type="primary" @click="exit">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            exit
        </n-button>
        <n-button type="primary" @click="toggle">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            toggle
        </n-button>
    </n-space>
</template>

<script lang="ts" setup>
import { FullscreenOutlined } from "@vicons/antd";
import { useFullscreen } from "@/hooks";

// useFullscreen 接受一个 节点元素 或者一个选择器
const { isEnabled, isFullScreen, full, exit, toggle } = useFullscreen();
<\/script>
`;
</script>

