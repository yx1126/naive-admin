<template>
    <n-menu
        :collapsed="set.collapsed"
        :inverted="defaultInverted"
        key-field="path"
        label-field="name"
        :accordion="set.uniqueMenuOpened"
        :indent="20"
        :collapsed-width="64"
        :expanded-keys="defaultExpendMenu"
        @update:expanded-keys="onExpandedKeys"
    />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import useSetStore from "@/stores/setting";

const set = useSetStore();
const route = useRoute();

const defaultInverted = $computed(() => ["dark"].includes(set.navMode) && !["mixin"].includes(set.layoutMode));

let defaultExpendMenu = $ref<string[]>(route.matched.filter(item => item.path !== "").map(item => item.path));

const onExpandedKeys = (keys: string[]) => {
    defaultExpendMenu = keys;
};

watch(
    () => route.path,
    () => {
        const keys = route.matched.filter(item => item.path !== "").map(item => item.path);
        onExpandedKeys(keys);
    },
);
</script>

<style lang="scss" scoped></style>
