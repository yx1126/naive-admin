<template>
    <div class="collapse" :style="mixinStyle" @click="set.togglCollapse">
        <Icon :size="size">
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
        </Icon>
    </div>
</template>

<script setup lang="ts">
import MenuFoldOutlined from "@vicons/antd/MenuFoldOutlined";
import MenuUnfoldOutlined from "@vicons/antd/MenuUnfoldOutlined";
import { useSetStore } from "@/stores";

interface Collapse {
    collapsed?: boolean;
    width?: number;
    height?: number;
    collapsedWidth?: number;
    size?: number;
}

const props = withDefaults(defineProps<Collapse>(), {
    width: 272,
    height: 42,
    collapsedWidth: 48,
    size: 22,
});

const set = useSetStore();

const mixinStyle = $computed(() => {
    return {
        "--collapse-width": (props.collapsed ? props.collapsedWidth : props.width) + "px",
        "--collapse-height": props.height + "px",
        "--collapse-padding": props.collapsed ? `0 ${(props.collapsedWidth - props.size) / 2}px` : "0 18px 0 20px",
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
    transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}
</style>
