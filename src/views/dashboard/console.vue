<template>
    <div class="console">
        <n-grid :cols="12" :x-gap="12" :y-gap="12">
            <template v-for="item in cardPanels" :key="item.title">
                <n-gi :span="3">
                    <n-card hoverable>
                        <div class="card-panel" :style="`--active-color: ${item.active}`">
                            <div class="icon"><Icon :icon="item.icon" :size="45" /></div>
                            <div>
                                <div class="text">{{ item.title }}</div>
                                <div class="number"><n-number-animation :from="0" :to="item.value" show-separator /></div>
                            </div>
                        </div>
                    </n-card>
                </n-gi>
            </template>
            <n-gi :span="12">
                <n-card>
                    <div class="echarts">
                        <Echarts ref="echartsRef" :options="lineOptions" />
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="4">
                <n-card>
                    <div class="echarts">
                        <Echarts ref="echartsRef" :options="gaugeOptions" />
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="4">
                <n-card>
                    <div class="echarts">
                        <Echarts ref="echartsRef" :options="pieOptions" />
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="4">
                <n-card>
                    <div class="echarts">
                        <Echarts ref="echartsRef" :options="barOptions" />
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import Echarts from "@/components/Echarts";
import { lineOptions, gaugeOptions, pieOptions, barOptions } from "./echarts";

defineOptions({
    name: "Console",
});

const cardPanels = [
    { title: "New Visits", value: 102400, icon: "card-people", active: "#40c9c6" },
    { title: "Messages", value: 81212, icon: "card-message", active: "#36a3f7" },
    { title: "Purchases", value: 9280, icon: "card-money", active: "#f4516c" },
    { title: "Shoppings", value: 13600, icon: "card-shopping", active: "#34bfa3" },
];
</script>

<style lang="scss" scoped>
.console {
    .card-panel {
        width: 100%;
        height: 80px;
        cursor: pointer;
        @extend .flex-between-center;
        &:hover {
            .icon {
                background-color: var(--active-color);
                color: #fff;
            }
        }
        .icon {
            width: 80px;
            height: 80px;
            color: var(--active-color);
            border-radius: 6px;
            transition: all .38s ease-out;
            @extend .flex-center;
        }
        .text {
            color: rgba(0,0,0,.45);
            line-height: 18px;
            font-size: 16px;
            margin-bottom: 12px;
            text-align: right;
        }
        .number {
            font-size: 20px;
            text-align: right;
        }
    }
    .echarts {
        width: 100%;
        height: 350px;
    }
}
</style>
