<template>
    <n-card class="system-set">
        <h1>system-set</h1>
        <n-space>
            <n-card class="scrollbar-wrapper">
                <scroll-bar :max-height="400">
                    <p v-for="i in 400" :key="i" class="p p1">{{ i }}</p>
                </scroll-bar>
            </n-card>
            <n-card class="scrollbar-wrapper">
                <scroll-bar x-scrollable>
                    <div class="box-wrapper">
                        <p v-for="i in 40" :key="i" class="p p2">{{ i }}</p>
                    </div>
                </scroll-bar>
            </n-card>
        </n-space>
    </n-card>
</template>

<script setup lang="ts">
import { ScrollBar } from "@/source-code";
defineOptions({
    name: "SystemSet",
});
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
    width: 500px;
}
.box-wrapper {
    display: flex;
}
.p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: #ecf5ff;
    color: #409eff;
    &.p2 {
        width: 50px;
        min-width: 50px;
    }
}
</style>
