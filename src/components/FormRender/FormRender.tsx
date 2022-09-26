import {
    NForm,
    NGrid,
    NFormItem,
    NFormItemGi,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NSpace,
    NInput,
    NInputNumber,
    NRadioGroup,
    NRadio,
    NDatePicker,
    NSelect,
    NSwitch,
    NTimePicker,
    type FormItemRule,
    type FormValidationError,
} from "naive-ui";
import { omit } from "@/util";
import { isFunction } from "@/util/validata";
import type { PropType, VNodeChild } from "vue";
import type { RenderFormProvide } from "./index";
import type { SchemaOption } from "./types";

const ComponentsMap = {
    cascader: NCascader,
    checkbox: NCheckbox,
    "checkbox-group": NCheckboxGroup,
    "date-picker": NDatePicker,
    input: NInput,
    "input-number": NInputNumber,
    radio: NRadio,
    "radio-group": NRadioGroup,
    select: NSelect,
    switch: NSwitch,
    "time-picker": NTimePicker,
};

const ComponentsOptionsMap = {
    "checkbox-group": NCheckbox,
    "radio-group": NRadio,
};

export default defineComponent({
    name: "FormRender",
    inheritAttrs: false,
    props: {
        model: { type: Object, default: void 0 },
        grid: { type: Boolean, default: false },
        cols: { type: [Number, String], default: 1 },
        collapsed: { type: Boolean, default: false },
        collapsedRows: { type: Number, default: 1 },
        responsive: { type: String as PropType<"self" | "screen">, default: "self" },
        itemResponsive: { type: Boolean, default: false },
        xGap: { type: [Number, String], default: 0 },
        yGap: { type: [Number, String], default: 0 },
        labelPlacement: { type: String as PropType<"left" | "top">, default: "left" },
        context: { type: Symbol as PropType<RenderFormProvide<Record<string, any>>>, default: Symbol("RenderForm") },
    },
    setup(props, { slots }) {

        const nFormRef = ref<InstanceType<typeof NForm> | null>(null);

        function validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void> {
            return nFormRef.value?.validate(validateCallback, shouldRuleBeApplied) as Promise<void>;
        }

        function restoreValidation() {
            nFormRef.value?.restoreValidation();
        }

        const formInject = inject(props.context);
        console.log("formInject", formInject);
        formInject!.init({
            validate,
            restoreValidation,
        });

        const gridProps = computed(() => {
            const { cols, collapsed, collapsedRows, responsive, itemResponsive, xGap, yGap } = props;
            return Object.assign(formInject?.gridProps || {}, {
                cols,
                collapsed,
                collapsedRows,
                responsive,
                itemResponsive,
                xGap,
                yGap,
            });
        });

        const schemaList = computed(() => formInject?.schema || []);

        function setModel(key: string, value: any) {
            if(!formInject?.setModel) return;
            formInject.setModel(key, value);
        }

        function renderFormItem(schema: SchemaOption<string>, model: Record<string, any>) {
            const path = schema.path;
            const componentType = schema.type || "input";
            const modelValue = model[path];
            const props: any = schema.props || {};
            const component = ComponentsMap[componentType];
            if(!component) {
                return renderSlot(slots, path);
            }
            let result: JSX.Element;
            if(["checkbox-group", "radio-group"].includes(componentType)) {
                const NextCom = ComponentsOptionsMap[componentType as keyof typeof ComponentsOptionsMap];
                result = (
                    <component value={modelValue} onUpdateValue={(value: boolean) => setModel(path, value)} {...props}>
                        <NSpace>
                            { renderList(props?.options || [], (item: any, i: number) => <NextCom {...item} key={i} />) }
                        </NSpace>
                    </component>
                );
            } else if(["checkbox", "radio"].includes(componentType)) {
                result = (
                    <component checked={modelValue} onUpdateChecked={(value: boolean) => setModel(path, value)} {...props} />
                );
            } else {
                result = (<component value={modelValue} onUpdateValue={(value: string) => setModel(path, value)} {...props} />);
            }
            return renderSlot(slots, path, {}, () => [result]);
        }

        function renderVNode(value?: string | (() => VNodeChild)) {
            return isFunction<() => VNodeChild>(value) ? value : () => value;
        }

        return {
            nFormRef,
            formInject,
            injectModel: formInject?.model || {},
            rules: formInject?.rules || {},
            gridProps,
            schemaList,
            renderFormItem,
            renderVNode,
        };
    },
    render() {
        const { model, injectModel, gridProps, rules, labelPlacement, $attrs, $slots, grid, schemaList, renderFormItem, renderVNode } = this;
        const defaultModel = model ?? injectModel;
        const FormItem = grid ? NFormItemGi : NFormItem;
        const defaultSlot = renderSlot($slots, "default", {}, () => {
            return renderList(schemaList, (schema, i) => {
                const formItemProps = omit(schema, "type,props,render,feedback,label");
                return (
                    <FormItem {...formItemProps} key={i}>{{
                        default: () => renderFormItem(schema, defaultModel),
                        feedback: renderVNode(schema.feedback),
                        label: renderVNode(schema.label),
                    }}</FormItem>
                );
            });
        });
        const NGridVNode = (<NGrid {...gridProps}>{defaultSlot}</NGrid>);
        return (
            <NForm
                ref="nFormRef"
                model={defaultModel}
                rules={rules}
                labelPlacement={labelPlacement}
                {...$attrs}
            >
                { grid ? NGridVNode : defaultSlot}
            </NForm>
        );
    },
});
