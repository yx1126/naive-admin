<template>
    <div class="echarts">
        <div ref="echartsRef" style="width: 100%; height: 100%;" />
    </div>
</template>

<script setup lang="ts">
import * as  Echarts from "echarts";
import type {  EChartsCoreOption, ECharts as EchartsInstance } from "echarts";
import { on, off } from "@/util/dom";

const props = withDefaults(
    defineProps<{
        options: EChartsCoreOption;
        svgRender?: boolean;
    }>(),
    {
        svgRender: false,
    },
);

const echartsRef = $ref<HTMLDivElement | null>(null);
let echarts = $shallowRef<EchartsInstance>();

const set = useSetStore();

watch(() => set.collapsed, () => {
    setTimeout(() => {
        refresh();
    }, 300);
});

watch(
    () => props.options,
    val => {
        echarts.setOption(val);
    },
    {
        deep: true,
    },
);

onMounted(() => {
    echarts = Echarts.init(echartsRef!, void 0, { renderer: props.svgRender ? "svg" : "canvas" });
    echarts.setOption(props.options);
    on(window, "resize", resize);
});

onUnmounted(() => {
    off(window, "resize", resize);
});

defineExpose({
    refresh,
    resize,
    clear,
    instance: $$(echarts),
});

function refresh() {
    clear();
    resize();
    echarts.setOption(props.options);
}

function resize() {
    echarts.resize();
}

function clear() {
    echarts.clear();
}

</script>

<style lang="scss" scoped>
.echarts {
	width: 100%;
	height: 100%;
}
</style>
