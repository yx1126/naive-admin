<template>
    <div class="milk-down">
        <h1>MilkDown</h1>
        <n-grid :cols="1" y-gap="20">
            <n-gi>
                <n-space>
                    <n-button type="primary" @click="setValue">insertValue</n-button>
                    <n-button type="primary" @click="getValue">getValue</n-button>
                </n-space>
            </n-gi>
            <n-gi>
                <MilkDown ref="milkdownRef" default-value="# Milkdown 💖 Vue" :readonly="false" />
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import MilkDown from "@/components/MilkDown";

defineOptions({
    name: "MilkDownPage",
});

const milkdownRef = $ref<InstanceType<typeof MilkDown> | null>(null);

function setValue() {
    milkdownRef?.insertValue("`string`");
}

function getValue() {
    const value = milkdownRef!.getValue();
    console.log(value);
}
</script>

<style lang="scss" scoped></style>
