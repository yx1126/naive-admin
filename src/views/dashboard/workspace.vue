<template>
    <div class="workspace">
        <n-grid :cols="24" :x-gap="12" :y-gap="12">
            <n-gi :span="24">
                <n-card title="工作台">
                    <div flex justify-between items-center w-100p>
                        <div flex items-center flex-1>
                            <n-avatar round :size="64" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                            <div ml-5>
                                <p m-0 text-xl c-333>早安，Admin，开始您一天的工作吧！</p>
                                <p m-0 text-gray-400>今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
                            </div>
                        </div>
                        <div flex-1>
                            <n-space justify="end" :size="150" :wrap-item="false">
                                <n-statistic label="任务" text-right>4/12</n-statistic>
                                <n-statistic label="待办" text-right>5/9</n-statistic>
                                <n-statistic label="消息" text-right>12</n-statistic>
                            </n-space>
                        </div>
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="16">
                <n-card title="进行中的项目" size="small" :segmented="{ content: true }" content-style="padding: 0;">
                    <template #header-extra>
                        <n-button type="primary" text>全部项目</n-button>
                    </template>
                    <div flex flex-wrap>
                        <template v-for="c in underwayList" :key="c.title">
                            <n-card class="project-card" hoverable>
                                <n-thing>
                                    <template #avatar>
                                        <Icon :icon="c.icon" :size="28" />
                                    </template>
                                    <template #header>
                                        {{ c.title }}
                                    </template>
                                    <div h-45px>{{ c.desc }}</div>
                                    <template #footer>
                                        <div flex justify-between>
                                            <span hover:c-409eff cursor-pointer>{{ c.group }}</span>
                                            <span text-gray-400>{{ c.time }}</span>
                                        </div>
                                    </template>
                                </n-thing>
                            </n-card>
                        </template>
                    </div>
                </n-card>
                <n-card mt-12px title="待办" size="small" :segmented="{ content: true }" content-style="padding: 10px;">
                    <ToDoList />
                </n-card>
            </n-gi>
            <n-gi :span="8">
                <n-card size="small" title="公告" :segmented="{ content: true }" content-style="padding: 0;">
                    <n-carousel autoplay show-arrow draggable dot-type="line">
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                        >
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                        >
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                        >
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                        >
                    </n-carousel>
                </n-card>
                <n-card mt-12px size="small" title="便捷操作" :segmented="{ content: true }">
                    <div class="convenient">
                        <a>操作一</a>
                        <a>操作二</a>
                        <a>操作三</a>
                        <a>操作四</a>
                        <a>操作五</a>
                        <a>操作六</a>
                        <n-button type="primary" ghost size="small">
                            <template #icon>
                                <Icon><PlusOutlined /></Icon>
                            </template>
                            添加
                        </n-button>
                    </div>
                </n-card>
                <n-card mt-12px>
                    <div class="echarts">
                        <Echarts :options="radarOptions" />
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { PlusOutlined } from "@vicons/antd";
import ToDoList from "./components/ToDoList.vue";
import Echarts from "@/components/Echarts";
import { radarOptions } from "./echarts";

defineOptions({
    name: "Workspace",
});

const underwayList = $ref([
    { title: "NaiveUI", icon: "github", desc: "一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，快有点意思", group: "NaiveUI", time: "9小时前" },
    { title: "Vite", icon: "vite", desc: "Vite 下一代的前端工具链 为开发提供极速响应", group: "Vite", time: "9小时前" },
    { title: "Vue", icon: "vue", desc: "渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web 前端框架。", group: "Vue", time: "9小时前" },
    { title: "Typescript", icon: "typescript", desc: "TypeScript是JavaScript类型的超集。", group: "Typescript9", time: "9小时前" },
    { title: "Scss", icon: "sass", desc: "世界上最成熟、最稳定、最强大的专业级CSS扩展语言！", group: "Scss", time: "9小时前" },
    { title: "Milkdown", icon: "milkdown", desc: "插件驱动的所见即所得的Markdown编辑器框架", group: "Milkdown", time: "9小时前" },
]);

</script>

<style lang="scss" scoped>
.project-card {
    width: calc(100% / 3);
    border-radius: 0;
}
.convenient {
    & > a {
        display: inline-block;
        width: 25%;
        margin-bottom: 13px;
    }
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.echarts {
    width: 100%;
    height: 338px;
}
</style>

