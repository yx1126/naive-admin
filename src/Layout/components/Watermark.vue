<template>
    <n-watermark
        :content="watermark"
        cross
        fullscreen
        :font-size="16"
        :line-height="16"
        :width="384"
        :height="384"
        :x-offset="12"
        :y-offset="60"
        :rotate="-15"
        :z-index="100000"
    />
</template>

<script lang="ts" setup>
const watermark = import.meta.env.VITE_APP_TITLE;
</script>
