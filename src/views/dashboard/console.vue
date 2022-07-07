<template>
    <div class="console">
        <h1>console</h1>
        <!-- <svg-icon icon="bug" /> -->
        <!-- <svg-icon icon="404" /> -->
        <Icon icon="bug" size="26" color="red" />
        <Icon icon="404" size="26" color="red" />
        <Icon><GameControllerOutline /></Icon>
        <Icon><GameController /></Icon>
        <n-dropdown trigger="hover" :options="options" :inverted="false">
            <n-button>悬浮！</n-button>
        </n-dropdown>
        <template v-for="i in 100" :key="i">
            <p>{{ i }}</p>
        </template>
    </div>
</template>

<script setup lang="ts">
import { GameControllerOutline, GameController } from "@vicons/ionicons5";
const options = [
    {
        label: "滨海湾金沙，新加坡",
        key: "marina bay sands",
        disabled: true,
    },
    {
        label: "布朗酒店，伦敦",
        key: "brown's hotel, london",
    },
    {
        label: "亚特兰蒂斯巴哈马，拿骚",
        key: "atlantis nahamas, nassau",
    },
    {
        label: "比佛利山庄酒店，洛杉矶",
        key: "the beverly hills hotel, los angeles",
    },
];
</script>

<style lang="scss" scoped></style>
