<template>
    <div class="console">
        <n-grid :cols="1" :y-gap="12">
            <n-gi :span="1">
                <n-card>
                    <h1>console</h1>
                </n-card>
            </n-gi>
            <n-gi :span="1">
                <n-card>
                    <div class="line-echarts">
                        <Echarts ref="echartsRef" :options="lineOptions" />
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import Echarts from "@/components/Echarts";
import { lineOptions } from "./echarts";

defineOptions({
    name: "Console",
});
</script>

<style lang="scss" scoped>
.console {
    .line-echarts {
        width: 100%;
        height: 350px;
    }
}
</style>
