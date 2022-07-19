<template>
    <component
        :is="mode"
        v-model:collapsed="collapsed"
        :menu-options="defaultMenus"
        :native-scrollbar="false"
        :header-fixed="isKeepHeader"
        :tags-fixed="isKeepTags"
        :inverted="inverted"
    >
        <div class="layout-container" :style="layoutConStyle">
            <slot></slot>
        </div>
        <n-back-top />
    </component>
    <Setting />
    <Watermark />
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineComponent, h, type AsyncComponentLoader } from "vue";
import Setting from "./components/Setting.vue";
import Watermark from "./components/Watermark.vue";
import { useSetStore, useUserStore } from "@/stores";

const set = useSetStore();
const user = useUserStore();

const defaultMenus = $computed(() => user.menus);
const isKeepHeader = $computed(() => set.isKeepTags || set.isKeepHeader);
const isKeepTags = $computed(() => set.isKeepTags);

const layputMap = {
    aside: loadComponent(() => import("./layout/AsideLayout.vue")),
    top: loadComponent(() => import("./layout/TopLayout.vue")),
    mixin: loadComponent(() => import("./layout/MixinLayout.vue")),
    asideMixin: loadComponent(() => import("./layout/AsideMixinLayout.vue")),
};

const mode = $computed(() => {
    return layputMap[set.layoutMode];
});

const collapsed = $computed({
    get: () => set.collapsed,
    set: value => set.setState("collapsed", value),
});

const layoutConStyle = $computed(() => {
    return {
        "--diablo-color": set.navMode === "diablo" ? "transparent" : "#f5f7f9",
    };
});
const inverted = $computed(() => (["light"].includes(set.navMode) ? false : set.inverted));

function loadComponent(loader: AsyncComponentLoader): ReturnType<typeof defineAsyncComponent> {
    return defineAsyncComponent({
        loader,
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
