<template>
    <n-layout class="layout-wrapper" has-sider position="absolute">
        <slot name="sider"></slot>
        <n-layout>
            <n-layout-header class="layout-header" position="absolute" bordered>
                <Header />
            </n-layout-header>
            <n-layout-header class="layout-tags" bordered>
                <Tags />
            </n-layout-header>
            <n-layout-content class="layout-content" position="absolute" style="top: 100px; bottom: 0" :native-scrollbar="nativeScrollbar">
                <slot></slot>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import Header from "../../../components/Header.vue";
import Tags from "../../../components/Tags.vue";

withDefaults(
    defineProps<{
        nativeScrollbar?: boolean;
    }>(),
    {
        nativeScrollbar: true,
    },
);
</script>
