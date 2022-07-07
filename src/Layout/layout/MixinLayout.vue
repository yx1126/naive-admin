<script lang="tsx">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore, useUserStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

export default defineComponent({
    name: "MixinLayout",
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

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const defaultMenus = computed(() => user.menus);
        const defaultValue = computed({
            get: () => route.path,
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
            return isKeepTags.value ? 35 : 0;
        });
        const inverted = computed(() => set.inverted);

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
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered>
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper">
                <n-layout-header class="layout-header layout-header-mixin" inverted={this.defaultInverted} bordered>
                    <Logo collapsed={this.collapsed} height={60} collapsed-width={64} width={240}>
                        <span>vue-admin</span>
                    </Logo>
                    <Header />
                </n-layout-header>
                <n-layout has-sider position="absolute" style="top: 60px">
                    <n-layout-sider
                        v-model={[this.collapsed, "collapsed"]}
                        collapse-mode="width"
                        collapsed-width={64}
                        width={240}
                        bordered
                        inverted={this.inverted}
                        show-trigger="bar"
                        native-scrollbar={false}
                    >
                        <Menu v-model={[this.defaultValue, "value"]} inverted={this.inverted} options={this.defaultMenus} />
                    </n-layout-sider>
                    <n-layout>
                        {this.isKeepTags ? TagsLayout : null}
                        <n-layout-content
                            class="layout-content"
                            position="absolute"
                            style={`top: ${this.contentTop}px; bottom: 0`}
                            native-scrollbar={this.nativeScrollbar}
                        >
                            {this.isKeepTags ? null : TagsLayout}
                            <router-view />
                        </n-layout-content>
                    </n-layout>
                </n-layout>
            </n-layout>
        );
    },
});
</script>
