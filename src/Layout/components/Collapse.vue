<template>
    <div class="collapse" :style="mixinStyle" @click="set.togglCollapse">
        <Icon class="collapse-icon" :size="size">
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
        </Icon>
    </div>
</template>

<script lang="ts" setup>
import MenuFoldOutlined from "@vicons/antd/MenuFoldOutlined";
import MenuUnfoldOutlined from "@vicons/antd/MenuUnfoldOutlined";
import { useSetStore } from "@/stores";
import { useThemeVars } from "naive-ui";

interface Collapse {
    collapsed?: boolean;
    width?: number;
    height?: number;
    collapsedWidth?: number;
    size?: number;
    inverted?: boolean;
    border?: "border-top" | "border-bottom" | "border-left" | "border-right" | boolean;
}

const props = withDefaults(defineProps<Collapse>(), {
    width: 272,
    height: 42,
    collapsedWidth: 48,
    size: 22,
    inverted: false,
    border: false,
});

const set = useSetStore();
const themeVars = $(useThemeVars());

const mixinStyle = $computed(() => {
    return {
        [typeof props.border === "string" ? props.border : "border"]: `${props.border ? 1 : 0}px solid ${themeVars.dividerColor}`,
        "--collapse-width": (props.collapsed ? props.collapsedWidth : props.width) + "px",
        "--collapse-height": props.height + "px",
        "--collapse-padding": props.collapsed ? `0 ${(props.collapsedWidth - props.size) / 2}px` : "0 18px 0 20px",
        "--collapse-background": props.inverted ? themeVars.invertedColor : "",
        "--collapse-color": props.inverted ? "#BBB" : "",
        "--collapse-hover-color": props.inverted ? "#fff" : "",
        "--collaspe-trans": themeVars.cubicBezierEaseInOut,
    };
});
</script>

<style lang="scss" scoped>
.collapse {
    width: var(--collapse-width);
    height: var(--collapse-height);
    display: flex;
    align-items: center;
    padding: var(--collapse-padding);
    transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s var(--collaspe-trans);
    cursor: pointer;
    background-color: var(--collapse-background);
    .collapse-icon {
        color: var(--collapse-color);
    }
    &:hover .collapse-icon {
        color: var(--collapse-hover-color);
    }
}
</style>
