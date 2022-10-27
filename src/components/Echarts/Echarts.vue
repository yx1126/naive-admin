<template>
    <div class="echarts">
        <div ref="echartsRef" style="width: 100%; height: 100%;" />
    </div>
</template>

<script lang="ts">
import * as  Echarts from "echarts";
import type {  EChartsCoreOption, ECharts as EchartsInstance } from "echarts";
import { on, off } from "@/util/dom";

export default defineComponent({
    name: "Echarts",
    props: {
        options: { type: Object as PropType<EChartsCoreOption>, required: true },
        svgRender: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
    },
    setup(props, { expose }) {
        const set = useSetStore();

        const echartsRef = ref<HTMLDivElement | null>(null);
        const echarts = shallowRef<EchartsInstance | null>(null);

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
                echarts.value?.setOption(options);
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
            init();
            on(window, "resize", resize);
        });

        onUnmounted(() => {
            if(echarts.value) echarts.value.dispose();
            off(window, "resize", resize);
        });

        expose({
            refresh,
            resize,
            clear,
            instance: echarts,
        });

        function init() {
            if(echarts.value) echarts.value.dispose();
            echarts.value = Echarts.init(echartsRef.value!, props.dark ? "dark" : set.navMode === "diablo" ? "dark" : void 0, {
                renderer: props.svgRender ? "svg" : "canvas",
            });
            echarts.value.setOption(defaultOptions);
            if(set.layoutMode === "asideMixin") {
                setTimeout(resize, 300);
            }
        }

        function refresh() {
            clear();
            resize();
            echarts.value?.setOption(defaultOptions);
        }

        function resize() {
            echarts.value?.resize();
        }

        function clear() {
            echarts.value?.clear();
        }
        return {
            echartsRef,
        };
    },
});



</script>

<style lang="scss" scoped>
.echarts {
	width: 100%;
	height: 100%;
    overflow: hidden;
}
</style>
