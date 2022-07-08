<template>
    <n-config>
        <Layout>
            <router-view />
        </Layout>
    </n-config>
</template>
<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useApp } from "@/hooks";
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

<style lang="scss"></style>
