<template>
    <Drawer v-model:show="toggleDrawer" :mask-closable="true">
        <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0 15px 15px 15px;">
            <template #header>{{ $t("set.title") }}</template>
            <n-divider> {{ $t("set.navTheme") }} </n-divider>
            <n-space justify="center">
                <template v-for="n in navTheme" :key="n">
                    <nav-mode :mode="n" :chose="set.navMode === n" :color="set.themeColor" @click="set.navMode = n" />
                </template>
            </n-space>
            <n-divider> {{ $t("set.layoutMode") }} </n-divider>
            <n-space justify="center">
                <template v-for="n in layoutMode" :key="n">
                    <nav-mode :mode="n" :chose="set.layoutMode === n" :color="set.themeColor" @click="set.layoutMode = n" />
                </template>
            </n-space>
            <n-divider> {{ $t("set.pageDisplay") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis class="">{{ $t("set.isShowLogo") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowLogo" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isShowBreadcrumb") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowBreadcrumb" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isShowTabs") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowTabs" size="medium" />
                </div>
            </div>
            <n-divider> {{ $t("set.pageFunction") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isKeepHeader") }}</n-ellipsis>
                    <n-switch v-model:value="set.isKeepHeader" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isKeepTags") }}</n-ellipsis>
                    <n-switch v-model:value="set.isKeepTags" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isCutMenu") }}</n-ellipsis>
                    <n-switch v-model:value="set.isCutMenu" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.uniqueMenuOpened") }}</n-ellipsis>
                    <n-switch v-model:value="set.uniqueMenuOpened" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.inverted") }}</n-ellipsis>
                    <n-switch v-model:value="set.inverted" size="medium" />
                </div>
            </div>
            <n-divider> {{ $t("set.otherSet") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.routerTrans") }}</n-ellipsis>
                    <n-select class="divider-content-item__input" v-model:value="set.routerTrans" :options="routerTransOptions" size="small" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.themeColor") }}</n-ellipsis>
                    <n-color-picker
                        class="divider-content-item__input custom-picker-set"
                        v-model:value="set.themeColor"
                        :swatches="defaultThemeList"
                        :actions="['confirm']"
                        :to="false"
                        show-preview
                    />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.lang") }}</n-ellipsis>
                    <n-select class="divider-content-item__input" v-model:value="set.lang" @update:value="changeLang" :options="lang" size="small" />
                </div>
            </div>
            <template #footer>
                <n-popconfirm @positive-click="set.reset">
                    <template #trigger>
                        <n-button>{{ $t("set.reset") }}</n-button>
                    </template>
                    <span>{{ $t("set.confirmSet") }}</span>
                </n-popconfirm>
            </template>
        </n-drawer-content>
    </Drawer>
</template>

<script setup lang="ts">
import { watch, computed } from "vue";
import useSetStore, { navTheme, layoutMode, routerTransOptions } from "@/stores/setting";
import Drawer from "@/components/Drawer";
import { useI18n, lang } from "@/locales";
import type { Lang } from "@/locales";
import NavMode from "./NavMode.vue";

const { locale } = useI18n();

const set = useSetStore();

watch(
    () => set.isKeepTags,
    value => {
        if (value) set.setState("isKeepHeader", value);
    },
);

watch(
    () => set.isKeepHeader,
    value => {
        if (!value) set.setState("isKeepTags", value);
    },
);

const defaultThemeList = ["#409EFF", "#18a058", "#67C23A", "#E6A23C", "#F56C6C", "#909399"];

const toggleDrawer = computed({
    get: () => set.drawerStatus,
    set: set.toggleDrawer,
});

const changeLang = (e: Lang) => {
    locale.value = e;
};
</script>

<style lang="scss" scoped>
.divider-content {
    .divider-content-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
        .divider-content-item__input {
            width: 100px;
        }
    }
}
</style>
