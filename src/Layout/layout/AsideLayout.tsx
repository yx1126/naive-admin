import type { PropType } from "vue";
import  { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, type MenuOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default defineComponent({
    name: "AsideLayout",
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
        };
    },
    render() {
        const headerLeft = [
            <Collapse collapsed={this.collapsed} width={LayoutConfig.headerHeight} collapsed-width={59} height={LayoutConfig.headerHeight} />,
            <Breadcrumb />,
        ];
        const HeaderLayout = (
            <NLayoutHeader class="layout-header" bordered inverted={this.inverted} position={this.headerFixed ? "absolute" : "static"}>
                <Header>{{ left: () => headerLeft }}</Header>
            </NLayoutHeader>
        );
        const TagsLayout = (
            this.isShowTabs ? (
                <NLayoutHeader class="layout-tags" bordered position={this.tagsFixed ? "absolute" : "static"} style={`top: ${LayoutConfig.headerHeight}px`}>
                    <Tags />
                </NLayoutHeader>
            ) : null
        );
        return (
            <NLayout class="layout-wrapper" has-sider position="absolute">
                <NLayoutSider
                    collapsed={this.collapsed}
                    collapse-mode="width"
                    collapsed-width={64}
                    width={200}
                    inverted={this.defaultInverted}
                    bordered
                    native-scrollbar={this.nativeScrollbar}
                    show-trigger={this.showTrigger}
                    onUpdate:collapsed={this.onUpdateCollapsed}
                >
                    <Logo collapsed={this.collapsed} collapsed-width={64} width="auto" height={LayoutConfig.headerHeight} />
                    <Menu options={this.menuOptions} />
                </NLayoutSider>
                <NLayout class="n-layout-main">
                    {this.headerFixed ? HeaderLayout : null}
                    {this.tagsFixed ? TagsLayout : null}
                    <NLayoutContent
                        class="layout-content"
                        position="absolute"
                        style={`top: ${this.contentTop}px; bottom: 0`}
                        native-scrollbar={this.nativeScrollbar}
                    >
                        {this.headerFixed ? null : HeaderLayout}
                        {this.tagsFixed ? null : TagsLayout}
                        {renderSlot(this.$slots, "default")}
                    </NLayoutContent>
                </NLayout>
            </NLayout>
        );
    },
});
