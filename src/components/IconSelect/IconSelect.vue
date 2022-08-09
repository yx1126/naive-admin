<template>
    <n-popover
        v-model:show="isShowPopver"
        trigger="manual"
        :width="width"
        :show-arrow="false"
        :to="false"
        placement="bottom"
    >
        <template #trigger>
            <n-input-group class="icon-select-group" @click.stop>
                <n-input-group-label>
                    <Icon :icon="defaultIcon" :size="size" />
                </n-input-group-label>
                <n-input v-bind="attrs" v-model:value="defaultIcon" :placeholder="placeholder" readonly @click="onClick" />
            </n-input-group>
        </template>
        <div class="icon-select-list" @click.stop>
            <template v-for="item in svgList" :key="item">
                <div class="icon-select-list-item">
                    <Icon :icon="item" :size="18" />
                </div>
            </template>
        </div>
    </n-popover>
</template>

<script setup lang="ts">
import Icon from "../Icon";
import { svgList } from "./index";

defineOptions({
    name: "IconSelect",
    inheritAttrs: false,
});

const emit = defineEmits<{
    (event: "update:value", value: string): void
}>();

const props = withDefaults(defineProps<{
    value?: string;
    placeholder?: string;
    size?: number;
    width?: number | "trigger"
}>(), {
    placeholder: "请选择图标",
    size: 20,
    width: "trigger",
});

const attrs = useAttrs();

let isShowPopver = $ref(false);

const defaultIcon = $computed({
    get: () => props.value || "",
    set: value => emit("update:value", value),
});

function onClick() {
    isShowPopver = !isShowPopver;
    function onClickoutside() {
        isShowPopver = false;
        document.removeEventListener("click", onClickoutside);
    }
    document.addEventListener("click", onClickoutside);
}

</script>

<style lang="scss" scoped>
.icon-select-group {
    width: auto;
    :deep(.n-input-group-label) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
