import {
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NInput,
    NInputNumber,
    NRadio,
    NRadioGroup,
    NRadioButton,
    NDatePicker,
    NSelect,
    NSwitch,
    NTimePicker,
} from "naive-ui";
import type { Component, PropType } from "vue";
import FormRender from "./FormRender";
import useForm from "./hooks/useForm";
import FormAction from "./components/FormAction";
import type { FormActionProvide } from "./types";
import createInjectionKey from "@/util/create-key";

/**
 * @param component - 组件
 * @remarks radio checkbox v-model:checked 转为 v-model:value
 */
function middlewareCheck(component: Component) {
    return defineComponent({
        name: "Middleware",
        inheritAttrs: false,
        props: {
            value: [String, Number, Object, Array, Boolean, Date, Function, Symbol],
            onUpdateValue: Function as PropType<(value: any) => void>,
        },
        emits: ["update:value"],
        setup(props, { emit }) {

            function updateValue(value: any) {
                const { onUpdateValue } = props;
                emit("update:value", value);
                if(onUpdateValue) onUpdateValue(value);
            }

            return {
                updateValue,
            };
        },
        render() {
            const { $attrs, value, updateValue } = this;
            return h(component as any, {
                ...$attrs,
                checked: value,
                onUpdateChecked: updateValue,
            });
        },
    });
}

/**
 * @remarks FormRender 组件Maps 组件Props类型
 */
const ComponentsMap = {
    cascader: NCascader,
    checkbox: middlewareCheck(NCheckbox),
    "checkbox-group": NCheckboxGroup,
    "date-picker": NDatePicker,
    input: NInput,
    "input-number": NInputNumber,
    radio: middlewareCheck(NRadio),
    "radio-group": NRadioGroup,
    "radio-button-group": NRadioGroup,
    select: NSelect,
    switch: NSwitch,
    "time-picker": NTimePicker,
};

/**
 * @remarks FormRender 组件子组件Maps
 */
const ComponentsOptionsMap = {
    "checkbox-group": NCheckbox,
    "radio-group": NRadio,
    "radio-button-group": NRadioButton,
};

/**
 * @remarks 存在子节点的组件
 */
const HasChildrenComponents = ["checkbox-group", "radio-group", "radio-button-group"];
/**
 * @remarks 存在子节点且需要用 NSpace 组件包裹的组件
 */
const NeedSpaceMap = ["checkbox-group", "radio-group"];

const formActionContext = createInjectionKey<FormActionProvide>("FormActions");

export {
    ComponentsMap,
    ComponentsOptionsMap,
    HasChildrenComponents,
    NeedSpaceMap,
    formActionContext,
    useForm,
    FormAction,
};

export * from "./types";

export default FormRender;
