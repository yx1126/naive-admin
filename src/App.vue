<template>
    <NConfig>
        <Layout>
            <trans-router-view />
        </Layout>
    </NConfig>
</template>

<script setup lang="ts">
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";

const user = useUserStore();
const instance = useInstance();


onBeforeMount(() => {
    console.log(instance);
    user.initMenu();
});

</script>
