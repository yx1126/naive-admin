<template>
    <div
        v-if="showTrigger"
        class="drawer-set"
        :class="`drawer-tans-${show ? 'enter' : 'leave'}`"
        :style="drawerStyles"
        @click="onUpdateShow(!show)"
        @click.right.prevent
    >
        <Icon :size="26" color="#fff">
            <component :is="show ? CloseOutlined : SettingOutlined" />
        </Icon>
    </div>
    <n-drawer class="drawer" placement="right" v-bind="attrs" :width="280" :z-index="2000" :show="show" @update:show="onUpdateShow">
        <slot />
    </n-drawer>
</template>

<script setup lang="ts">
import { $select } from "@/util/dom";
import setDrag from "@/util/drag";
import { SettingOutlined, CloseOutlined } from "@vicons/antd";
import { useThemeVars } from "naive-ui";

defineOptions({
    name: "Drawer",
    inheritAttrs: false,
});

const attrs = useAttrs();
const set = useSetStore();
const themeVars = $(useThemeVars());

const props = withDefaults(
    defineProps<{
        show?: boolean;
        showTrigger?: boolean;
    }>(),
    {
        showTrigger: true,
    },
);

const emit = defineEmits<{
    (e: "update:show", value: boolean): void;
}>();

let stop: (() => void) | null =  null;

const drawerStyles = computed(() => {
    return {
        "--drawer-set-color": set.themeColor,
        "--drawer-tans-leave": themeVars.cubicBezierEaseIn,
        "--drawer-tans-enter": themeVars.cubicBezierEaseOut,
    };
});
watch(() => props.showTrigger, async (value) => {
    await nextTick();
    const set = $select<HTMLElement>(".drawer-set");
    if(value && set) {
        stop = setDrag(set, {
            type: "y",
            eventType: "right",
            cursor: "pointer",
        });
        return;
    }
    if(stop) stop();
}, { immediate: true });

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
    z-index: 2001;
    &.drawer-tans-enter {
        transform: translate(-279px, -50%);
        transition: transform 0.3s var(--drawer-tans-enter);
    }
    &.drawer-tans-leave {
        transform: translate(0, -50%);
        transition: transform 0.2s var(--drawer-tans-leave);
    }
}
</style>
