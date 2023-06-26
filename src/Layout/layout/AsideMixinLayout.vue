<template>
    <n-layout class="layout-wrapper layout-wrapper-asidemixin" has-sider position="absolute" :style="layoutWrapperStyle">
        <div class="layout-sider-wrapper">
            <n-layout-sider
                class="layout-sider"
                :collapsed="collapsed"
                collapse-mode="width"
                :width="140"
                :inverted="defaultInverted"
                bordered
                :native-scrollbar="nativeScrollbar"
                :collapsed-trigger-style="triggerStyle"
                :trigger-style="triggerStyle"
                :show-trigger="isShowTrigger"
                :on-update:collapsed="onUpdateCollapsed"
            >
                <Logo :collapsed="collapsed" width="auto" :height="LayoutConfig.headerHeight" :indent="10" @mouseenter="onClearEnterValue" />
                <Menu
                    style="--n-item-height: 36px;"
                    :options="rootMenuOptions"
                    :value="defaultValue"
                    :root-indent="10"
                    :collapsed-icon-size="20"
                    children-field="noChild"
                    :node-props="nodeProps"
                />
            </n-layout-sider>
            <Collapse
                class="mixin-collapse"
                :collapsed="collapsed"
                :size="collapsed ? 24 : 22"
                :width="140"
                :border="defaultInverted ? 'top' : 'top,right'"
                :inverted="defaultInverted"
                :collapsed-width="48"
            />
        </div>
        <n-layout class="n-layout-main">
            <n-layout-header class="layout-header" bordered :inverted="inverted" position="absolute">
                <Header>
                    <template #left>
                        <Breadcrumb class="breadcrumb" />
                    </template>
                </Header>
            </n-layout-header>
            <n-layout-content position="absolute" :style="`top: ${LayoutConfig.headerHeight}px;`">
                <n-layout has-sider style="height: 100%;">
                    <n-layout-sider
                        class="layout-sider-child"
                        :collapsed="isCollapsed"
                        collapse-mode="transform"
                        :width="160"
                        :collapsed-width="0"
                        bordered
                        :native-scrollbar="nativeScrollbar"
                        :trigger-style="isArrowCircle ? arrowCircleTriggerStyle : ''"
                        :show-trigger="isArrowCircle ? (isCollapsed ? false : 'arrow-circle') : false"
                        :on-update:collapsed="onUpdateCollapsed"
                        @mouseleave="onClearEnterValue"
                    >
                        <Menu :collapsed="false" :inverted="false" :options="menuChildrensOptions" :indent="15" />
                    </n-layout-sider>
                    <n-layout>
                        <Portal to="layout-tags" :disabled="tagsFixed">
                            <NLayoutHeader
                                v-if="isShowTabs"
                                class="layout-tags"
                                bordered
                                :position="tagsFixed ? 'absolute' : 'static'"
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
                            <portal-target name="layout-tags" />
                            <slot />
                        </n-layout-content>
                    </n-layout>
                </n-layout>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import type { MenuOption, MenuGroupOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import { useThemeVars } from "naive-ui";

export default defineComponent({
    name: "AsideMixinLayout",
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
        const route = useRoute();
        const set = useSetStore();
        const themeVars = useThemeVars();

        const isCollapsed = ref(false);
        const mouseEnterValue = ref("");

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isShowTabs = computed(() => set.isShowTabs);
        const contentTop = computed(() => {
            return props.tagsFixed && isShowTabs.value ? LayoutConfig.tagsHeight : 0;
        });
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const rootMenuOptions = computed(() => {
            // 折叠是 移除name 不显示TooTip提示
            return props.collapsed ? props.menuOptions.map(item => ({ ...item, name: void 0 })) : props.menuOptions;
        });
        const menuChildrensOptions = computed<MenuOption[]>(() => {
            return props.menuOptions.find(m => {
                if(mouseEnterValue.value) {
                    return m.path === mouseEnterValue.value;
                }
                return m.path === defaultValue.value;
            })?.children || [];
        });
        const layoutWrapperStyle = computed(() => {
            return {
                "--theme-color": set.themeColor,
            };
        });

        const arrowCircleTriggerStyle = computed(() => {
            return `transition: transform 0.3s ${themeVars.value.cubicBezierEaseInOut}; transform: translateX(50%) translateY(-50%) rotate(${props.collapsed ? 180 : 0}deg)`;
        });

        const triggerStyle = computed(() => {
            return isCollapsed.value ? "" : `transition: right 0.3s ${themeVars.value.cubicBezierEaseInOut}; right: -${isCollapsed.value ? 28 : 188}px`;
        });
        const isArrowCircle = computed(() => ["arrow-circle", true].includes(props.showTrigger));
        const isShowTrigger = computed(() => {
            return props.showTrigger === "bar" ? "bar" : isArrowCircle.value ? (isCollapsed.value ? "arrow-circle" : false) : false;
        });

        watch(
            () => route.fullPath,
            () => {
                if(route.fullPath.startsWith("/redirect")) return;
                setCollapsed();
            },
            {
                immediate: true,
            },
        );

        function onUpdateCollapsed() {
            emit("update:collapsed", !props.collapsed);
        }

        function nodeProps(option: MenuOption | MenuGroupOption) {
            return {
                onmouseenter: () => {
                    if(option.isLink) {
                        onClearEnterValue();
                        return;
                    }
                    mouseEnterValue.value = option.path as string;
                    setCollapsed();
                },
                onmouseleave: () => {
                    if(menuChildrensOptions.value.length <= 0) {
                        onClearEnterValue();
                    }
                },
            };
        }

        function onClearEnterValue() {
            mouseEnterValue.value = "";
            setCollapsed();
        }

        function setCollapsed() {
            isCollapsed.value = menuChildrensOptions.value.length <= 0;
        }

        return {
            defaultInverted,
            defaultValue,
            isShowTabs,
            contentTop,
            rootMenuOptions,
            menuChildrensOptions,
            layoutWrapperStyle,
            isCollapsed,
            themeVars,
            nodeProps,
            arrowCircleTriggerStyle,
            triggerStyle,
            isArrowCircle,
            isShowTrigger,
            onUpdateCollapsed,
            onClearEnterValue,
            LayoutConfig,
        };
    },
});
</script>
