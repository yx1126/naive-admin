<template>
    <n-menu :collapsed="set.collapsed" :inverted="defaultInverted" :accordion="set.uniqueMenuOpened" :indent="20" :collapsed-width="64" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import useSetStore from "@/stores/setting";

const set = useSetStore();

const defaultInverted = computed(() => ["dark"].includes(set.navMode) && ["aside"].includes(set.layoutMode));
</script>

<style lang="scss" scoped></style>
