import { defineComponent, computed, renderSlot, type PropType } from "vue";
import  { NLayout, NLayoutHeader, NLayoutContent, type MenuOption } from "naive-ui";
import { useSetStore } from "@/stores";
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
    },
    setup(props) {
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const contentTop = computed(() => {
            return (props.headerFixed ? 60 : 0) + (props.tagsFixed ? 35 : 0);
        });

        return {
            defaultInverted,
            contentTop,
        };
    },
    render() {
        const HeaderLayout = (
            <NLayoutHeader class="layout-header" inverted={this.defaultInverted} bordered position={this.headerFixed ? "absolute" : "static"}>
                <Header>
                    {{
                        logo: () => <Logo width={200} height={59} />,
                        left: () => <Menu mode="horizontal" options={this.menuOptions} />,
                    }}
                </Header>
            </NLayoutHeader>
        );
        const TagsLayout = (
            <NLayoutHeader class="layout-tags" bordered position={this.tagsFixed ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </NLayoutHeader>
        );
        return (
            <NLayout class="layout-wrapper n-layout-main" position="absolute">
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
        );
    },
});