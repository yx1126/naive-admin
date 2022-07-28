import { defineComponent, computed, renderSlot, ref, watch, type PropType } from "vue";
import  { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent ,type MenuOption } from "naive-ui";
import { useRoute } from "vue-router";
import { useSetStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import { useThemeVars } from "naive-ui";

export default defineComponent({
    name: "AsideMixinLayout",
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
            type: [Boolean, String],
            default: false,
        },
    },
    emits: ["update:collapsed"],
    setup(props, { emit }) {
        const route = useRoute();
        const set = useSetStore();
        const themeVars = useThemeVars();

        const isCollapsed = ref(false);

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const contentTop = computed(() => {
            return props.tagsFixed ? 35 : 0;
        });
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const menuChildrensOptions = computed<MenuOption[]>(() => {
            return props.menuOptions.find(m => m.path === defaultValue.value)?.children || [];
        });
        const layoutWrapperStyle = computed(() => {
            return {
                "--theme-color": set.themeColor,
            };
        });

        watch(
            () => route.fullPath,
            () => {
                if (route.fullPath.startsWith("/redirect")) return;
                isCollapsed.value = menuChildrensOptions.value.length <= 0;
            },
            {
                immediate: true,
            },
        );

        function onUpdateCollapsed() {
            emit("update:collapsed", !props.collapsed);
        }

        return {
            defaultInverted,
            defaultValue,
            contentTop,
            menuChildrensOptions,
            layoutWrapperStyle,
            isCollapsed,
            onUpdateCollapsed,
            themeVars,
        };
    },
    render() {
        const arrowCircleTriggerStyle = `transition: transform 0.3s ${
            this.themeVars.cubicBezierEaseInOut
        }; transform: translateX(50%) translateY(-50%) rotate(${this.collapsed ? 180 : 0}deg)`;
        const triggerStyle = this.isCollapsed
            ? ""
            : `transition: right 0.3s ${this.themeVars.cubicBezierEaseInOut}; right: -${this.isCollapsed ? 28 : 188}px`;
        const isShowTrigger =
            this.showTrigger === "bar" ? "bar" : this.showTrigger === "arrow-circle" ? (this.isCollapsed ? "arrow-circle" : false) : false;

        const TagsLayout = (
            <NLayoutHeader class="layout-tags" bordered position={this.tagsFixed ? "absolute" : "static"}>
                <Tags />
            </NLayoutHeader>
        );
        return (
            <NLayout class="layout-wrapper layout-wrapper-asidemixin" has-sider position="absolute" style={this.layoutWrapperStyle}>
                <div class="layout-sider-wrapper">
                    <NLayoutSider
                        class="layout-sider"
                        collapsed={this.collapsed}
                        collapse-mode="width"
                        width={140}
                        inverted={this.defaultInverted}
                        bordered
                        native-scrollbar={this.nativeScrollbar}
                        collapsed-trigger-style={triggerStyle}
                        trigger-style={triggerStyle}
                        show-trigger={isShowTrigger}
                        onUpdate:collapsed={this.onUpdateCollapsed}
                    >
                        <Logo collapsed={this.collapsed} width="auto" indent={10} />
                        <Menu options={this.menuOptions} value={this.defaultValue} root-indent={10} collapsed-icon-size={20} children-field="noChild" />
                    </NLayoutSider>
                    <Collapse
                        class="mixin-collapse"
                        collapsed={this.collapsed}
                        size={this.collapsed ? 24 : 22}
                        width={140}
                        border={this.defaultInverted ? "top" : "top,right"}
                        inverted={this.defaultInverted}
                        collapsed-width={48}
                    />
                </div>
                <NLayout class="n-layout-main">
                    <NLayoutHeader class="layout-header" bordered inverted={this.inverted} position="absolute">
                        <Header>{{ left: () => <Breadcrumb class="breadcrumb" /> }}</Header>
                    </NLayoutHeader>
                    <NLayoutContent position="absolute" style="top: 60px;">
                        <NLayout has-sider style="height: 100%;">
                            <NLayoutSider
                                class="layout-sider-child"
                                collapsed={this.isCollapsed}
                                collapse-mode="transform"
                                width={160}
                                collapsed-width={0}
                                bordered
                                native-scrollbar={this.nativeScrollbar}
                                trigger-style={this.showTrigger === "arrow-circle" ? arrowCircleTriggerStyle : ""}
                                show-trigger={this.showTrigger === "arrow-circle" ? (this.isCollapsed ? false : "arrow-circle") : false}
                                onUpdate:collapsed={this.onUpdateCollapsed}
                            >
                                <Menu collapsed={false} inverted={false} options={this.menuChildrensOptions} indent={15} />
                            </NLayoutSider>
                            <NLayout>
                                {this.tagsFixed ? TagsLayout : null}
                                <NLayoutContent
                                    class="layout-content"
                                    position="absolute"
                                    style={`top: ${this.contentTop}px; bottom: 0`}
                                    native-scrollbar={this.nativeScrollbar}
                                >
                                    {this.tagsFixed ? null : TagsLayout}
                                    {renderSlot(this.$slots, "default")}
                                </NLayoutContent>
                            </NLayout>
                        </NLayout>
                    </NLayoutContent>
                </NLayout>
            </NLayout>
        );
    },
});
