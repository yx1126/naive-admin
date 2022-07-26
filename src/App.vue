<template>
    <NConfig>
        <Layout>
            <TransRouterView />
        </Layout>
    </NConfig>
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import TransRouterView from "@/components/TransRouterView";
import { useApp, useTitle } from "@/hooks";
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";
import useUserStore from "@/stores/user";

const route = useRoute();
const user = useUserStore();
const app = useApp();
const title = useTitle(null, `%s-${import.meta.env.VITE_APP_TITLE}`);

watch(
    () => route.path,
    () => {
        if (route.path.startsWith("/redirect"))return;
        title.value = route.matched
            .filter(v => v.meta.title)
            .reverse()
            .map(r => r.meta.title)
            .join("-");
    },
);

onBeforeMount(() => {
    console.log(app);
    user.initMenu();
});
</script>



<style lang="scss">
</style>
