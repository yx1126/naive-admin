<template>
    <n-card class="system-set">
        <h1>system-set</h1>
        <n-space>
            <!-- 虚拟滚动 -->
            <n-card class="scrollbar-wrapper">
                <virtual-scroll ref="scrollBarV2Ref" :compoment="NP" :props="{ class: 'p' }" :max-height="400" />
                <template #footer>
                    <n-space>
                        <n-input-number v-model:value="scrollValue" :step="1000" placeholder="scrollTo" />
                        <n-button type="primary" @click="onScrollTo('y')">scroll</n-button>
                    </n-space>
                </template>
            </n-card>
            <!-- 横向滚动 -->
            <n-card class="scrollbar-wrapper">
                <scroll-bar ref="scrollBarRef" :max-height="400">
                    <p v-for="i in 400" :key="i" class="p p1">{{ i }}</p>
                </scroll-bar>
                <template #footer>
                    <n-space>
                        <n-input-number v-model:value="scrollValue" :step="1000" placeholder="scrollTo" />
                        <n-button type="primary" @click="onScrollTo('y')">scroll</n-button>
                    </n-space>
                </template>
            </n-card>
            <!-- 纵向滚动 -->
            <n-card class="scrollbar-wrapper">
                <scroll-bar ref="scrollBarXRef" x-scrollable always>
                    <div class="box-wrapper">
                        <p v-for="i in 40" :key="i" class="p p2">{{ i }}</p>
                    </div>
                </scroll-bar>
                <template #footer>
                    <n-space>
                        <n-input-number v-model:value="scrollXValue" :step="100" placeholder="scrollTo" />
                        <n-button type="primary" @click="onScrollTo('x')">scroll</n-button>
                    </n-space>
                </template>
            </n-card>
        </n-space>
    </n-card>
</template>

<script setup lang="ts">
import { ScrollBar, VirtualScroll } from "@/source-code";

defineOptions({
    name: "SystemSet",
});

const NP = defineComponent({
    name: "NP",
    props: {
        text: { type: [String, Number], default: "1" },
    },
    render() {
        return h("p", { class: "p" }, this.text);
    },
});

const scrollValue = ref(10000);
const scrollXValue = ref(1000);

const scrollBarRef = ref<InstanceType<typeof ScrollBar>>();
const scrollBarXRef = ref<InstanceType<typeof ScrollBar>>();

function onScrollTo(placement: "x" | "y") {
    if(placement === "x") {
        scrollBarXRef.value!.scrollTo({
            left: scrollXValue.value,
        });
    } else if(placement === "y") {
        scrollBarRef.value!.scrollTo({
            top: scrollValue.value,
        });
    }
}
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
    width: 500px;
}
.box-wrapper {
    display: flex;
}
:deep(.p),
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
