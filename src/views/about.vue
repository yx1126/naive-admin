<template>
    <div>
        <h1>about</h1>
        <button @click="showSub">click me</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    methods: {
        showSub() {
            console.log(1);
        },
    },
});
</script>
