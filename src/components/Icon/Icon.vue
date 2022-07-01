<template>
    <n-icon>
        <slot>
            <template v-if="icon">
                <template v-if="isIcon">
                    <i :class="icon" />
                </template>
                <template v-else>
                    <svg-icon :icon="icon" />
                </template>
            </template>
        </slot>
    </n-icon>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NIcon } from "naive-ui";
import SvgIcon from "./SvgIcon.vue";

const props = withDefaults(
    defineProps<{
        icon?: string;
    }>(),
    {
        icon: void 0,
    },
);

const iconPrefixReg = /^[a-z]{1,}-icon-/;

const isIcon = computed(() => iconPrefixReg.test(props.icon));
</script>
