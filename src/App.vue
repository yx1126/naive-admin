<template>
    <NConfig>
        <Layout>
            <TransRouterView />
        </Layout>
    </NConfig>
</template>

<script setup lang="ts">
import TransRouterView from "@/components/TransRouterView";
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";

const user = useUserStore();
const app = useApp();

onBeforeMount(() => {
    console.log(app);
    user.initMenu();
});

</script>
