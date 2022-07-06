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
            :native-scrollbar="false"
        >
            <Logo :collapsed="set.collapsed" :collapsed-width="64" :width="240">
                <span>vue-admin</span>
            </Logo>
            <Menu v-model:value="defaultValue" :options="defaultMenus" />
        </n-layout-sider>
        <n-layout>
            <n-layout-content class="layout-content" :native-scrollbar="nativeScrollbar">
                <n-layout-header class="layout-header" bordered :class="{ 'layout-header-fixed': set.isKeepHeader }">
                    <Header />
                </n-layout-header>
                <n-layout-header class="layout-tabs" bordered :class="{ 'layout-tabs-fixed': set.isKeepTabs }">颐和园路</n-layout-header>
                <div class="layout-main">
                    <router-view />
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSetStore, useUserStore } from "@/stores";
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

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
const defaultValue = computed({
    get: () => route.path,
    set: value => router.push(value),
});
</script>
