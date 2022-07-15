<template>
    <component :is="mode" :native-scrollbar="false">
        <div class="layout-container" :style="layoutConStyle">
            <slot></slot>
        </div>
        <n-back-top />
    </component>
    <Setting />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import Setting from "./components/Setting.vue";
import { useSetStore } from "@/stores";

const set = useSetStore();

const layputMap = {
    aside: defineAsyncComponent(() => import("./layout/AsideLayout.vue")),
    top: defineAsyncComponent(() => import("./layout/TopLayout.vue")),
    mixin: defineAsyncComponent(() => import("./layout/MixinLayout.vue")),
    asideMixin: defineAsyncComponent(() => import("./layout/AsideMixinLayout.vue")),
};

const mode = computed(() => {
    return layputMap[set.layoutMode];
});

const layoutConStyle = $computed(() => {
    return {
        "--diablo-color": set.navMode === "diablo" ? "transparent" : "#f5f7f9",
    };
});
</script>

<style lang="scss">
.layout-wrapper {
    height: 100%;
    .layout-header {
        height: 60px;
    }
    .layout-container {
        width: 100%;
        background-color: var(--diablo-color);
        min-height: calc(100vh - 60px - 36px);
        border: 1px solid var(--diablo-color);
    }
}
</style>
