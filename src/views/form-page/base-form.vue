<template>
    <n-card title="base-form">
        <FormRender
            class="base-form"
            :context="context"
            label-placement="left"
            label-width="auto"
            :grid="{ cols: 1, xGap: 12 }"
            :schema="schema"
            :rules="rules"
        >
            <!--
                gridProps: { cols: 1, xGap: 12 },
             -->
            <template #action>
                <FormAction @submit="onSubmit" />
            </template>
        </FormRender>
    </n-card>
</template>

<script setup lang="ts">
import FormRender, { useForm as useRenderForm, FormAction, type SchemaOption } from "@/components/FormRender";
import type { FormItemRule } from "naive-ui";

defineOptions({
    name: "BaseForm",
});

const message = useFeedBack("message");
const generalOptions = ["groode", "veli good", "emazing", "lidiculous"].map((v) => ({ label: v, value: v }));

const rules = {
    inputValue: { required: true, trigger: ["blur", "input"], message: "请输入 inputValue" },
    textareaValue: { required: true, trigger: ["blur", "input"], message: "请输入 textareaValue" },
    selectValue: { required: true, trigger: ["blur", "change"], message: "请选择 selectValue" },
    multipleSelectValue: { type: "array", required: true, trigger: ["blur", "change"], message: "请选择 multipleSelectValue" },
    datetimeValue: { type: "number", required: true, trigger: ["blur", "change"], message: "请输入 datetimeValue" },
    nestedValue: {
        path1: { required: true, trigger: ["blur", "input"], message: "请输入 nestedValue.path1" },
        path2: { required: true, trigger: ["blur", "change"], message: "请输入 nestedValue.path2" },
    },
    checkboxGroupValue: { type: "array",  required: true, trigger: "change", message: "请选择 checkboxGroupValue" },
    radioGroupValue: { required: true, trigger: "change", message: "请选择 radioGroupValue" },
    radioButtonGroupValue: { required: true, trigger: "change", message: "请选择 radioButtonGroupValue" },
    inputNumberValue: { type: "number",  required: true, trigger: ["blur", "change"], message: "请输入 inputNumberValue" },
    timePickerValue: { type: "number", required: true, trigger: ["blur", "change"], message: "请输入 timePickerValue" },
    sliderValue: { validator: (rule: FormItemRule, value: number) => value > 50, trigger: ["blur", "change"], message: "sliderValue 需要大于 50" },
    transferValue: { type: "array", required: true, trigger: "change", message: "请输入 transferValue" },
};

const schema = $ref<SchemaOption[]>([
    { path: "inputValue", label: "Input", props: { placeholder: "Input", clearable: true } },
    { path: "textareaValue", label: "Textarea", props: { type: "textarea", placeholder: "Textarea", autosize: { minRows: 3, maxRows: 5 }, clearable: true } },
    { path: "selectValue", type: "select", label: "Select", props: { placeholder: "Select", options: generalOptions, clearable: true } },
    { path: "multipleSelectValue", type: "select", label: "Multiple Select", props: { placeholder: "Input", options: generalOptions, multiple: true, clearable: true } },
    { path: "datetimeValue", type: "date-picker", label: "Datetime", props: { type: "datetime", clearable: true } },
    { path: "switchValue", type: "switch", label: "Switch" },
    { path: "checkboxGroupValue", type: "checkbox-group", label: "Checkbox Group", props: { options: Array.from({ length: 3 }).map((_, i) => ({ label: `Option ${i}`, value: `Option ${i}` })) } },
    { path: "radioGroupValue", type: "radio-group", label: "Radio Group", props: { options: Array.from({ length: 3 }).map((_, i) => ({ label: `Radio ${i}`, value: `Radio ${i}` })) } },
    { path: "inputNumberValue", type: "input-number", label: "Input Number", props: { clearable: true } },
    { path: "timePickerValue", type: "time-picker", label: "Time Picker", props: { clearable: true } },
]);

const { context, loading } = useRenderForm({
    data: () => ({
        inputValue: null,
        textareaValue: null,
        selectValue: null,
        multipleSelectValue: null,
        datetimeValue: null,
        nestedValue: { path1: null, path2: null },
        switchValue: false,
        checkboxGroupValue: null,
        radioGroupValue: null,
        radioButtonGroupValue: null,
        inputNumberValue: null,
        timePickerValue: null,
        sliderValue: 0,
        transferValue: null,
    }),
});

function onSubmit() {
    loading.value = true;
    setTimeout(() => {
        message.info("onSubmit");
        loading.value = false;
    }, 1500);
}

</script>

<style lang="scss" scoped>
.base-form {
    width: 800px;
    margin: auto;
}
</style>
