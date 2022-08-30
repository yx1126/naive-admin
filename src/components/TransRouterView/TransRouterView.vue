<template>
    <router-view #default="{ Component, route }">
        <transition :name="transition ? set.routerTrans : void 0" :mode="transitionMode">
            <keep-alive :include="keepAliveList" :exclude="['Redirect']">
                <component :is="Component" :key="route.fullPath" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import { routerTransOptions } from "@/stores/setting";

defineOptions({
    name: "TransRouterView",
});

withDefaults(defineProps<{
    transition?: boolean;
}>(), {
    transition: true,
});

const set = useSetStore();
const tags = useTagsStore();
const mitter = useMitt();

let noKeepAliveList = $ref("");

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
