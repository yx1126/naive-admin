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
import { computed, defineAsyncComponent, defineComponent, h } from "vue";
import Setting from "./components/Setting.vue";
import { useSetStore } from "@/stores";

const set = useSetStore();

const layputMap = {
    aside: loadComponent("./layout/AsideLayout.vue"),
    top: loadComponent("./layout/TopLayout.vue"),
    mixin: loadComponent("./layout/MixinLayout.vue"),
    asideMixin: loadComponent("./layout/AsideMixinLayout.vue"),
};

const mode = computed(() => {
    return layputMap[set.layoutMode];
});

const layoutConStyle = $computed(() => {
    return {
        "--diablo-color": set.navMode === "diablo" ? "transparent" : "#f5f7f9",
    };
});

function loadComponent(value: string): ReturnType<typeof defineAsyncComponent> {
    return defineAsyncComponent({
        loader: () => import(value),
        delay: 200,
        loadingComponent: defineComponent({
            render() {
                return h(
                    "div",
                    { class: "page-loading" },
                    h(
                        "div",
                        {
                            class: "icon-wrapper",
                        },
                        Array.from({ length: 4 }).map(() => h("i")),
                    ),
                );
            },
        }),
    });
}
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
