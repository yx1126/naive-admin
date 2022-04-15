<template>
    <Drawer v-model:show="isShowDrawer" :mask-closable="true">
        <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0 15px 15px 15px;">
            <template #header>项目配置</template>
            <n-divider> 系统主题 </n-divider>
            <n-space justify="center">
                <template v-for="n in navTheme" :key="n">
                    <nav-mode :mode="n" :chose="set.navMode === n" @click="set.navMode = n" />
                </template>
            </n-space>
            <n-divider> 导航模式 </n-divider>
            <n-space justify="center">
                <template v-for="n in layoutMode" :key="n">
                    <nav-mode :mode="n" :chose="set.layoutMode === n" @click="set.layoutMode = n" />
                </template>
            </n-space>
            <n-divider> 界面显示 </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <div>显示 Logo</div>
                    <n-switch v-model:value="set.isShowLogo" size="medium" />
                </div>
                <div class="divider-content-item">
                    <div>显示 面包屑</div>
                    <n-switch v-model:value="set.isShowBreadcrumb" size="medium" />
                </div>
                <div class="divider-content-item">
                    <div>显示 标签页</div>
                    <n-switch v-model:value="set.isShowTabs" size="medium" />
                </div>
            </div>
            <n-divider> 界面功能 </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <div>固定顶栏</div>
                    <n-switch v-model:value="set.isKeepHeader" size="medium" />
                </div>
                <div class="divider-content-item">
                    <div>固定标签页</div>
                    <n-switch v-model:value="set.isKeepTabs" size="medium" />
                </div>
                <div class="divider-content-item">
                    <div>分割菜单</div>
                    <n-switch v-model:value="set.isCutMenu" size="medium" />
                </div>
                <div class="divider-content-item">
                    <div>保持一个子菜单的展开</div>
                    <n-switch v-model:value="set.uniqueMenuOpened" size="medium" />
                </div>
            </div>
            <n-divider> 其他设置 </n-divider>
            <div class="divider-content">
                <div class="divider-content-item">
                    <div>路由动画</div>
                    <n-select v-model:value="set.routerTrans" style="width: 120px" :options="routerTransOptions" size="small" />
                </div>
            </div>
            <template #footer>
                <n-button @click="set.reset">还原设置</n-button>
            </template>
        </n-drawer-content>
    </Drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useSetStore, { navTheme, layoutMode, routerTransOptions } from "@/stores/setting";
import Drawer from "@comps/Drawer";
import NavMode from "./NavMode.vue";

const set = useSetStore();

const isShowDrawer = computed({
    get: () => set.drawerStatus,
    set: set.toggleDrawer,
});

// const
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
    }
}
</style>
