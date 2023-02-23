<template>
    <div class="" :class="['scroll-bar', { 'is-hover': !always }]">
        <div
            ref="scrollViewRef"
            :class="[
                'scroll-bar__view',
                { 'scroll-bar__view--hidden-default': !native }
            ]"
            :style="{
                height: height ? height + 'px' : height,
                maxHeight: maxHeight ? maxHeight + 'px' : maxHeight,
            }"
            @scroll="onScroll"
        >
            <Item :compoment="compoment" :props="props" />
        </div>
        <template v-if="!native && isExistScroll">
            <div class="scroll-bar__bar is-vertical">
                <div
                    ref="verticalThumbRef"
                    class="scroll-bar__thumb"
                    :style="{
                        transform: `translateY(${translateXY}px)`,
                        height: thumbSize + 'px'
                    }"
                    @mousedown="onMousedown"
                />
            </div>
        </template>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "VirtualScroll",
    components: {
        Item: defineComponent({
            name: "VirtualScrollItem",
            props: {
                compoment: { type: [Object, Function, String], required: true },
                props: { type: Object, default: () => ({}) },
            },
            setup() {
                return {};
            },
            render() {
                return h(this.compoment as any, this.props);
            },
        }),
    },
    props: {
        data: { type: Array, default: () => [] },
        // 子组件
        compoment: { type: [Object, Function, String], required: true },
        // 子组件props
        props: { type: Object, default: () => ({}) },
        // 高度
        height: { type: Number },
        //最大高度
        maxHeight: { type: Number },
        // 原生滚动条
        native: { type: Boolean, default: false },
        // 滚动条总是显示
        always: { type: Boolean, default: false },
        // 滑块最小值
        minSize: { type: Number, default: 20 },
        isResize: { type: Boolean, default: false },
        keep: { type: Number, default: 30 },
    },
    emits: ["scroll"],
    setup(props, { emit, expose }) {

        const scrollViewRef = ref<HTMLDivElement | null>(null);
        const horizontalThumbRef = ref<HTMLDivElement | null>(null);
        const verticalThumbRef = ref<HTMLDivElement | null>(null);
        let originalOnSelectStart: any;
        let stopResizeObserver: any;

        // 是否存在滚动条
        const isExistScroll = ref(false);
        // 滑块大小
        const thumbSize = ref(0);
        // 滚动的高度 = 容器总高度 - 容器自身高度
        const scrollSize = ref(0);
        // 滑块 滚动高度
        const thumbScrollSize = ref(0);
        // 滑块 移动距离
        const translateXY = ref(0);

        watch(() => [props.height, props.maxHeight, props.minSize], () => {
            if(props.native) return;
            nextTick(init);
        });

        watch(() => props.isResize, async (resize) => {
            await nextTick();
            if(resize) {
                stopResizeObserver?.();
            } else {
                stopResizeObserver = useResizeObserver(scrollViewRef.value!, () => init());
            }
        }, { immediate: true });

        function init() {
            if(!scrollViewRef.value) return;
            const { offsetHeight: oh, scrollHeight: sh, parentNode } = scrollViewRef.value;
            const { offsetHeight: poh } = parentNode as ParentNode as HTMLDivElement;
            isExistScroll.value = sh > poh;
            thumbSize.value = Math.max(oh ** 2 / sh, props.minSize);
            scrollSize.value = sh - oh;
            thumbScrollSize.value = (oh) - thumbSize.value;
        }

        function onScroll(e: Event) {
            const target = e.target as HTMLDivElement;
            // 计算滑块滚动距离
            translateXY.value = target.scrollTop / scrollSize.value * thumbScrollSize.value;
            emit("scroll", e);
        }

        function onMousedown(event: MouseEvent) {
            event.stopPropagation();
            // 禁止鼠标 middle right 点击
            if(event.ctrlKey || [1, 2].includes(event.button)) return;
            window.getSelection()?.removeAllRanges();
            event.stopImmediatePropagation();
            originalOnSelectStart = document.onselectstart;
            document.onselectstart = () => false;

            // 鼠标点击时滑块Y轴默认偏移量
            let translateXY = 0;
            const transform = getComputedStyle(verticalThumbRef.value!)["transform"];
            if(transform !== "none") {
                const list = (transform.match(/\((.+)\)/)![1] || "").split(",");
                translateXY = Number(list[list.length - 1]);
            }
            function onMousemove(e: MouseEvent) {
                const xy = e.clientY - event.clientY + translateXY;
                const moveXY = xy < 0 ? 0 : xy > thumbScrollSize.value ? thumbScrollSize.value : xy;
                scrollViewRef.value!.scrollTop = moveXY / thumbScrollSize.value * scrollSize.value;
            }

            function onMousemup() {
                document.removeEventListener("mousemove", onMousemove);
                document.removeEventListener("mouseup", onMousemup);
                if(document.onselectstart !== originalOnSelectStart) {
                    document.onselectstart = originalOnSelectStart;
                }
            }
            document.addEventListener("mousemove", onMousemove);
            document.addEventListener("mouseup", onMousemup);
        }

        onMounted(async () => {
            await nextTick();
            if(!props.native) {
                init();
            }
        });

        onBeforeMount(() => {
            stopResizeObserver?.();
        });

        onUpdated(init);


        expose({
        });

        return {
            scrollViewRef,
            horizontalThumbRef,
            verticalThumbRef,
            isExistScroll,
            translateXY,
            thumbSize,
            onScroll,
            onMousedown,
        };
    },
});
</script>

<style lang="scss" scoped>
.scroll-bar {
    position: relative;
    overflow: hidden;
    &.is-hover {
        .scroll-bar__thumb {
            display: none;
        }
        &:active,
        &:hover {
            .scroll-bar__thumb {
                display: block;
            }
        }
    }
    &__view {
        overflow: auto;
        &.scroll-bar__view--hidden-default {
            -ms-overflow-style: none;
            scrollbar-width: none !important;
            &::-webkit-scrollbar {
                width: 0 !important;
                display: none !important;
            }
        }
    }
    &__bar {
        position: absolute;
        &.is-horizontal {
            left: 0;
            bottom: 2px;
            width: 100%;
            height: 6px;
            .scroll-bar__thumb {
                height: 100%;
            }
        }
        &.is-vertical {
            width: 6px;
            height: 100%;
            right: 2px;
            top: 0;
            .scroll-bar__thumb {
                width: 100%;
            }
        }
    }
    &__thumb {
        border-radius: 5px;
        background-color: #909399;
        cursor: pointer;
        opacity: .3;
        transition: all 0s;
        &:hover {
            background-color: #909399;
            opacity: .5;
        }
    }
}
</style>
