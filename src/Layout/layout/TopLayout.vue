<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import type { PropType } from "vue";
import type { MenuOption } from "naive-ui";

export default defineComponent({
    name: "TopLayout",
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
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const set = useSetStore();

        const defaultInverted = computed(() => ["dark"].includes(set.navMode));
        const defaultValue = computed({
            get: () => route?.meta?.activeMenu || route.path,
            set: value => router.push(value),
        });
        const isKeepHeader = computed(() => set.isKeepHeader);
        const isKeepTags = computed(() => set.isKeepTags);
        const contentTop = computed(() => {
            return (isKeepHeader.value ? 60 : 0) + (isKeepTags.value ? 35 : 0);
        });

        return {
            defaultInverted,
            defaultValue,
            isKeepHeader,
            isKeepTags,
            contentTop,
        };
    },
    render() {
        const HeaderLayout = (
            <n-layout-header class="layout-header" inverted={this.defaultInverted} bordered position={this.isKeepHeader ? "absolute" : "static"}>
                <Header>
                    {{
                        logo: () => <Logo width={240} height={59} />,
                        left: () => <Menu v-model={[this.defaultValue, "value"]} mode="horizontal" options={this.menuOptions} />,
                    }}
                </Header>
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.isKeepTags ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper n-layout-main" position="absolute">
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
        );
    },
});
</script>
