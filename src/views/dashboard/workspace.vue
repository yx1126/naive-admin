<template>
    <div class="workspace" :style="{}">
        <h1>workspace</h1>
        <input type="text" v-model="inputValue" />
        <Input v-model="inputValue" />
        <p>{{ inputValue }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";
import { useVModel } from "@/hooks";

const inputValue = $ref("");

const Input = defineComponent({
    name: "CustomInput",
    props: {
        value: {
            type: String,
            default: void 0,
        },
        modelValue: {
            type: String,
            default: void 0,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    setup(props) {
        const defaultValue = useVModel(props);

        return {
            defaultValue,
        };
    },
    render() {
        return h("input", {
            value: this.defaultValue,
            onInput: (e: InputEvent) => {
                // console.log((e.target as HTMLInputElement).value);
                this.defaultValue = (e.target as HTMLInputElement).value;
            },
        });
    },
});
</script>

<style lang="scss" scoped></style>
