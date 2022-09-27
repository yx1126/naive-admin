import type {
    FormItemRule,
    FormValidationError,
    GridProps,
    CascaderProps,
    CheckboxProps,
    DatePickerProps,
    InputProps,
    InputNumberProps,
    RadioProps,
    CheckboxGroupProps,
    RadioGroupProps,
    SelectProps,
    SwitchProps,
    TimePickerProps,
    FormItemProps,
    FormItemGiProps,
} from "naive-ui";
import type { ComputedRef, InjectionKey, Ref, VNodeChild } from "vue";


export interface FormComponents {
    cascader: CascaderProps;
    checkbox: CheckboxProps;
    "checkbox-group": CheckboxGroupProps & { options: CheckboxProps[] };
    "date-picker": DatePickerProps;
    input: InputProps;
    "input-number": InputNumberProps;
    radio: RadioProps;
    "radio-group": RadioGroupProps & { options: RadioProps[] };
    select: SelectProps;
    switch: SwitchProps;
    "time-picker": TimePickerProps;
}

export interface BaseSchemaOption<T extends keyof FormComponents = keyof FormComponents> {
    path: string;
    type?: T;
    label?: string | (() => VNodeChild);
    feedback?: string | (() => VNodeChild);
    props?: FormComponents[T];
    // show?: boolean;
    // display?: "show" | "if";
    render?: () => VNodeChild;
}

export type SchemaOption = BaseSchemaOption & Omit<FormItemProps, FormItemOmit> & Omit<FormItemGiProps, FormItemOmit>;

type FormItemOmit = "label" | "feedback";

export interface FormOptions<T extends object> {
    data?: () => T;
    gridProps?: GridProps;
}

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
    grid: ComputedRef<boolean>;
    loading: ComputedRef<boolean | undefined>;
    reset: () => void;
    validate: RenderFormInitParams["validate"];
}

export type RenderFormProvide<T> = InjectionKey<BaseRenderFormProvide<T>>;
export type FormActionProvide = InjectionKey<BaseFormActionProvide>;

export {};
