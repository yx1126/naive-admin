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
import { useThemeVars } from "naive-ui";

interface Collapse {
    collapsed?: boolean;
    width?: number;
    height?: number;
    collapsedWidth?: number;
    size?: number;
    inverted?: boolean;
    border?: string | boolean;
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
    const { collapsed, collapsedWidth, width, height, size, inverted, border } = props;
    const defaultValue: Record<string, string> = {
        "--collapse-width": (collapsed ? collapsedWidth : width) + "px",
        "--collapse-height": height + "px",
        "--collapse-padding": collapsed ? `0 ${(collapsedWidth - size) / 2}px` : "0 18px 0 20px",
        "--collapse-background": inverted ? themeVars.invertedColor : "",
        "--collapse-color": inverted ? "#BBB" : "",
        "--collapse-hover-color": inverted ? "#fff" : "",
        "--collaspe-trans": themeVars.cubicBezierEaseInOut,
    };
    const borderKeys = typeof border === "string" ? border.split(",").map(item => `border-${item}`) : ["border"],
          borderValue = `${border ? 1 : 0}px solid ${themeVars.dividerColor}`;
    borderKeys.forEach(item => {
        defaultValue[item] = borderValue;
    });
    return defaultValue;
});
</script>

<style lang="scss" scoped>
.collapse {
    width: var(--collapse-width);
    height: var(--collapse-height);
    display: flex;
    align-items: center;
    padding: var(--collapse-padding);
    cursor: pointer;
    background-color: var(--collapse-background);
    transition: padding 0.3s var(--collaspe-trans), width 0.3s var(--collaspe-trans), background-color 0.3s var(--collaspe-trans),
        border-color 0.3s var(--collaspe-trans);
    &-icon {
        color: var(--collapse-color);
    }
    &:hover &-icon {
        color: var(--collapse-hover-color);
    }
}
</style>
