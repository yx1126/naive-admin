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
        };
    },
    render() {
        const {
            $slots,
            collapsed,
            menuOptions,
            inverted,
            headerFixed,
            tagsFixed,
            isShowTabs,
            defaultInverted,
            nativeScrollbar,
            showTrigger,
            contentTop,
            onUpdateCollapsed,
            onScroll,
        } = this;
        const HeaderLayout = (
            <NLayoutHeader class="layout-header" bordered inverted={inverted} position={headerFixed ? "absolute" : "static"}>
                <Header>{{
                    left: () => [
                        <Collapse collapsed={collapsed} width={LayoutConfig.headerHeight} collapsed-width={59} height={LayoutConfig.headerHeight} />,
                        <Breadcrumb />,
                    ],
                }}</Header>
            </NLayoutHeader>
        );
        const TagsLayout = (
            isShowTabs ? (
                <NLayoutHeader class="layout-tags" bordered position={tagsFixed ? "absolute" : "static"} style={`top: ${LayoutConfig.headerHeight}px`}>
                    <Tags />
                </NLayoutHeader>
            ) : null
        );
        return (
            <NLayout class="layout-wrapper" has-sider position="absolute">
                <NLayoutSider
                    collapsed={collapsed}
                    collapse-mode="width"
                    collapsed-width={64}
                    width={200}
                    inverted={defaultInverted}
                    bordered
                    native-scrollbar={nativeScrollbar}
                    show-trigger={showTrigger}
                    onUpdate:collapsed={onUpdateCollapsed}
                >
                    <Logo collapsed={collapsed} collapsed-width={64} width="auto" height={LayoutConfig.headerHeight} />
                    <Menu options={menuOptions} />
                </NLayoutSider>
                <NLayout class="n-layout-main">
                    {headerFixed ? HeaderLayout : null}
                    {tagsFixed ? TagsLayout : null}
                    <NLayoutContent
                        class="layout-content"
                        position="absolute"
                        style={`top: ${contentTop}px; bottom: 0`}
                        native-scrollbar={nativeScrollbar}
                        onScroll={onScroll}
                    >
                        {headerFixed ? null : HeaderLayout}
                        {tagsFixed ? null : TagsLayout}
                        {renderSlot($slots, "default")}
                    </NLayoutContent>
                </NLayout>
            </NLayout>
        );
    },
});
