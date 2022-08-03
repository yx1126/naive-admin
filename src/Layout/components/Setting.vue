<template>
    <Drawer v-model:show="toggleDrawer" :mask-closable="true">
        <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0 15px 15px 15px;">
            <template #header>
                {{ $t("set.title") }}
            </template>
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
                    <n-ellipsis class="">
                        {{ $t("set.isShowLogo") }}
                    </n-ellipsis>
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
                    <n-switch v-model:value="set.isKeepHeader" :disabled="['mixin', 'asideMixin'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isKeepTags") }}</n-ellipsis>
                    <n-switch v-model:value="set.isKeepTags" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.isCutMenu") }}</n-ellipsis>
                    <n-switch v-model:value="set.isCutMenu" :disabled="!['mixin'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.uniqueMenuOpened") }}</n-ellipsis>
                    <n-switch v-model:value="set.uniqueMenuOpened" :disabled="['top'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.inverted") }}</n-ellipsis>
                    <n-switch v-model:value="set.inverted" :disabled="['top'].includes(set.layoutMode)" size="medium" />
                </div>
            </div>
            <n-divider> {{ $t("set.otherSet") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.routerTrans") }}</n-ellipsis>
                    <n-select v-model:value="set.routerTrans" class="divider-content-item__input" :options="routerTransOptions" size="small" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.themeColor") }}</n-ellipsis>
                    <n-color-picker
                        v-model:value="set.themeColor"
                        class="divider-content-item__input custom-picker-set"
                        :swatches="defaultThemeList"
                        :actions="['confirm']"
                        :to="false"
                        show-preview
                    />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.lang") }}</n-ellipsis>
                    <n-select v-model:value="set.lang" class="divider-content-item__input" :options="lang" size="small" @update:value="changeLang" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ $t("set.menuTrigger") }}</n-ellipsis>
                    <n-select v-model:value="set.menuTrigger" class="divider-content-item__input" :options="menuTriggerOptions" size="small" />
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
import { computed } from "vue";
import useSetStore, { navTheme, layoutMode, routerTransOptions, menuTriggerOptions } from "@/stores/setting";
import Drawer from "@/components/Drawer";
import { useI18n, lang } from "@/locales";
import NavMode from "./NavMode.vue";
import type { Lang } from "@/locales";

const { locale } = useI18n();

const set = useSetStore();

const defaultThemeList = ["#409EFF", "#18a058", "#67C23A", "#E6A23C", "#F56C6C", "#909399"];

const toggleDrawer = computed({
    get: () => set.drawerStatus,
    set: set.toggleDrawer,
});

function changeLang(e: Lang) {
    locale.value = e;
}
</script>

<style lang="scss" scoped>
.divider-content {
    &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
        &__input {
            width: 120px;
        }
    }
}
</style>
