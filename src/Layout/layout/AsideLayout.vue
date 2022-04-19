<template>
    <div>
        <h1>AsideLayout</h1>
        <n-button>test</n-button>
        <n-button type="primary" @click="handleInfo">test</n-button>
        <n-button type="success" @click="loadingbar.start()">test</n-button>
        <n-button type="info" @click="loadingbar.finish()">test</n-button>
        <n-button type="warning">test</n-button>
        <n-button type="error">test</n-button>
    </div>
</template>

<script setup lang="ts">
import { useLoadingBar, useMessage } from "@/naive";

const loadingbar = useLoadingBar();
const message = useMessage();

const handleInfo = () => {
    message.success("test");
};
</script>
