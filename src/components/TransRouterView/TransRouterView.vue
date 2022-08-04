<template>
    <router-view #default="{ Component, route }">
        <transition :name="set.routerTrans" :mode="transitionMode">
            <keep-alive :include="keepAliveList" :exclude="['Redirect']">
                <component :is="Component" :key="route.fullPath" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import { useTagsStore, useSetStore } from "@/stores";
import { routerTransOptions } from "@/stores/setting";
import { useMitt } from "@/hooks";

const set = useSetStore();
const tags = useTagsStore();
const mitter = useMitt();

let noKeepAliveList = $ref<string>("");

const transitionMode = $computed(() => routerTransOptions.find(r => r.value === set.routerTrans)?.mode || "default");

const keepAliveList = $computed<string[]>(() => {
    return tags.keepAliveList.filter(n => noKeepAliveList !== n);
});

onMounted(() => {
    mitter.on("keepAlive", name => {
        noKeepAliveList = name;
    });
});
</script>
