<template>
    <div class="base-form">
        <h1>base-form</h1>
        <n-card>
            <BasicForm />
        </n-card>
    </div>
</template>

<script setup lang="ts">
import BasicForm from "@/components/BasicForm";

defineOptions({
    name: "BaseForm",
});

</script>

<style lang="scss" scoped></style>
