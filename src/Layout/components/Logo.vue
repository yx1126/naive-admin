<template>
    <div v-if="set.isShowLogo" class="logo" :style="logoStyle">
        <div class="logo-icon">
            <slot name="icon">
                <Icon :size="32" icon="vue" />
            </slot>
        </div>
        <div class="logo-text">
            <slot>{{ text }}</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSetStore } from "@/stores";
import { isString } from "@/util/validata";

interface Logo {
    collapsed?: boolean;
    width?: number | string;
    minWidth?: number | string;
    height?: number;
    collapsedWidth?: number;
    text?: string;
    indent?: number;
}

const set = useSetStore();

const props = withDefaults(defineProps<Logo>(), {
    width: 272,
    height: 50,
    collapsedWidth: 48,
    text: "VueAdmin",
    indent: 20,
});

const logoStyle = computed(() => {
    return {
        "--logo-width": props.collapsed ? props.collapsedWidth + "px" : isString(props.width) ? props.width : props.width + "px",
        "--logo-min-width": typeof props.minWidth === "string" ? props.minWidth : props.minWidth + "px",
        "--logo-height": props.height + "px",
        "--logo-padding": props.collapsed ? `0 ${(props.collapsedWidth - 32) / 2}px` : `0 18px 0 ${props.indent}px`,
        "--logo-icon-margin-right": props.collapsed ? 0 : "8px",
        "--logo-text-width": props.collapsed ? 0 : "auto",
        "--logo-opacity": props.collapsed ? 0 : 1,
    };
});
</script>

<style lang="scss" scoped>
.logo {
    width: var(--logo-width);
    min-width: var(--logo-min-width);
    height: var(--logo-height);
    display: flex;
    align-items: center;
    padding: var(--logo-padding);
    transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}
.logo-icon {
    margin-right: var(--logo-icon-margin-right);
    display: flex;
    align-items: center;
    transition: margin-right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.logo-text {
    width: var(--logo-text-width);
    opacity: var(--logo-opacity);
    white-space: nowrap;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
