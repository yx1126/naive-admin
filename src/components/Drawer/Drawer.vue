<template>
    <div
        v-if="showTrigger"
        class="drawer-set"
        :class="`drawer-tans-${show ? 'enter' : 'leave'}`"
        :style="drawerStyles"
        @click="onUpdateShow(!show)"
    >
        <Icon :size="26" color="#fff">
            <CloseOutlined v-if="show" />
            <SettingOutlined v-else />
        </Icon>
    </div>
    <n-drawer class="drawer" placement="right" v-bind="$attrs" :width="280" :z-index="2000" :show="show" @update:show="onUpdateShow">
        <slot />
    </n-drawer>
</template>

<script lang="ts">
import { $select } from "@/util/dom";
import setDrag from "@/util/drag";
import { SettingOutlined, CloseOutlined } from "@vicons/antd";
import { useThemeVars } from "naive-ui";

export default defineComponent({
    name: "Drawer",
    components: { SettingOutlined, CloseOutlined },
    inheritAttrs: false,
    props: {
        show: { type: Boolean, default: void 0 },
        showTrigger: { type: Boolean, default: true },
    },
    emits: ["update:show"],
    setup(props, { emit }) {
        const set = useSetStore();
        const themeVars = useThemeVars();
        let stop: (() => void) | null =  null;

        const drawerStyles = computed(() => {
            return {
                "--drawer-set-color": set.themeColor,
                "--drawer-tans-leave": themeVars.value.cubicBezierEaseIn,
                "--drawer-tans-enter": themeVars.value.cubicBezierEaseOut,
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
        return {
            drawerStyles,
            onUpdateShow,
        };
    },
});
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
