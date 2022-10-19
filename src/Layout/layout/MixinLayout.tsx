import type { PropType } from "vue";
import  { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, type MenuOption } from "naive-ui";
import { LayoutConfig } from "@/config";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import Collapse from "../components/Collapse.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default defineComponent({
    name: "MixinLayout",
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
        showTrigger: {
            type: [Boolean, String] as PropType<"bar" | "arrow-circle" | boolean>,
            default: false,
        },
        onScroll: {
            type: Function as PropType<(e: Event) => void>,
            default: void 0,
        },
    },
    emits: ["update:collapsed"],
    setup(props, { emit }) {
        const route = useRoute();
        const set = useSetStore();

        const isShowSilder = ref(true);

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const isCutMenu = computed(() => set.isCutMenu);
        const defaultValue = computed(() => route.matched.filter(r => r.path)[0]?.path);
        const isShowTabs = computed(() => set.isShowTabs);
        const contentTop = computed(() => {
            return props.tagsFixed && isShowTabs.value ? LayoutConfig.tagsHeight : 0;
        });
        const menuChildrensOptions = computed(() => {
            const currentMenu = props.menuOptions.find(m => m.path === defaultValue.value);
            const cutMenuList = (currentMenu?.children || []).map(m => {
                return {
                    ...m,
                    icon: m.icon || currentMenu?.icon,
                };
            });
            return isCutMenu.value ? cutMenuList : props.menuOptions;
        });

        watch(
            () => route.fullPath,
            () => {
                if(route.fullPath.startsWith("/redirect")) return;
                isShowSilder.value = menuChildrensOptions.value.length > 0;
            },
            {
                immediate: true,
            },
        );

        const state = computed(() => {
            const hasChild = { collapsed: props.collapsed, width: 64 };
            const noChild = { collapsed: true, width: 0 };
            return isCutMenu.value ? (isShowSilder.value ? hasChild : noChild) : hasChild;
        });

        function onUpdateCollapsed(collapsed: boolean) {
            emit("update:collapsed", collapsed);
        }

        return {
            defaultInverted,
            isCutMenu,
            defaultValue,
            menuChildrensOptions,
            isShowSilder,
            state,
            onUpdateCollapsed,
            isShowTabs,
            contentTop,
        };
    },
    render() {
        const CutMenuNode = (
            <Menu
                mode="horizontal"
                value={this.defaultValue}
                collapsed={false}
                inverted={this.defaultInverted}
                options={this.menuOptions}
                children-field="noChild"
            />
        );
        const TagsLayout = this.isShowTabs ? <NLayoutHeader class="layout-tags" bordered><Tags /></NLayoutHeader> : null;
        return (
            <NLayout class="layout-wrapper layout-wrapper-mixin">
                <NLayoutHeader class="layout-header" inverted={this.defaultInverted} bordered>
                    <Logo width={200} height={LayoutConfig.headerHeight} />
                    <Header>{{ left: () => (this.isCutMenu ? CutMenuNode : <Breadcrumb />) }}</Header>
                </NLayoutHeader>
                <NLayout has-sider position="absolute" style={`top: ${LayoutConfig.headerHeight}px`}>
                    <div class="layout-sider-wrapper">
                        <NLayoutSider
                            class="layout-sider"
                            collapsed={this.state.collapsed}
                            collapse-mode="width"
                            collapsed-width={this.state.width}
                            width={200}
                            bordered
                            inverted={this.inverted}
                            content-style="height: 100%;"
                            native-scrollbar={this.nativeScrollbar}
                            show-trigger={this.isShowSilder ? this.showTrigger : false}
                            onUpdate:collapsed={this.onUpdateCollapsed}
                        >
                            <Menu inverted={this.inverted} options={this.menuChildrensOptions} />
                        </NLayoutSider>
                        <Collapse
                            class="mixin-collapse"
                            collapsed={this.state.collapsed}
                            size={this.state.collapsed ? 24 : 22}
                            width={200}
                            border={this.inverted ? "top" : "top,right"}
                            inverted={this.inverted}
                            collapsed-width={this.state.width}
                        />
                    </div>
                    <NLayout class="n-layout-main">
                        {this.tagsFixed ? TagsLayout : null}
                        <NLayoutContent
                            class="layout-content"
                            position="absolute"
                            style={`top: ${this.contentTop}px; bottom: 0`}
                            native-scrollbar={this.nativeScrollbar}
                            onScroll={this.onScroll}
                        >
                            {this.tagsFixed ? null : TagsLayout}
                            {renderSlot(this.$slots, "default")}
                        </NLayoutContent>
                    </NLayout>
                </NLayout>
            </NLayout>
        );
    },
});
