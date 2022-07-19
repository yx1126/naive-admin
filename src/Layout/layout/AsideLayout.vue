<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useSetStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import type { PropType } from "vue";
import type { MenuOption } from "naive-ui";

export default defineComponent({
    name: "AsideLayout",
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
        collapsed: {
            type: Boolean,
            default: true,
        },
        inverted: {
            type: Boolean,
            default: true,
        },
    },
    emits: ["update:collapsed"],
    setup(props, { emit }) {
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["aside"].includes(set.layoutMode));
        const defaultCollapsed = computed({
            get: () => props.collapsed,
            set: value => emit("update:collapsed", value),
        });
        const contentTop = computed(() => {
            return (props.headerFixed ? 60 : 0) + (props.tagsFixed ? 35 : 0);
        });

        return {
            defaultInverted,
            defaultCollapsed,
            contentTop,
        };
    },
    render() {
        const HeaderLayout = (
            <n-layout-header class="layout-header" bordered inverted={this.inverted} position={this.headerFixed ? "absolute" : "static"}>
                <Header>{{ left: () => <Collapse collapsed={this.defaultCollapsed} width={59} collapsed-width={59} height={59} /> }}</Header>
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.tagsFixed ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper" has-sider position="absolute">
                <n-layout-sider
                    v-model={[this.defaultCollapsed, "collapsed"]}
                    collapse-mode="width"
                    collapsed-width={64}
                    width={240}
                    inverted={this.defaultInverted}
                    bordered
                    show-trigger="bar"
                    native-scrollbar={false}
                >
                    <Logo collapsed={this.defaultCollapsed} collapsed-width={64} width={240} />
                    <Menu options={this.menuOptions} />
                </n-layout-sider>
                <n-layout class="n-layout-main">
                    {this.headerFixed ? HeaderLayout : null}
                    {this.tagsFixed ? TagsLayout : null}
                    <n-layout-content
                        class="layout-content"
                        position="absolute"
                        style={`top: ${this.contentTop}px; bottom: 0`}
                        native-scrollbar={this.nativeScrollbar}
                    >
                        {this.headerFixed ? null : HeaderLayout}
                        {this.tagsFixed ? null : TagsLayout}
                        {renderSlot(this.$slots, "default")}
                    </n-layout-content>
                </n-layout>
            </n-layout>
        );
    },
});
</script>
