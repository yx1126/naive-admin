<template>
    <component :is="mode" />
    <Setting />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Setting from "./components/Setting.vue";
import AsideLayout from "./layout/AsideLayout.vue";
import TopLayout from "./layout/TopLayout.vue";
import MixinLayout from "./layout/MixinLayout.vue";
import AsideMixinLaout from "./layout/AsideMixinLayout.vue";
import { useSetStore } from "@/stores/setting";

const set = useSetStore();

const layputMap = {
    aside: AsideLayout,
    top: TopLayout,
    mixin: MixinLayout,
    asideMixin: AsideMixinLaout,
};

const mode = computed(() => {
    return layputMap[set.layoutMode];
});
</script>

<style lang="scss" scoped></style>
