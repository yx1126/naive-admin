<template>
    <div class="tags-item" :class="{ active: active }" :style="tagsItemStyle">
        <span><slot /></span>
        <Icon v-if="closable" @click.stop="onClose"><CloseOutline /></Icon>
    </div>
</template>
<script lang="ts" setup>
import CloseOutline from "@vicons/ionicons5/CloseOutline";
import { useSetStore } from "@/stores";
import { useThemeVars, lightTheme } from "naive-ui";

const set = useSetStore();
const themeVars = $(useThemeVars());

withDefaults(
    defineProps<{
        active?: boolean;
        closable?: boolean;
    }>(),
    {},
);

const emit = defineEmits<{
    (event: "close"): void;
}>();

const tagsItemStyle = $computed(() => {
    const menuColor = lightTheme.Menu.self?.(themeVars);
    return {
        "--tags-active-text-color": set.themeColor,
        "--tags-active-back-color": menuColor?.itemColorActive,
        "--tags-trans": themeVars.cubicBezierEaseInOut,
    };
});

function onClose() {
    emit("close");
}
</script>

<style lang="scss">
.tags-item {
    height: 28px;
    padding: 1px 10px 0;
    cursor: pointer;
    border: 1px solid #d8dce5;
    transition: background-color 0.3s var(--tags-trans);
    @extend .flex-align-center;
    &:not(:first-child) {
        margin-left: 5px;
    }
    &.active {
        border: 1px solid var(--tags-active-text-color);
        color: var(--tags-active-text-color);
        background-color: var(--tags-active-back-color);
    }
}
</style>
