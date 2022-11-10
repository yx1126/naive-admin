<template>
    <router-view #default="{ Component, route }">
        <transition :name="transition ? routerTrans : void 0" :mode="transitionMode">
            <keep-alive :include="keepAliveList" :exclude="['Redirect']">
                <component :is="Component" :key="route.fullPath" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts">
import { routerTransOptions } from "@/stores/setting";

export default defineComponent({
    name: "TransRouterView",
    props: {
        transition: {  type: Boolean, default: true },
    },
    setup() {
        const set = useSetStore();
        const tags = useTagsStore();
        const mitter = useMitt();

        const noKeepAliveList = ref("");

        const routerTrans = computed(() => set.routerTrans);

        const transitionMode = computed(() => routerTransOptions.find(r => r.value === routerTrans.value)?.mode || "default");

        const keepAliveList = computed<string[]>(() => {
            return tags.keepAliveList.filter(n => noKeepAliveList.value !== n);
        });

        onMounted(() => {
            mitter.on("keepAlive", name => {
                noKeepAliveList.value = name;
            });
        });
        return {
            routerTrans,
            transitionMode,
            keepAliveList,
        };
    },
});
</script>
