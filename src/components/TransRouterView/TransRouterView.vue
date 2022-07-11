<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="set.routerTrans">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import { useSetStore } from "@/stores";
const set = useSetStore();
</script>
