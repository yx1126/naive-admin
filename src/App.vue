<template>
    <div class="app">
        <Layout />
    </div>
</template>
<script setup lang="ts">
import { reactive, watch } from "vue";
import useApp from "@hooks/use-app";
import Layout from "@/Layout/index.vue";

const app = useApp();
console.log("app", app);
const state = reactive({
    count: 0,
});
watch(
    () => state.count,
    v => {
        console.log(v);
    },
);
</script>

<style lang="scss"></style>
