<template>
    <n-layout class="layout-wrapper" has-sider position="absolute">
        <n-layout-sider
            :collapsed="collapsed"
            collapse-mode="width"
            :collapsed-width="64"
            :width="200"
            :inverted="defaultInverted"
            bordered
            :native-scrollbar="nativeScrollbar"
            :show-trigger="showTrigger"
            :on-update:collapsed="onUpdateCollapsed"
        >
            <Logo :collapsed="collapsed" :collapsed-width="64" width="auto" :height="LayoutConfig.headerHeight" />
            <Menu :options="menuOptions" />
        </n-layout-sider>
        <n-layout class="n-layout-main">
            <Portal to="layout-header" :disabled="headerFixed">
                <NLayoutHeader
                    class="layout-header"
                    bordered
                    :inverted="inverted"
                    :position="headerFixed ? 'absolute' : 'static'"
                >
                    <Header>
                        <template #left>
                            <Collapse
                                :collapsed="collapsed"
                                :collapsed-width="59"
                                :width="LayoutConfig.headerHeight"
                                :height="LayoutConfig.headerHeight"
                            />
                            <Breadcrumb />
                        </template>
                    </Header>
                </NLayoutHeader>
            </Portal>
            <Portal to="layout-tags" :disabled="tagsFixed">
                <NLayoutHeader
                    v-if="isShowTabs"
                    class="layout-tags"
                    bordered
                    :position="tagsFixed ? 'absolute' : 'static'"
                    :style="`top: ${LayoutConfig.headerHeight}px`"
                >
                    <Tags />
                </NLayoutHeader>
            </Portal>
            <n-layout-content
                class="layout-content"
                position="absolute"
                :style="`top: ${contentTop}px; bottom: 0`"
                :native-scrollbar="nativeScrollbar"
                :on-scroll="onScroll"
            >
                <portal-target name="layout-header" />
                <portal-target name="layout-tags" />
                <slot />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import type { MenuOption } from "naive-ui";

export default defineComponent({
    name: "AsideLayout",
    components: { Header, Tags, Menu, Logo, Collapse, Breadcrumb },
    props: {
        nativeScrollbar: {
            type: Boolean,
            default: true,
        },
        menuOptions: {
            type: Array as PropType<MenuOption[]>,
            default: () => [],
        },
        headerFixed: {
            type: Boolean,
            default: true,
        },
        tagsFixed: {
            type: Boolean,
            default: true,
        },
        collapsed: {
            type: Boolean,
            default: true,
        },
        inverted: {
            type: Boolean,
            default: true,
        },
        showTrigger: {
            type: [Boolean, String] as PropType<"bar" | "arrow-circle" | boolean>,
            default: false,
        },
        onScroll: {
            type: Function as PropType<(e: Event) => void>,
            default: void 0,
        },
    },
    emits: ["update:collapsed"],
    setup(props, { emit }) {
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isShowTabs = computed(() => set.isShowTabs);
        const contentTop = computed(() => {
            return (props.headerFixed ? LayoutConfig.headerHeight : 0) + (props.tagsFixed && isShowTabs.value ? LayoutConfig.tagsHeight : 0);
        });

        function onUpdateCollapsed(collapsed: boolean) {
            emit("update:collapsed", collapsed);
        }

        return {
            defaultInverted,
            isShowTabs,
            contentTop,
            onUpdateCollapsed,
            LayoutConfig,
        };
    },
});
</script>
