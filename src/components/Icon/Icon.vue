<template>
    <n-icon>
        <slot>
            <template v-if="icon">
                <i v-if="isIcon" :class="icon" />
                <svg-icon v-else :icon="icon" />
            </template>
        </slot>
    </n-icon>
</template>

<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { isString } from "@/util/validata";
import SvgIcon from "./SvgIcon.vue";

defineOptions({
    name: "Icon",
});

const props = withDefaults(
    defineProps<{
        icon?: string;
    }>(),
    {
        icon: void 0,
    },
);

const iconPrefixReg = /^[a-z]{1,}-icon-/;

const isIcon = computed(() => {
    return isString(props.icon) ? iconPrefixReg.test(props.icon) : false;
});
</script>
