<template>
    <NConfig>
        <Layout>
            <TransRouterView />
        </Layout>
    </NConfig>
</template>

<script setup lang="ts">
import TransRouterView from "@/components/TransRouterView";
import { useApp  } from "@/hooks";
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";
import useUserStore from "@/stores/user";

const user = useUserStore();
const app = useApp();

onBeforeMount(() => {
    console.log(app);
    user.initMenu();
});
</script>
