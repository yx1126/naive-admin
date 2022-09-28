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
import FormRender from "./FormRender";
import useForm from "./hooks/useForm";
import FormAction from "./components/FormAction";
import type { FormActionProvide } from "./types";
import createInjectionKey from "@/util/create-key";

/**
 * @remarks
 *
 * FormRender 组件Maps
 */
export const ComponentsMap = {
    cascader: NCascader,
    checkbox: NCheckbox,
    "checkbox-group": NCheckboxGroup,
    "date-picker": NDatePicker,
    input: NInput,
    "input-number": NInputNumber,
    radio: NRadio,
    "radio-group": NRadioGroup,
    "radio-button-group": NRadioGroup,
    select: NSelect,
    switch: NSwitch,
    "time-picker": NTimePicker,
};

/**
 * @remarks
 *
 * FormRender 组件子组件Maps
 */
export const ComponentsOptionsMap = {
    "checkbox-group": NCheckbox,
    "radio-group": NRadio,
    "radio-button-group": NRadioButton,
};


export const formActionContext = createInjectionKey<FormActionProvide>("FormActions");



type FormRenderInstance = InstanceType<typeof FormRender> | null | undefined;

export {
    useForm,
    type FormRenderInstance,
};

export * from "./types";

export {
    FormAction,
};

export default FormRender;
