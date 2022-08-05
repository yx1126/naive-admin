<template>
    <n-menu
        :value="defaultValue"
        :inverted="defaultInverted"
        key-field="path"
        label-field="name"
        :accordion="set.uniqueMenuOpened"
        :indent="20"
        :collapsed-width="64"
        :expanded-keys="defaultExpendMenu"
        @update:expanded-keys="onExpandedKeys"
        @update:value="onUpdateValue"
    />
</template>

<script setup lang="ts">
import useSetStore from "@/stores/setting";
import type { MenuOption } from "naive-ui";

const set = useSetStore();
const route = useRoute();
const router = useRouter();

const defaultInverted = $computed(() => ["dark"].includes(set.navMode) && !["mixin"].includes(set.layoutMode));
const defaultValue = $computed(() => route.meta?.activeMenu || route.path);
let defaultExpendMenu = $ref<string[]>(route.matched.filter((item) => item.path !== "").map((item) => item.path));

watch(
    () => route.path,
    () => {
        const keys = route.matched.filter((item) => item.path !== "").map((item) => item.path);
        onExpandedKeys(set.uniqueMenuOpened ? keys : [...new Set([...defaultExpendMenu, ...keys])]);
    },
);

function onUpdateValue(key: string, item: MenuOption) {
    if(item.isLink) {
        window.open(key);
        return;
    }
    router.push(key);
}

function onExpandedKeys(keys: string[]) {
    defaultExpendMenu = keys;
}
</script>

<style lang="scss" scoped></style>
