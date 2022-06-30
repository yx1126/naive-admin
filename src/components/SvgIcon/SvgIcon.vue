<template>
    <svg aria-hidden="true">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = withDefaults(
    defineProps<{
        prefix?: string;
        icon: string;
        color?: string;
    }>(),
    {
        prefix: "icon",
        color: "#333",
    },
);

defineOptions({
    name: "SvgIcon",
});

const symbolId = computed(() => `#${props.prefix}-${props.icon}`);
</script>
