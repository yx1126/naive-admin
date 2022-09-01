<template>
    <div class="workspace">
        <n-grid :cols="12" :x-gap="12" :y-gap="12">
            <n-gi :span="12">
                <n-card title="工作台">
                    <div flex justify-between items-center>
                        <div flex items-center>
                            <n-avatar round :size="64" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                            <div ml-5>
                                <p m-0 text-xl color-333>早安，Admin，开始您一天的工作吧！</p>
                                <p m-0 text-gray-400>今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
                            </div>
                        </div>
                        <div>2</div>
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: "Workspace",
});
</script>

<style lang="scss" scoped></style>

