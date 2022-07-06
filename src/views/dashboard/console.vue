<template>
    <div class="console">
        <h1>console</h1>
        <!-- <svg-icon icon="bug" /> -->
        <!-- <svg-icon icon="404" /> -->
        <Icon icon="bug" size="26" color="red" />
        <Icon icon="404" size="26" color="red" />
        <Icon><GameControllerOutline /></Icon>
        <Icon><GameController /></Icon>
        <template v-for="i in 100" :key="i">
            <p>{{ i }}</p>
        </template>
    </div>
</template>

<script setup lang="ts">
import { GameControllerOutline, GameController } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped></style>
