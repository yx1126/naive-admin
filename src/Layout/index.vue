<template>
    <component
        :is="mode"
        v-model:collapsed="collapsed"
        :menu-options="defaultMenus"
        :native-scrollbar="false"
        :header-fixed="isKeepHeader"
        :tags-fixed="isKeepTags"
        :inverted="inverted"
        :show-trigger="showTrigger"
        :style="comStyle"
        :on-scroll="onScroll"
    >
        <div class="layout-container" :style="layoutConStyle">
            <slot />
        </div>
        <n-back-top />
    </component>
    <Setting />
    <Watermark />
</template>

<script setup lang="ts">
import type { AsyncComponentLoader } from "vue";
import Setting from "./components/Setting.vue";
import Watermark from "./components/Watermark.vue";
import { LayoutConfig } from "@/config";

const set = useSetStore();
const user = useUserStore();
const mitter = useMitt();

const defaultMenus = $computed(() => user.menus);
const isKeepHeader = $computed(() => set.isKeepTags || set.isKeepHeader);
const isKeepTags = $computed(() => set.isKeepTags);
const showTrigger = $computed(() => {
    return set.menuTrigger === "false" ? false : set.menuTrigger;
});
const comStyle = $computed(() => {
    return {
        "--layoyt-header-height": LayoutConfig.headerHeight + "px",
        "--layoyt-tags-height": (set.isShowTabs ? LayoutConfig.tagsHeight : 0) + "px",
    };
});

const layputMap = {
    aside: loadComponent(() => import("./layout/AsideLayout")),
    top: loadComponent(() => import("./layout/TopLayout")),
    mixin: loadComponent(() => import("./layout/MixinLayout")),
    asideMixin: loadComponent(() => import("./layout/AsideMixinLayout")),
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
                    h("div", Array.from({ length: 4 }).map(() => h("i"))),
                );
            },
        }),
    });
}

function onScroll(e: Event) {
    mitter.emit("scroll", e);
}
</script>

<style lang="scss">
.layout-wrapper {
    height: 100%;
    .layout-header {
        height: var(--layoyt-header-height);
    }
    .layout-tags {
        height: var(--layoyt-tags-height);
    }
    .layout-container {
        width: 100%;
        padding: 10px;
        background-color: var(--diablo-color);
        min-height: calc(100vh - var(--layoyt-header-height) - var(--layoyt-tags-height));
        border: 1px solid var(--diablo-color);
    }
    // mixin
    &.layout-wrapper-mixin {
        .layout-header {
            display: flex;
            .logo {
                flex: 0 0 auto;
            }
        }
        .layout-sider {
            height: calc(100% - 42px);
        }
    }
    // asidemixin
    &.layout-wrapper-asidemixin {
        .breadcrumb {
            margin-left: 10px;
        }
        .layout-sider {
            .n-menu-item-content {
                &::before {
                    left: 6px !important;
                    right: 6px !important;
                }
            }
            .n-menu-item-content {
                padding-left: 14px !important;
                padding-right: 12px !important;
            }
        }
        .layout-sider-child {
            .n-menu-item-content {
                &::before {
                    left: 0px !important;
                    right: 0px !important;
                }
                &.n-menu-item-content--selected::after {
                    content: "";
                    width: 3px;
                    height: 100%;
                    position: absolute;
                    right: 2px;
                    background-color: var(--theme-color);
                }
            }
        }
        .layout-sider {
            height: calc(100% - 42px);
        }
    }
}
</style>
