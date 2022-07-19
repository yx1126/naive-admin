<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import type { PropType } from "vue";
import type { MenuOption } from "naive-ui";

export default defineComponent({
    name: "AsideMixinLayout",
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
        const route = useRoute();
        const router = useRouter();
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["asideMixin"].includes(set.layoutMode));
        const defaultValue = computed({
            get: () => route?.meta?.activeMenu || route.path,
            set: value => router.push(value),
        });
        const defaultCollapsed = computed({
            get: () => props.collapsed,
            set: value => emit("update:collapsed", value),
        });
        const isKeepHeader = computed(() => set.isKeepHeader);
        const isKeepTags = computed(() => set.isKeepTags);
        const contentTop = computed(() => {
            return (isKeepHeader.value ? 60 : 0) + (isKeepTags.value ? 35 : 0);
        });

        return {
            defaultInverted,
            defaultValue,
            defaultCollapsed,
            isKeepHeader,
            isKeepTags,
            contentTop,
        };
    },
    render() {
        const HeaderLayout = (
            <n-layout-header class="layout-header" bordered inverted={this.inverted} position={this.isKeepHeader ? "absolute" : "static"}>
                <Header>{{ left: () => <Collapse collapsed={this.defaultCollapsed} width={59} collapsed-width={59} height={59} /> }}</Header>
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.isKeepTags ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper" has-sider position="a  bsolute">
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
