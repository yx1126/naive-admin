<template>
    <n-layout class="layout-wrapper n-layout-main" position="absolute">
        <Portal to="layout-header" :disabled="headerFixed">
            <NLayoutHeader
                class="layout-header"
                bordered
                :inverted="defaultInverted"
                :position="headerFixed ? 'absolute' : 'static'"
            >
                <Header>
                    <template #logo>
                        <Logo :width="200" :height="LayoutConfig.headerHeight" />
                    </template>
                    <template #left>
                        <Menu mode="horizontal" :options="menuOptions" />
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
        <NLayoutContent
            class="layout-content"
            position="absolute"
            :style="`top: ${contentTop}px; bottom: 0`"
            :native-scrollbar="nativeScrollbar"
            :on-scroll="onScroll"
        >
            <portal-target name="layout-header" />
            <portal-target name="layout-tags" />
            <slot />
        </NLayoutContent>
    </n-layout>
</template>

<script lang="ts">
import type { MenuOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

export default defineComponent({
    name: "TopLayout",
    components: { Header, Tags, Menu, Logo },
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
        onScroll: {
            type: Function as PropType<(e: Event) => void>,
            default: void 0,
        },
    },
    setup(props) {
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isShowTabs = computed(() => set.isShowTabs);
        const contentTop = computed(() => {
            return (props.headerFixed ? LayoutConfig.headerHeight : 0) + (props.tagsFixed && isShowTabs.value ? LayoutConfig.tagsHeight : 0);
        });

        return {
            defaultInverted,
            isShowTabs,
            contentTop,
            LayoutConfig,
        };
    },
});
</script>
