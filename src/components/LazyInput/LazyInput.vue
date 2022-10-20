<template>
    <n-input
        ref="inputRef"
        v-model:value="inputValue"
        v-bind="$attrs"
    >
        <template v-for="slot in Object.keys($slots)" #[slot] :key="slot">
            <slot :name="slot" />
        </template>
    </n-input>
</template>

<script lang="ts">
import { NInput } from "naive-ui";

export default defineComponent({
    name: "LazyInput",
    components: { NInput },
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Array] as PropType<string | [string, string]>,
            default: void 0,
        },
        delay: { type: Number, default: 500 },
        valueModifiers: {
            type: Object as PropType<{ lazy?: boolean }>,
            default: () => ({}),
        },
    },
    emits: ["change", "input", "update:value"],
    setup(props, { emit }) {

        const inputRef = ref<InstanceType<typeof NInput> | null>(null);

        const inputValue = ref<string | [string, string] | undefined>(props.value);

        function blur() {
            inputRef.value?.blur();
        }
        function focus() {
            inputRef.value?.focus();
        }
        function select() {
            inputRef.value?.select();
        }
        function scrollTo(options: { left?: number; top?: number; behavior?: "auto" | "smooth" }) {
            inputRef.value?.scrollTo(options);
        }
        function updateValue(value: string | [string, string]) {
            emit("update:value", value);
        }

        watch(inputValue, (value) => {
            const fn = props.valueModifiers.lazy ? useDeounce(updateValue, props.delay) : updateValue;
            fn.call(null, value as any);
        });

        return {
            inputRef,
            inputValue,
            blur,
            focus,
            select,
            scrollTo,
        };
    },
});
</script>

<style lang="scss" scoped></style>
