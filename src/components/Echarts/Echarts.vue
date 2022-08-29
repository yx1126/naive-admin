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
        dark?: boolean;
    }>(),
    {
        svgRender: false,
        dark: false,
    },
);

const set = useSetStore();

const echartsRef = $ref<HTMLDivElement | null>(null);
let echarts = $shallowRef<EchartsInstance | null>(null);

const defaultOptions = $computed(() => {
    return {
        backgroundColor: props.dark ? void 0 : "transparent",
        ...props.options,
    };
});

watch([() => set.collapsed, () => set.asideMixinCollapsed], () => {
    setTimeout(() => {
        refresh();
    }, 300);
});

watch(
    () => props.options,
    options => {
        echarts?.setOption(options);
    },
    {
        deep: true,
    },
);

watch([() => props.svgRender, () => props.dark, () => set.navMode], () => {
    if(props.dark) return;
    init();
});

onMounted(() => {
    setTimeout(() => {
        init();
    }, 300);
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

function init() {
    if(echarts) echarts.dispose();
    echarts = Echarts.init(echartsRef!, props.dark ? "dark" : set.navMode === "diablo" ? "dark" : void 0, {
        renderer: props.svgRender ? "svg" : "canvas",
    });
    echarts.setOption(defaultOptions);
}

function refresh() {
    clear();
    resize();
    echarts?.setOption(defaultOptions);
}

function resize() {
    echarts?.resize();
}

function clear() {
    echarts?.clear();
}

</script>

<style lang="scss" scoped>
.echarts {
	width: 100%;
	height: 100%;
}
</style>
