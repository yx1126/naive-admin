<template>
    <component :is="mode" :native-scrollbar="false">
        <div class="layout-container">
            <slot></slot>
        </div>
        <n-back-top />
    </component>
    <Setting />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import Setting from "./components/Setting.vue";
import { useSetStore } from "@/stores/setting";

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
</script>

<style lang="scss">
.layout-wrapper {
    height: 100%;
    .layout-header {
        height: 60px;
    }
    .layout-container {
        width: 100%;
        background-color: #f5f7f9;
        min-height: calc(100vh - 60px - 36px);
        border: 1px solid #f5f7f9;
    }
}
</style>
