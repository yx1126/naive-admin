<template>
    <div>
        <h1>AsideLayout</h1>
        <n-button>test</n-button>
        <n-button type="primary" @click="mitt.emit('loadingbar:start')">test</n-button>
        <n-button type="success" @click="mitt.emit('loadingbar:finish')">test</n-button>
        <n-button type="info" @click="handleInfo">test</n-button>
        <n-button type="warning">test</n-button>
        <n-button type="error" @click="mitt.emit('loadingbar:error')">test</n-button>
    </div>
</template>

<script setup lang="ts">
import useMitt from "@hooks/use-mitt";
const mitt = useMitt();
const handleInfo = () => {
    mitt.emit("dialog:info", {
        title: "test",
    });
};
</script>
