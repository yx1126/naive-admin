<template>
    <n-menu
        :collapsed="set.collapsed"
        :inverted="defaultInverted"
        key-field="path"
        label-field="name"
        :accordion="set.uniqueMenuOpened"
        :indent="20"
        :collapsed-width="64"
        :default-expanded-keys="defaultExpendMenu"
    />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useSetStore from "@/stores/setting";

const set = useSetStore();
const route = useRoute();

const defaultInverted = $computed(() => ["dark"].includes(set.navMode) && ["aside"].includes(set.layoutMode));

const defaultExpendMenu = $ref<string[]>(route.matched.filter(item => item.path !== "").map(item => item.path));
</script>

<style lang="scss" scoped></style>
