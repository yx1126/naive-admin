<template>
    <transition name="ndraw-fade">
        <div class="drawer-set" v-bind="attrs" :class="`tans-${isShowDrawer ? 'enter' : 'leave'}`" @click="isShowDrawer = false">
            <n-icon :size="isShowDrawer ? 34 : 26" color="#fff">
                <component :is="isShowDrawer ? CloseOutline : SettingOutlined" />
            </n-icon>
        </div>
    </transition>

    <n-drawer class="drawer" placement="right" v-bind="attrs" :width="260" v-model:show="isShowDrawer">
        <span>12</span>
    </n-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Drawer",
    inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { useAttrs, computed } from "vue";
import SettingOutlined from "@vicons/antd/SettingOutlined";
import CloseOutline from "@vicons/ionicons5/CloseOutline";
import useSetStore from "@/stores/setting";

const attrs = useAttrs();
const set = useSetStore();

const isShowDrawer = computed({
    get: () => set.drawerStatus,
    set: (value: boolean) => {
        set.toggleDrawer(value);
    },
});
</script>

<style lang="scss" scoped>
.drawer-set {
    width: 48px;
    height: 48px;
    background: #1890ff;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    right: 1px;
    z-index: 2001;
    &.tans-enter {
        transform: translate(-260px, -50%);
        transition: transform 0.33s cubic-bezier(0, 0, 0.2, 1);
    }
    &.tans-leave {
        transform: translate(0, -50%);
        transition: transform 0.24s cubic-bezier(0.4, 0, 1, 1);
    }
}
</style>
