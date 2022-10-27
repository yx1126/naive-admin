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

<script lang="ts">
import { NIcon } from "naive-ui";
import { isString } from "@/util/validata";
import SvgIcon from "./SvgIcon.vue";

const iconPrefixReg = /^[a-z]{1,}-icon-/;

export default defineComponent({
    name: "Icon",
    components: { NIcon, SvgIcon },
    props: {
        icon: { type: String, default: void 0 },
    },
    setup(props) {

        const isIcon = computed(() => {
            return isString(props.icon) ? iconPrefixReg.test(props.icon) : false;
        });

        return {
            isIcon,
        };
    },
});
</script>
