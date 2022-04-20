<template>
    <n-layout class="layout-wrapper" has-sider>
        <n-layout-sider
            v-model:collapsed="set.collapsed"
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :inverted="defaultInverted"
            bordered
            show-trigger="bar"
        >
            <Menu class="test" :default-value="defaultValue" :options="defaultMenus" @update:value="handleMenuChange" />
        </n-layout-sider>
        <n-layout>
            <n-layout-content class="layout-content" :native-scrollbar="nativeScrollbar">
                <n-layout-header class="layout-header" :class="{ 'layout-header-fixed': set.isKeepHeader }">
                    <Header />
                </n-layout-header>
                <n-layout-header class="layout-tabs" :class="{ 'layout-tabs-fixed': set.isKeepTabs }">颐和园路</n-layout-header>
                <div class="layout-main">
                    <router-view />
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import useSetStore from "@/stores/setting";
import useUserStore from "@/stores/user";
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";

withDefaults(
    defineProps<{
        nativeScrollbar?: boolean;
    }>(),
    {
        nativeScrollbar: true,
    },
);

const route = useRoute();
const router = useRouter();
const set = useSetStore();
const user = useUserStore();

const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["aside"].includes(set.layoutMode));
const defaultMenus = computed(() => user.menus);

const defaultValue = computed(() => route.path);

const handleMenuChange = (key: string) => {
    router.push(key);
};
</script>
