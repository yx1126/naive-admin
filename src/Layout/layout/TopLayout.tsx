import  { NLayout, NLayoutHeader, NLayoutContent, type MenuOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

export default defineComponent({
    name: "TopLayout",
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
        };
    },
    render() {
        const {
            $slots,
            defaultInverted,
            headerFixed,
            tagsFixed,
            menuOptions,
            isShowTabs,
            contentTop,
            nativeScrollbar,
            onScroll,
        } = this;
        const HeaderLayout = (
            <NLayoutHeader class="layout-header" inverted={defaultInverted} bordered position={headerFixed ? "absolute" : "static"}>
                <Header>
                    {{
                        logo: () => <Logo width={200} height={LayoutConfig.headerHeight} />,
                        left: () => <Menu mode="horizontal" options={menuOptions} />,
                    }}
                </Header>
            </NLayoutHeader>
        );
        const TagsLayout = isShowTabs ? (
            <NLayoutHeader class="layout-tags" bordered position={tagsFixed ? "absolute" : "static"} style={`top: ${LayoutConfig.headerHeight}px`}>
                <Tags />
            </NLayoutHeader>
        ) : null;
        return (
            <NLayout class="layout-wrapper n-layout-main" position="absolute">
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
        );
    },
});
