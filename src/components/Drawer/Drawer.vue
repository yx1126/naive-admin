<template>
    <div class="drawer-set" :class="`drawer-tans-${show ? 'enter' : 'leave'}`" @click="onUpdateShow(!show)" :style="drawerStyles">
        <Icon :size="show ? 34 : 26" color="#fff">
            <component :is="show ? CloseOutline : SettingOutlined" />
        </Icon>
    </div>
    <n-drawer class="drawer" placement="right" v-bind="attrs" :width="280" :show="show" @update:show="onUpdateShow">
        <slot />
    </n-drawer>
</template>

<script setup lang="ts">
import { useAttrs, computed } from "vue";
import { SettingOutlined } from "@vicons/antd";
import { CloseOutline } from "@vicons/ionicons5";
import useSetStore from "@/stores/setting";

defineOptions({
    name: "Drawer",
    inheritAttrs: false,
});

const attrs = useAttrs();
const set = useSetStore();

defineProps<{
    show?: boolean;
}>();

const emit = defineEmits<{
    (e: "update:show", value: boolean): void;
}>();

const drawerStyles = computed(() => {
    return {
        "--drawer-set-color": set.themeColor,
    };
});

function onUpdateShow(show: boolean) {
    emit("update:show", show);
}
</script>

<style lang="scss" scoped>
.drawer-set {
    width: 48px;
    height: 48px;
    background: var(--drawer-set-color);
    cursor: pointer;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    right: 1px;
    z-index: 2050;
    &.drawer-tans-enter {
        transform: translate(-280px, -50%);
        transition: transform 0.33s cubic-bezier(0, 0, 0.2, 1);
    }
    &.drawer-tans-leave {
        transform: translate(0, -50%);
        transition: transform 0.24s cubic-bezier(0.4, 0, 1, 1);
    }
}
</style>
