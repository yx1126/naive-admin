<template>
    <div class="" :class="['scroll-bar', { 'is-hover': !isMousedown && !always }]" :style="style">
        <div
            ref="scrollViewRef"
            :class="[
                'scroll-bar__view',
                { 'scroll-bar__view--hidden-default': !native }
            ]"
            @scroll="onScroll"
        >
            <slot />
        </div>
        <template v-if="!native">
            <div v-if="xScrollable" class="scroll-bar__bar is-horizontal">
                <div ref="horizontalThumbRef" class="scroll-bar__thumb" :style="{ transform: `translateX(${translateXY}px)` }" @mousedown="onMousedown" />
            </div>
            <div v-else class="scroll-bar__bar is-vertical">
                <div ref="verticalThumbRef" class="scroll-bar__thumb" :style="{ transform: `translateY(${translateXY}px)` }" @mousedown="onMousedown" />
            </div>
        </template>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { isUndefined, isObject, isNumber } from "@/util/validata";

export default defineComponent({
    name: "ScrollBar",
    props: {
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
        // 横向滚动
        xScrollable: { type: Boolean, default: false },
        isResize: { type: Boolean, default: false },
    },
    emits: ["scroll"],
    setup(props, { emit, expose }) {

        const scrollViewRef = ref<HTMLDivElement | null>(null);
        const horizontalThumbRef = ref<HTMLDivElement | null>(null);
        const verticalThumbRef = ref<HTMLDivElement | null>(null);
        let originalOnSelectStart: any;
        let stopResizeObserver: any;

        // 滑块大小
        const thumbSize = ref(0);
        // 滚动的高度 = 容器总高度 - 容器自身高度
        const scrollSize = ref(0);
        // 滑块 滚动高度
        const thumbScrollSize = ref(0);
        // 滑块 移动距离
        const translateXY = ref(0);
        const isMousedown = ref(false);

        const style = computed(() => {
            const { height, maxHeight } = props;
            return {
                "--scroll-view-height": !isUndefined(height) ? height + "px" : void 0,
                "--scroll-max-height": isUndefined(height) && !isUndefined(maxHeight) ? maxHeight + "px" : void 0,
                "--scroll-bar-thumb-size": thumbSize.value + "px",
            };
        });

        watch(() => [props.height, props.maxHeight, props.minSize, props.xScrollable], () => {
            if(props.native) return;
            nextTick(() => {
                initAttributeValue();
            });
        });

        watch(() => props.isResize, async (resize) => {
            if(!props.xScrollable) return;
            await nextTick();
            if(resize) {
                stopResizeObserver?.();
            } else {
                stopResizeObserver = useResizeObserver(scrollViewRef.value!, () => initAttributeValue());
            }
        }, { immediate: true });

        function initAttributeValue() {
            if(!scrollViewRef.value) return;
            if(props.xScrollable) {
                const size = scrollViewRef.value.offsetWidth ** 2 / scrollViewRef.value.scrollWidth;
                thumbSize.value = Math.max(size, props.minSize);
                scrollSize.value = scrollViewRef.value.scrollWidth - scrollViewRef.value.offsetWidth;
                thumbScrollSize.value = scrollViewRef.value.offsetWidth - thumbSize.value;
            } else {
                const size = scrollViewRef.value.offsetHeight ** 2 / scrollViewRef.value.scrollHeight;
                thumbSize.value = Math.max(size, props.minSize);
                scrollSize.value = scrollViewRef.value.scrollHeight - scrollViewRef.value.offsetHeight;
                thumbScrollSize.value = scrollViewRef.value.offsetHeight - thumbSize.value;
            }
        }

        function scrollTo(options: ScrollToOptions): void;
        // eslint-disable-next-line no-redeclare
        function scrollTo(x: number, y: number): void;
        // eslint-disable-next-line no-redeclare
        function scrollTo(x: unknown, y?: unknown) {
            if(isObject(x)) {
                scrollViewRef.value!.scrollTo(x);
            } else if(isNumber(x) && isNumber(y)) {
                console.log(x, y);
                scrollViewRef.value!.scrollTo(x, y);
            }
        }

        function onScroll(e: Event) {
            const target = e.target as HTMLDivElement;
            // 计算滑块滚动距离
            if(props.xScrollable) {
                translateXY.value = target.scrollLeft / scrollSize.value * thumbScrollSize.value;
            } else {
                translateXY.value = target.scrollTop / scrollSize.value * thumbScrollSize.value;
            }
            emit("scroll", e);
        }

        function onMousedown(event: MouseEvent) {
            isMousedown.value = true;
            event.stopPropagation();
            // 禁止鼠标 middle right 点击
            if(event.ctrlKey || [1, 2].includes(event.button)) return;
            window.getSelection()?.removeAllRanges();
            event.stopImmediatePropagation();
            originalOnSelectStart = document.onselectstart;
            document.onselectstart = () => false;

            const thumb = props.xScrollable ? horizontalThumbRef.value! : verticalThumbRef.value!;

            // 鼠标点击时滑块Y轴默认偏移量
            let translateXY = 0;
            const transform = getComputedStyle(thumb)["transform"];
            if(transform !== "none") {
                const list = (transform.match(/\((.+)\)/)![1] || "").split(",");
                translateXY = Number(list[list.length - (props.xScrollable ? 2 : 1)]);
            }
            function onMousemove(e: MouseEvent) {
                const { xScrollable } = props;
                const xy = (xScrollable ? e.clientX - event.clientX :  e.clientY - event.clientY) + translateXY;
                const moveXY = xy < 0 ? 0 : xy > thumbScrollSize.value ? thumbScrollSize.value : xy;
                scrollViewRef.value![xScrollable ? "scrollLeft" : "scrollTop"] = moveXY / thumbScrollSize.value * scrollSize.value;
            }

            function onMousemup() {
                isMousedown.value = false;
                document.removeEventListener("mousemove", onMousemove);
                document.removeEventListener("mouseup", onMousemup);
                if(document.onselectstart !== originalOnSelectStart)
                    document.onselectstart = originalOnSelectStart;
            }
            document.addEventListener("mousemove", onMousemove);
            document.addEventListener("mouseup", onMousemup);
        }

        onMounted(async () => {
            await nextTick();
            if(!props.native) {
                initAttributeValue();
            }
        });

        onBeforeMount(() => {
            stopResizeObserver?.();
        });

        onUpdated(() => {
            initAttributeValue();
        });


        expose({
            scrollTo,
        });

        return {
            scrollViewRef,
            horizontalThumbRef,
            verticalThumbRef,
            translateXY,
            isMousedown,
            style,
            onScroll,
            onMousedown,
            scrollTo,
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
        &:hover {
            .scroll-bar__thumb {
                display: block;
            }
        }
    }
    &__view {
        height: var(--scroll-view-height);
        max-height: var(--scroll-max-height);
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
                width: var(--scroll-bar-thumb-size);
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
                height: var(--scroll-bar-thumb-size);
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
