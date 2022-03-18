<template>
    <div>
        <h1>about</h1>
        <h2>user：{{ user.count }}</h2>
        <h2>menu：{{ menu.count }}</h2>
        <button @click="showSub">click me</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script setup lang="ts">
import useMenuStore from "@/stores/menu";
import useUserStore from "@/stores/user";
const user = useUserStore();
const menu = useMenuStore();
console.log(user);
console.log(menu);

const showSub = () => {
    user.increment();
    menu.increment();
};
const reset = () => {
    menu.$reset();
};
</script>
