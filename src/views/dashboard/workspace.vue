<template>
    <div class="workspace">
        <n-grid :cols="12" :x-gap="12" :y-gap="12">
            <n-gi :span="12">
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
                                <n-statistic label="待办" text-right>4/10</n-statistic>
                                <n-statistic label="消息" text-right>12</n-statistic>
                            </n-space>
                        </div>
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="7">
                <n-card title="进行中的项目" :segmented="{ content: true }">
                    <template #header-extra>
                        <n-button type="primary" text>全部项目</n-button>
                    </template>
                    <p text="12px">123</p>
                </n-card>
            </n-gi>
            <n-gi :span="5">
                <n-card>
                    <p text="12px">123</p>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: "Workspace",
});

const underwayList = $ref([
    { title: "NaiveUI", icon: "github", desc: "一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，快有点意思", group: "NaiveUI", time: "9小时前" },
    { title: "Vite", icon: "vite", desc: "Vite 下一代的前端工具链 为开发提供极速响应", group: "Vite", time: "9小时前" },
    { title: "Vue", icon: "vue", desc: "渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web 前端框架。", group: "Vue", time: "9小时前" },
    { title: "Typescript", icon: "typescript", desc: "TypeScript是JavaScript类型的超集。", group: "Typescript9", time: "9小时前" },
    { title: "Scss", icon: "scss", desc: "世界上最成熟、最稳定、最强大的专业级CSS扩展语言！", group: "Scss", time: "9小时前" },
    { title: "Milkdown", icon: "milkdown", desc: "插件驱动的所见即所得的Markdown编辑器框架", group: "Milkdown", time: "9小时前" },
]);

</script>

<style lang="scss" scoped></style>

