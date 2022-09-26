import type {
    FormItemRule,
    FormRules,
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
import type { InjectionKey, Ref, VNodeChild } from "vue";


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

export interface SchemaOption<K, T extends keyof FormComponents = keyof FormComponents> {
    path: K;
    type?: T;
    label?: string | (() => VNodeChild);
    feedback?: string | (() => VNodeChild);
    props?: FormComponents[T];
    // show?: boolean;
    // display?: "show" | "if";
    render?: () => VNodeChild;
}

type FormItemOmit = "label" | "feedback";

export interface FormOptions<T extends object> {
    data?: () => T;
    gridProps?: GridProps;
    rules?: FormRules;
    schema?: Array<SchemaOption<keyof T> & Omit<FormItemProps, FormItemOmit> & Omit<FormItemGiProps, FormItemOmit>>;
}

export interface RenderFormInitParams {
    validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void>;
    restoreValidation(): void;
}

export interface BaseRenderFormProvide<T> {
    loading: Ref<boolean>;
    model: Ref<T>;
    rules?: FormRules;
    gridProps?: GridProps;
    init(params: RenderFormInitParams): void;
    schema?: SchemaOption<keyof T>[];
    setModel<K extends keyof T>(key: K, value: T[K]): void;
}

export type RenderFormProvide<T> = InjectionKey<BaseRenderFormProvide<T>>;

export {};
