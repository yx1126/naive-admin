<template>
    <n-breadcrumb class="breadcrumb" v-if="set.isShowBreadcrumb" :style="breadcrumbStyle">
        <template v-for="(b, i) in breadcrumbList" :key="i">
            <n-breadcrumb-item :clickable="false">
                <span>{{ b?.meta?.title }}</span>
            </n-breadcrumb-item>
        </template>
    </n-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useSetStore } from "@/stores";

const route = useRoute();
const set = useSetStore();

const breadcrumbList = $computed(() => {
    return route.matched.filter((r) => r.path && r.meta.title);
});

const breadcrumbStyle = $computed(() => {
    return {
        "--inverted-color":
            set.navMode === "diablo"
                ? "rgba(255, 255, 255, 0.82)"
                : ["mixin"].includes(set.layoutMode)
                    ? "#BBB"
                    : set.inverted
                        ? "#BBB"
                        : "rgb(118, 124, 130)",
    };
});
</script>
<style lang="scss" scoped>
.breadcrumb {
    :deep(.n-breadcrumb-item__link) {
        color: var(--inverted-color) !important;
    }
}
</style>
