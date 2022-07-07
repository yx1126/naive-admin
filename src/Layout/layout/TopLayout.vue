<script lang="tsx">
import { defineComponent, computed, renderSlot } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore, useUserStore } from "@/stores";
import Header from "../components/Header.vue";
import Tags from "../components/Tags.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

export default defineComponent({
    name: "TopLayout",
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
            return (isKeepHeader.value ? 60 : 0) + (isKeepTags.value ? 35 : 0);
        });

        return {
            defaultInverted,
            defaultMenus,
            defaultValue,
            collapsed,
            isKeepHeader,
            isKeepTags,
            contentTop,
        };
    },
    render() {
        const HeaderLayout = (
            <n-layout-header class="layout-header" inverted={this.defaultInverted} bordered position={this.isKeepHeader ? "absolute" : "static"}>
                <Header />
            </n-layout-header>
        );
        const TagsLayout = (
            <n-layout-header class="layout-tags" bordered position={this.isKeepTags ? "absolute" : "static"} style="top: 60px">
                <Tags />
            </n-layout-header>
        );
        return (
            <n-layout class="layout-wrapper" position="absolute">
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
