<template>
    <Drawer v-model:show="isShowDrawer">
        <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0 15px;">
            <template #header>项目配置</template>
            <template #footer>项目配置</template>
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
            <n-divider> 界面功能 </n-divider>
            <n-divider> 界面显示 </n-divider>
        </n-drawer-content>
    </Drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useSetStore from "@/stores/setting";
import Drawer from "@comps/Drawer";
import NavMode from "./NavMode.vue";
import type { NavTheme, LayoutMode } from "@/stores/setting";

const set = useSetStore();

const navTheme: NavTheme[] = ["light", "dark", "diablo"];
const layoutMode: LayoutMode[] = ["aside", "top", "mixin", "asideMixin"];

const isShowDrawer = computed({
    get: () => set.drawerStatus,
    set: set.toggleDrawer,
});
</script>

<style lang="scss" scoped>
.setting {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .title {
        line-height: 30px;
        padding: 10px;
    }
    .scroll {
        height: calc(100% - 50px);
    }
}
</style>
