<template>
    <div>
        <h1>AsideLayout</h1>
        <n-button>test</n-button>
        <n-button type="primary" @click="mitt.emit('load:start')">test</n-button>
        <n-button type="success" @click="mitt.emit('load:finish')">test</n-button>
        <n-button type="info">test</n-button>
        <n-button type="warning">test</n-button>
        <n-button type="error" @click="mitt.emit('load:error')">test</n-button>
    </div>
</template>

<script setup lang="ts">
import useMitt from "@hooks/use-mitt";
const mitt = useMitt();
</script>
