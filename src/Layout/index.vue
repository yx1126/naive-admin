<template>
    <component :is="mode" :native-scrollbar="false" />
    <Setting />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import Setting from "./components/Setting.vue";
import { useSetStore } from "@/stores/setting";

const set = useSetStore();

const layputMap = {
    aside: defineAsyncComponent(() => import("./layout/AsideLayout/index.vue")),
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
        background-color: #fff;
    }
    .layout-tags {
        height: 40px;
        background-color: #fff;
    }
    .layout-content {
        .layout-tags {
            height: 44px;
            background-color: #fff;
        }
    }
}
</style>
