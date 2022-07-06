<template>
    <div v-if="set.isShowLogo" class="logo" :style="logoStyle">
        <div class="logo-icon">
            <slot name="icon">
                <n-icon :size="32"><Vue /></n-icon>
            </slot>
        </div>
        <div class="logo-text">
            <slot>{{ text }}</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSetStore } from "@/stores";
import Vue from "@/components/Vue";

interface Logo {
    collapsed?: boolean;
    inverted?: boolean;
    width?: number;
    collapsedWidth?: number;
    text?: string;
    mode?: "vertical" | "horizontal";
}

const set = useSetStore();

const props = withDefaults(defineProps<Logo>(), {
    width: 272,
    collapsedWidth: 48,
    mode: "vertical",
});

const logoStyle = computed(() => {
    return {
        "--logo-width": (props.collapsed ? props.collapsedWidth : props.width) + "px",
        "--logo-padding": props.collapsed ? `0 ${(props.collapsedWidth - 32) / 2}px` : "0 18px 0 20px",
        "--logo-icon-margin-right": props.collapsed ? 0 : "8px",
        "--logo-text-width": props.collapsed ? 0 : "auto",
        "--logo-opacity": props.collapsed ? 0 : 1,
    };
});
</script>

<style lang="scss" scoped>
.logo {
    width: var(--logo-width);
    height: 50px;
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
