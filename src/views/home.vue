<template>
    <div class="home">
        <h1>home</h1>
        <h2>user：{{ user.count }}</h2>
        <button @click="showSub">click me</button>
    </div>
</template>

<script setup lang="ts">
import useUserStore from "@/stores/user";
const user = useUserStore();

const showSub = () => {
    user.increment();
};
</script>

<style lang="scss">
.link {
    display: flex;
    justify-content: center;
    & > * {
        margin: 20px;
        color: #1171ee;
    }
}
</style>
