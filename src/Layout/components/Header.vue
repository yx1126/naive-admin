<template>
    <div class="header">
        <div class="header-left">
            <slot name="logo"></slot>
            <slot name="left"></slot>
        </div>
        <div class="header-right"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    @extend .flex-center;
    .header-left {
        @extend .flex-center;
    }
    .header-right {
        @extend .flex-center;
    }
}
</style>
