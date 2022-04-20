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
    .layout-content {
        height: 100%;
        .layout-header {
            height: 60px;
            &.layout-header-fixed {
                position: sticky;
                top: 0;
                z-index: 50;
            }
        }
        .layout-tabs {
            height: 44px;
            &.layout-tabs-fixed {
                position: sticky;
                top: 60px;
                z-index: 40;
            }
        }
    }
}
</style>
