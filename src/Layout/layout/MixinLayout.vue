<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useSetStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import { useRoute } from "vue-router";
import type { PropType } from "vue";
import type { MenuOption } from "naive-ui";

export default defineComponent({
    name: "MixinLayout",
    components: { Header, Tags, Menu, Logo, Collapse },
    props: {
        nativeScrollbar: {
            type: Boolean,
            default: true,
        },
        menuOptions: {
            type: Array as PropType<MenuOption[]>,
            default: () => [],
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
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isCutMenu = computed(() => set.isCutMenu);
        const defaultCollapsed = computed({
            get: () => props.collapsed,
            set: value => emit("update:collapsed", value),
        });
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const menuChildrensOptions = computed(() => {
            const currentMenuChild = props.menuOptions.find(m => m.path === defaultValue.value);
            const cutMenuList = (currentMenuChild?.children || []).map(m => {
                return {
                    ...m,
                    icon: m.icon || currentMenuChild?.icon,
                };
            });
            return isCutMenu.value ? cutMenuList : props.menuOptions;
        });

        return {
            defaultInverted,
            defaultCollapsed,
            isCutMenu,
            defaultValue,
            menuChildrensOptions,
        };
    },
    render() {
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered>
                <Tags />
            </n-layout-header>
        );
        const CutMenuNode = (
            <Menu mode="horizontal" value={this.defaultValue} inverted={this.defaultInverted} options={this.menuOptions} children-field="noChild" />
        );
        return (
            <n-layout class="layout-wrapper">
                <n-layout-header class="layout-header layout-header-mixin" inverted={this.defaultInverted} bordered>
                    <Logo height={60} width={240} />
                    <Header>{{ left: () => (this.isCutMenu ? CutMenuNode : null) }}</Header>
                </n-layout-header>
                <n-layout has-sider position="absolute" style="top: 60px">
                    <div class="layout-sider-wrapper" v-show={this.menuChildrensOptions.length > 0}>
                        <n-layout-sider
                            class="layout-sider"
                            v-model={[this.defaultCollapsed, "collapsed"]}
                            collapse-mode="width"
                            collapsed-width={64}
                            width={240}
                            bordered
                            inverted={this.inverted}
                            show-trigger="bar"
                            content-style="height: 100%;"
                            native-scrollbar={false}
                        >
                            <Menu inverted={this.inverted} options={this.menuChildrensOptions} />
                        </n-layout-sider>
                        <Collapse
                            class="mixin-collapse"
                            collapsed={this.defaultCollapsed}
                            size={this.defaultCollapsed ? 24 : 22}
                            width={240}
                            border={this.inverted ? "top" : "top,right"}
                            inverted={this.inverted}
                            collapsed-width={64}
                        />
                    </div>
                    <n-layout class="n-layout-main">
                        {this.tagsFixed ? TagsLayout : null}
                        <n-layout-content
                            class="layout-content"
                            position="absolute"
                            style={`top: ${this.tagsFixed ? 35 : 0}px; bottom: 0`}
                            native-scrollbar={this.nativeScrollbar}
                        >
                            {this.tagsFixed ? null : TagsLayout}
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
