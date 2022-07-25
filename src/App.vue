<template>
    <n-config>
        <Layout>
            <TransRouterView />
        </Layout>
    </n-config>
</template>
<script setup lang="ts">
import TransRouterView from "@/components/TransRouterView";
import { onBeforeMount, watch } from "vue";
import { useApp, useTitle } from "@/hooks";
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";
import useUserStore from "@/stores/user";
import { useRoute } from "vue-router";

const route = useRoute();
const user = useUserStore();
const app = useApp();
const title = useTitle(null, `%s-${import.meta.env.VITE_APP_TITLE}`);

watch(
    () => route.path,
    () => {
        if (route.path.startsWith("/redirect")) return;
        title.value = route.matched
            .filter((v) => v.meta.title)
            .reverse()
            .map((r) => r.meta.title)
            .join("-");
    }
);

onBeforeMount(() => {
    console.log(app);
    user.initMenu();
});
</script>

<style lang="scss"></style>
