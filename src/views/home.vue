<template>
    <div class="home">
        <button @click="showSub">click me</button>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    methods: {
        showSub() {
            this.$router.push("/home/sub");
        },
    },
    created() {
        console.log("home");
    },
});
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
