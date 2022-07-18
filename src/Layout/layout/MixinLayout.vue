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
    name: "MixinLayout",
    components: { Header, Tags, Menu, Logo, Collapse },
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
            return isKeepTags.value ? 35 : 0;
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
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered>
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper">
                <n-layout-header class="layout-header layout-header-mixin" inverted={this.defaultInverted} bordered>
                    <Logo height={60} width={240}>
                        <span>VueAdmin</span>
                    </Logo>
                    <Header />
                </n-layout-header>
                <n-layout has-sider position="absolute" style="top: 60px">
                    <div class="layout-sider-wrapper">
                        <n-layout-sider
                            class="layout-sider"
                            v-model={[this.collapsed, "collapsed"]}
                            collapse-mode="width"
                            collapsed-width={64}
                            width={240}
                            bordered
                            inverted={this.inverted}
                            show-trigger="bar"
                            content-style="height: 100%;"
                            native-scrollbar={false}
                        >
                            <Menu v-model={[this.defaultValue, "value"]} inverted={this.inverted} options={this.defaultMenus} />
                        </n-layout-sider>
                        <Collapse
                            class="mixin-collapse"
                            collapsed={this.collapsed}
                            size={this.collapsed ? 24 : 22}
                            width={240}
                            border={this.inverted ? "top" : "top,right"}
                            inverted={this.inverted}
                            collapsed-width={64}
                        />
                    </div>
                    <n-layout class="n-layout-main">
                        {this.isKeepTags ? TagsLayout : null}
                        <n-layout-content
                            class="layout-content"
                            position="absolute"
                            style={`top: ${this.contentTop}px; bottom: 0`}
                            native-scrollbar={this.nativeScrollbar}
                        >
                            {this.isKeepTags ? null : TagsLayout}
                            {renderSlot(this.$slots, "default")}
                        </n-layout-content>
                    </n-layout>
                </n-layout>
            </n-layout>
        );
    },
});
</script>

<style lang="scss">
.layout-wrapper {
    .layout-header-mixin {
        display: flex;
        .logo {
            flex: 0 0 auto;
        }
    }
    .layout-sider {
        height: calc(100% - 42px);
    }
}
</style>
