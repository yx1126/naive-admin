<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore, useUserStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";

export default defineComponent({
    name: "AsideLayout",
    components: { Header, Tags, Menu, Logo },
    props: {
        nativeScrollbar: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const set = useSetStore();
        const user = useUserStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["aside"].includes(set.layoutMode));
        const defaultMenus = computed(() => user.menus);
        const defaultValue = computed({
            get: () => route?.meta?.activeMenu || route.path,
            set: value => router.push(value),
        });
        const collapsed = computed({
            get: () => set.collapsed,
            set: value => {
                set.setState("collapsed", value);
            },
        });
        const isKeepHeader = computed(() => set.isKeepHeader);
        const isKeepTags = computed(() => set.isKeepTags);
        const contentTop = computed(() => {
            return (isKeepHeader.value ? 60 : 0) + (isKeepTags.value ? 35 : 0);
        });
        const inverted = computed(() => (["light"].includes(set.navMode) ? false : set.inverted));

        return {
            defaultInverted,
            defaultMenus,
            defaultValue,
            collapsed,
            isKeepHeader,
            isKeepTags,
            contentTop,
            inverted,
        };
    },
    render() {
        const HeaderLayout = (
            <n-layout-header class="layout-header" bordered inverted={this.inverted} position={this.isKeepHeader ? "absolute" : "static"}>
                <Header>{{ left: () => <Collapse collapsed={this.collapsed} width={59} collapsed-width={59} height={59} /> }}</Header>
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.isKeepTags ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper" has-sider position="absolute">
                <n-layout-sider
                    v-model={[this.collapsed, "collapsed"]}
                    collapse-mode="width"
                    collapsed-width={64}
                    width={240}
                    inverted={this.defaultInverted}
                    bordered
                    show-trigger="bar"
                    native-scrollbar={false}
                >
                    <Logo collapsed={this.collapsed} collapsed-width={64} width={240} />
                    <Menu v-model={[this.defaultValue, "value"]} options={this.defaultMenus} />
                </n-layout-sider>
                <n-layout class="n-layout-main">
                    {this.isKeepHeader ? HeaderLayout : null}
                    {this.isKeepTags ? TagsLayout : null}
                    <n-layout-content
                        class="layout-content"
                        position="absolute"
                        style={`top: ${this.contentTop}px; bottom: 0`}
                        native-scrollbar={this.nativeScrollbar}
                    >
                        {this.isKeepHeader ? null : HeaderLayout}
                        {this.isKeepTags ? null : TagsLayout}
                        {renderSlot(this.$slots, "default")}
                    </n-layout-content>
                </n-layout>
            </n-layout>
        );
    },
});
</script>
