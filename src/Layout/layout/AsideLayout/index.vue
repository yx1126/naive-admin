<script lang="tsx">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore, useUserStore } from "@/stores";
import Header from "../../components/Header.vue";
import Tags from "../../components/Tags.vue";
import Menu from "../../components/Menu.vue";
import Logo from "../../components/Logo.vue";

export default defineComponent({
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
            get: () => route.path,
            set: value => router.push(value),
        });
        const collapsed = computed({
            get: () => set.collapsed,
            set: value => {
                set.setState("collapsed", value);
            },
        });
        return {
            defaultInverted,
            defaultMenus,
            defaultValue,
            collapsed,
        };
    },
    render() {
        const SiderLayout = (
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
                <Logo collapsed={this.collapsed} collapsed-width={64} width={240}>
                    <span>vue-admin</span>
                </Logo>
                <Menu v-model={[this.defaultValue, "value"]} options={this.defaultMenus} />
            </n-layout-sider>
        );
        const HeaderLayout = (
            <n-layout-header class="layout-header" position="absolute" bordered>
                <Header />
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" position="absolute" style="top: 60px" bordered>
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper" has-sider position="absolute">
                {SiderLayout}
                <n-layout>
                    {HeaderLayout}
                    {TagsLayout}
                    <n-layout-content
                        class="layout-content"
                        position="absolute"
                        style="top: 100px; bottom: 0"
                        native-scrollbar={this.nativeScrollbar}
                    >
                        <router-view />
                    </n-layout-content>
                </n-layout>
            </n-layout>
        );
    },
});
</script>
