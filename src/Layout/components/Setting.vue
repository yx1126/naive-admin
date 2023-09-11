<template>
    <Drawer v-model:show="toggleDrawer" :mask-closable="true" :show-trigger="true">
        <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0 15px 15px 15px;">
            <template #header>{{ t("title") }}</template>
            <n-divider> {{ t("navTheme") }} </n-divider>
            <n-space justify="center">
                <template v-for="n in navTheme" :key="n">
                    <nav-mode :mode="n" :chose="set.navMode === n" :color="set.themeColor" @click="set.navMode = n" />
                </template>
            </n-space>
            <n-divider> {{ t("layoutMode") }} </n-divider>
            <n-space justify="center">
                <template v-for="n in layoutMode" :key="n">
                    <nav-mode :mode="n" :chose="set.layoutMode === n" :color="set.themeColor" @click="set.layoutMode = n" />
                </template>
            </n-space>
            <n-divider> {{ t("pageDisplay") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isShowLogo") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowLogo" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isShowBreadcrumb") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowBreadcrumb" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isShowTabs") }}</n-ellipsis>
                    <n-switch v-model:value="set.isShowTabs" size="medium" />
                </div>
            </div>
            <n-divider> {{ t("pageFunction") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isKeepHeader") }}</n-ellipsis>
                    <n-switch v-model:value="set.isKeepHeader" :disabled="['mixin', 'asideMixin'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isKeepTags") }}</n-ellipsis>
                    <n-switch v-model:value="set.isKeepTags" :disabled="!set.isShowTabs" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("isCutMenu") }}</n-ellipsis>
                    <n-switch v-model:value="set.isCutMenu" :disabled="!['mixin'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("uniqueMenuOpened") }}</n-ellipsis>
                    <n-switch v-model:value="set.uniqueMenuOpened" :disabled="['top'].includes(set.layoutMode)" size="medium" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("inverted") }}</n-ellipsis>
                    <n-switch v-model:value="set.inverted" :disabled="['top'].includes(set.layoutMode)" size="medium" />
                </div>
            </div>
            <n-divider> {{ t("otherSet") }} </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("routerTrans") }}</n-ellipsis>
                    <n-select v-model:value="set.routerTrans" class="divider-content-item__input" :options="routerTransOptions" size="small" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("themeColor") }}</n-ellipsis>
                    <n-color-picker
                        v-model:value="set.themeColor"
                        class="divider-content-item__input custom-picker-set"
                        :swatches="LayoutConfig.theme"
                        :actions="['confirm']"
                        :to="false"
                        show-preview
                    />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("lang") }}</n-ellipsis>
                    <n-select v-model:value="set.lang" class="divider-content-item__input" :options="lang" size="small" />
                </div>
                <div class="divider-content-item">
                    <n-ellipsis>{{ t("menuTrigger") }}</n-ellipsis>
                    <n-select v-model:value="set.menuTrigger" class="divider-content-item__input" :options="menuTriggerOptions" size="small" />
                </div>
            </div>
            <template #footer>
                <n-popconfirm @positive-click="set.reset">
                    <template #trigger><n-button>{{ t("reset") }}</n-button></template>
                    <span>{{ t("confirmSet") }}</span>
                </n-popconfirm>
            </template>
        </n-drawer-content>
    </Drawer>
</template>

<script setup lang="ts">
import useSetStore, { navTheme, layoutMode, routerTransOptions, menuTriggerOptions } from "@/stores/setting";
import Drawer from "@/components/Drawer";
import { lang } from "@/locales";
import NavMode from "./NavMode.vue";
import { LayoutConfig } from "@/config";

const { locale, t } = useI18n({
    inheritLocale: true,
});

const set = useSetStore();

const toggleDrawer = computed({
    get: () => set.drawerStatus,
    set: set.toggleDrawer,
});

watch(() => set.lang, (value) => {
    locale.value = value;
});
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

<i18n lang="yaml">
zh-CN:
  title: 项目配置
  navTheme: 系统主题
  layoutMode: 导航模式
  pageDisplay: 界面显示
  isShowLogo: 显示 Logo
  isShowBreadcrumb: 显示 面包屑
  isShowTabs: 显示 标签页
  pageFunction: 界面功能
  isKeepHeader: 固定顶栏
  isKeepTags: 固定标签页
  isCutMenu: 分割菜单
  uniqueMenuOpened: 保持一个子菜单的展开
  otherSet: 其他设置
  routerTrans: 路由动画
  themeColor: 组件主题
  reset: 还原设置
  lang: 语言切换
  confirmSet: 确认还原为默认设置吗？
  inverted: 反转背景色
  menuTrigger: 菜单 trigger
enUS:
  isCutMenu: Split the menu
  isKeepHeader: Fixed the top bar
  isKeepTags: Fixed Tabs
  isShowBreadcrumb: Show Breadcrumb
  isShowLogo: Show Logo
  isShowTabs: Show Tabs
  layoutMode: Navigation mode
  navTheme: System theme
  otherSet: Other Settings
  pageDisplay: Page Display
  pageFunction: Page Function
  reset: reset
  routerTrans: Routing animation
  themeColor: Component theme
  title: Project configuration
  uniqueMenuOpened: Keep a submenu open
  lang: Change language
  confirmSet: Are you sure to restore the default Settings?
  inverted: Reverse background color
  menuTrigger: menu trigger
</i18n>
