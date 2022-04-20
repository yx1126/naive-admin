<template>
    <n-config>
        <Layout />
    </n-config>
</template>
<script setup lang="ts">
import { onBeforeMount } from "vue";
import Layout from "@/Layout/index.vue";
import { NConfig } from "@/naive";
import useUserStore from "@/stores/user";

const user = useUserStore();

onBeforeMount(() => {
    user.initMenu();
});
</script>

<style lang="scss"></style>
