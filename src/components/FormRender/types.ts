import type {
    FormItemRule,
    FormValidationError,
    CascaderProps,
    CheckboxProps,
    DatePickerProps,
    InputProps,
    InputNumberProps,
    RadioProps,
    CheckboxGroupProps,
    RadioGroupProps,
    RadioButtonProps,
    SelectProps,
    SwitchProps,
    TimePickerProps,
    FormItemProps,
    FormItemGiProps,
    FormRules,
} from "naive-ui";
import type FormRender from "./FormRender";
import type { InjectionKey, Ref, VNodeChild } from "vue";

/**
 * {@label FormComponentsProps}
 */
export interface FormComponentsProps {
    cascader: CascaderProps;
    checkbox: CheckboxProps;
    "checkbox-group": CheckboxGroupProps & { options: CheckboxProps[] };
    "date-picker": DatePickerProps;
    input: InputProps;
    "input-number": InputNumberProps;
    radio: RadioProps;
    "radio-group": RadioGroupProps & { options: RadioProps[] };
    "radio-button-group": RadioButtonProps & { options: RadioProps[] };
    select: SelectProps;
    switch: SwitchProps;
    "time-picker": TimePickerProps;
}

export interface SchemaOption<T extends keyof FormComponentsProps = keyof FormComponentsProps> {
    path?: string;
    type?: T;
    label?: string | (() => VNodeChild);
    feedback?: string | (() => VNodeChild);
    props?: FormComponentsProps[T];
    slot?: string;
    show?: boolean;
    displayDirective?: "show" | "if";
    render?: () => VNodeChild;
}

export type FormSchema = SchemaOption & Omit<FormItemProps | FormItemGiProps, "label" | "feedback">;

export interface RenderFormInitParams {
    validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void>;
    restoreValidation(): void;
}

export interface BaseRenderFormProvide<T> {
    loading: Ref<boolean>;
    model: Ref<T>;
    init(params: RenderFormInitParams): void;
    setModel<K extends keyof T>(key: K, value: T[K]): void;
    resetFields: () => void;
}

export interface BaseFormActionProvide {
    grid: boolean;
    loading: boolean | undefined;
    reset: () => void;
    validate: RenderFormInitParams["validate"];
}

export type RenderFormProvide<T> = InjectionKey<BaseRenderFormProvide<T>>;
export type FormActionProvide = InjectionKey<BaseFormActionProvide>;
export type FormRenderInstance = Empty<InstanceType<typeof FormRender>>;

export {
    FormRules,
};
