<template>
    <n-layout class="layout-wrapper layout-wrapper-mixin">
        <n-layout-header class="layout-header" :inverted="defaultInverted" bordered>
            <Logo :width="200" :height="LayoutConfig.headerHeight" />
            <Header>
                <template #left>
                    <template v-if="isCutMenu">
                        <Menu
                            mode="horizontal"
                            :value="defaultValue"
                            :collapsed="false"
                            :inverted="defaultInverted"
                            :options="menuOptions"
                            children-field="noChild"
                        />
                    </template>
                    <template v-else>
                        <Breadcrumb />
                    </template>
                </template>
            </Header>
        </n-layout-header>
        <n-layout has-sider position="absolute" :style="`top: ${LayoutConfig.headerHeight}px`">
            <div class="layout-sider-wrapper">
                <n-layout-sider
                    class="layout-sider"
                    :collapsed="state.collapsed"
                    collapse-mode="width"
                    :collapsed-width="state.width"
                    :width="200"
                    bordered
                    :inverted="inverted"
                    content-style="height: 100%;"
                    :native-scrollbar="nativeScrollbar"
                    :show-trigger="isShowSilder ? showTrigger : false"
                    :on-update:collapsed="onUpdateCollapsed"
                >
                    <Menu :inverted="inverted" :options="menuChildrensOptions" />
                </n-layout-sider>
                <Collapse
                    class="mixin-collapse"
                    :collapsed="state.collapsed"
                    :size="state.collapsed ? 24 : 22"
                    :width="200"
                    :border="inverted ? 'top' : 'top,right'"
                    :inverted="inverted"
                    :collapsed-width="state.width"
                />
            </div>
            <n-layout class="n-layout-main">
                <Portal to="layout-tags" :disabled="tagsFixed">
                    <n-layout-header v-if="isShowTabs" class="layout-tags" bordered>
                        <Tags />
                    </n-layout-header>
                </Portal>
                <n-layout-content
                    class="layout-content"
                    position="absolute"
                    :style="`top: ${contentTop}px; bottom: 0`"
                    :native-scrollbar="nativeScrollbar"
                    :on-scroll="onScroll"
                >
                    <portal-target name="layout-tags" />
                    <slot />
                </n-layout-content>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import type { MenuOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default defineComponent({
    name: "MixinLayout",
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
        const route = useRoute();
        const set = useSetStore();

        const isShowSilder = ref(true);

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isCutMenu = computed(() => set.isCutMenu);
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const isShowTabs = computed(() => set.isShowTabs);
        const contentTop = computed(() => {
            return props.tagsFixed && isShowTabs.value ? LayoutConfig.tagsHeight : 0;
        });
        const menuChildrensOptions = computed(() => {
            const currentMenu = props.menuOptions.find(m => m.path === defaultValue.value);
            const cutMenuList = (currentMenu?.children || []).map(m => {
                return {
                    ...m,
                    icon: m.icon || currentMenu?.icon,
                };
            });
            return isCutMenu.value ? cutMenuList : props.menuOptions;
        });

        watch(
            () => route.fullPath,
            () => {
                if(route.fullPath.startsWith("/redirect")) return;
                isShowSilder.value = menuChildrensOptions.value.length > 0;
            },
            {
                immediate: true,
            },
        );

        const state = computed(() => {
            const hasChild = { collapsed: props.collapsed, width: 64 };
            const noChild = { collapsed: true, width: 0 };
            return isCutMenu.value ? (isShowSilder.value ? hasChild : noChild) : hasChild;
        });

        function onUpdateCollapsed(collapsed: boolean) {
            emit("update:collapsed", collapsed);
        }

        return {
            defaultInverted,
            isCutMenu,
            defaultValue,
            menuChildrensOptions,
            isShowSilder,
            state,
            onUpdateCollapsed,
            isShowTabs,
            contentTop,
            LayoutConfig,
        };
    },
});
</script>
