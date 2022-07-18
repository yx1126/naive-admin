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
    @extend .flex-between-center;
    .header-left {
        @extend .flex-align-center;
    }
    .header-right {
        @extend .flex-align-center;
    }
}
</style>
