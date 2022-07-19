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
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["asideMixin"].includes(set.layoutMode));
        const contentTop = computed(() => {
            return props.tagsFixed ? 35 : 0;
        });
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const menuChildrensOptions = computed(() => {
            return props.menuOptions.find(m => m.path === defaultValue.value)?.children || [];
        });
        const defaultChildValue = computed({
            get: () => route?.meta?.activeMenu || route.path,
            set: value => router.push(value),
        });
        const layoutWrapperStyle = computed(() => {
            return {
                "--theme-color": set.themeColor,
            };
        });

        const isCollapsed = computed(() => {
            return menuChildrensOptions.value.length <= 0;
        });

        return {
            defaultInverted,
            defaultValue,
            contentTop,
            defaultChildValue,
            menuChildrensOptions,
            layoutWrapperStyle,
            isCollapsed,
        };
    },
    render() {
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.tagsFixed ? "absolute" : "static"}>
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper layout-wrapper-asidemixin" has-sider position="absolute" style={this.layoutWrapperStyle}>
                <div class="layout-sider-wrapper">
                    <n-layout-sider
                        class="layout-sider"
                        collapsed={this.collapsed}
                        collapse-mode="width"
                        width={140}
                        inverted={this.defaultInverted}
                        bordered
                        native-scrollbar={false}
                    >
                        <Logo collapsed={this.collapsed} width={140} indent={10} />
                        <Menu
                            options={this.menuOptions}
                            value={this.defaultValue}
                            root-indent={10}
                            collapsed-icon-size={20}
                            children-field="noChild"
                        />
                    </n-layout-sider>
                    <Collapse
                        class="mixin-collapse"
                        collapsed={this.collapsed}
                        size={this.collapsed ? 24 : 22}
                        width={140}
                        border={this.inverted ? "top" : "top"}
                        inverted={this.defaultInverted}
                        collapsed-width={48}
                    />
                </div>
                <n-layout class="n-layout-main">
                    <n-layout-header class="layout-header" bordered inverted={this.inverted} position="absolute">
                        <Header>{{ left: () => <div>123</div> }}</Header>
                    </n-layout-header>
                    <n-layout-content position="absolute" style="top: 60px;">
                        <n-layout has-sider style="height: 100%;">
                            <n-layout-sider
                                class="layout-sider-child"
                                collapsed={this.isCollapsed}
                                collapse-mode="transform"
                                width={160}
                                collapsed-width={0}
                                bordered
                                native-scrollbar={false}
                            >
                                <Menu
                                    v-model={[this.defaultChildValue, "value"]}
                                    collapsed={false}
                                    inverted={false}
                                    options={this.menuChildrensOptions}
                                    indent={15}
                                />
                            </n-layout-sider>
                            <n-layout>
                                {this.tagsFixed ? TagsLayout : null}
                                <n-layout-content
                                    class="layout-content"
                                    position="absolute"
                                    style={`top: ${this.contentTop}px; bottom: 0`}
                                    native-scrollbar={this.nativeScrollbar}
                                >
                                    {this.tagsFixed ? null : TagsLayout}
                                    {renderSlot(this.$slots, "default")}
                                </n-layout-content>
                            </n-layout>
                        </n-layout>
                    </n-layout-content>
                </n-layout>
            </n-layout>
        );
    },
});
</script>

<style lang="scss" scoped>
.layout-wrapper-asidemixin {
    :deep(.layout-sider) {
        .n-menu-item-content {
            &::before {
                left: 6px !important;
                right: 6px !important;
            }
        }
        .n-menu-item-content {
            padding-left: 14px !important;
            padding-right: 12px !important;
        }
    }
    :deep(.layout-sider-child) {
        .n-menu-item-content {
            &::before {
                left: 0px !important;
                right: 0px !important;
            }
            &.n-menu-item-content--selected::after {
                content: "";
                width: 3px;
                height: 100%;
                position: absolute;
                right: 2px;
                background-color: var(--theme-color);
            }
        }
    }
    .layout-sider {
        height: calc(100% - 42px);
    }
}
</style>
