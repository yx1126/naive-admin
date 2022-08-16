<template>
    <n-form ref="nformRef" v-bind="attrs">
        <slot />
    </n-form>
</template>


<script lang="ts" setup>
import { simpleCopy  } from "@/util";
import type { NForm } from "naive-ui";

defineOptions({
    name: "BasicForm",
    inheritAttrs: false,
});

const props = withDefaults(defineProps<{
    model?: object
}>(), {
    model: () => ({}),
});

const emit = defineEmits<{
    (event: "update:model", value: object): void;
}>();

defineExpose({
    resetFields,
});

const attrs = useAttrs();

const nformRef = $ref<InstanceType<typeof NForm> | null>(null);

const sourceData = simpleCopy<typeof props.model>(props.model);

function resetFields() {
    emit("update:model", sourceData);
    nformRef?.restoreValidation();
}

</script>

