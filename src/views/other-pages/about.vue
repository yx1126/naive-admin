<template>
    <div>
        <h1>about</h1>
        <h2>user：{{ user.count }}</h2>
        <button @click="showSub">click me</button>
        <!-- <input type="text" value="123" @keyup.enter="inputchange"> -->
        <input v-model="inputValue">
        <div id="message">
            <h2>message</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import useUserStore from "@/stores/user";

defineOptions({
    name: "About",
});

const user = useUserStore();

const inputValue = $ref("copy");
console.log(user);

const showSub = () => {
    user.increment();
};
</script>
