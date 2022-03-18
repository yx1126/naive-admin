<template>
    <div class="layput">
        <n-button @click="handleClick">click：{{ show }}</n-button>
        <div class="link">
            <router-link to="/about">about</router-link>
            <router-link to="/home">home</router-link>
        </div>
        <div>
            <router-view />
        </div>
    </div>
    <Drawer />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Drawer from "./components/Drawer.vue";

const show = ref(false);

const handleClick = () => {
    show.value = !show.value;
};
</script>

<style lang="scss">
.layput {
    text-align: center;
    padding: 100px;
}
.link {
    display: flex;
    justify-content: center;
    & > * {
        margin: 20px;
        color: #1171ee;
    }
}
</style>
