<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<script lang="ts" setup>

defineOptions({
    name: "SvgIcon",
});

const props = withDefaults(
    defineProps<{
        prefix?: string;
        icon: string;
    }>(),
    {
        prefix: "icon",
    },
);

const symbolId = computed(() => `#${props.prefix}-${props.icon}`);
</script>

<style>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>
