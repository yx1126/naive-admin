<template>
    <div class="drawer-set" @click="handleSetClick">
        <slot v-if="defaultShow" name="open">
            <n-icon size="34" color="#fff">
                <CloseOutline />
            </n-icon>
        </slot>
        <slot v-else name="close">
            <n-icon size="26" color="#fff">
                <SettingOutlined />
            </n-icon>
        </slot>
    </div>
    <n-drawer class="drawer" placement="right" v-bind="attrs" :width="width" :height="height" v-model:show="defaultShow">
        <slot />
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
import { useAttrs, computed, ref } from "vue";
import { NDrawer } from "naive-ui";
import SettingOutlined from "@vicons/antd/SettingOutlined";
import CloseOutline from "@vicons/ionicons5/CloseOutline";

const attrs = useAttrs();

const emit = defineEmits<{
    (event: "update:show", value: boolean): void;
}>();

const props = withDefaults(
    defineProps<{
        showSet?: boolean;
        isMoveSet?: boolean;
        beforeClose?: (done: () => void) => void;
        show?: boolean;
        width?: number;
        height?: number;
    }>(),
    {
        showSet: false,
        isMoveSet: false,
        show: void 0,
        width: 251,
        height: 251,
    },
);

const isShowDrawer = ref(false);

const defaultShow = computed<boolean>({
    get() {
        return props.show !== void 0 ? props.show : isShowDrawer.value;
    },
    set(v: boolean) {
        const changeShow = () => {
            if (props.show !== void 0) {
                emit("update:show", v);
                return;
            }
            isShowDrawer.value = v;
        };
        if (props.beforeClose !== void 0 && v === false) props.beforeClose(changeShow);
        else changeShow();
    },
});

const handleSetClick = () => {
    defaultShow.value = !defaultShow.value;
};
</script>

<style lang="scss">
.drawer-set {
    width: 48px;
    height: 48px;
    background: #1890ff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
}
</style>
