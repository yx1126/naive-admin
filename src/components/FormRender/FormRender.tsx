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
    type GridProps,
} from "naive-ui";
import { omit } from "@/util";
import { isFunction, isBoolean } from "@/util/validata";
import type { PropType, VNodeChild } from "vue";
import { formActionContext, type RenderFormProvide } from "./index";
import type { SchemaOption, BaseSchemaOption } from "./types";

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
        schema: { type: Array as PropType<Array<SchemaOption>>, default: () => [] },
        grid: { type: [Boolean, Object] as PropType<GridProps | boolean>, default: false },
        labelPlacement: { type: String as PropType<"left" | "top">, default: "left" },
        context: { type: Symbol as PropType<RenderFormProvide<Record<string, any>>>, default: Symbol("RenderForm") },
    },
    setup(props, { slots }) {

        const nFormRef = ref<InstanceType<typeof NForm> | null>(null);

        const formInject = inject(props.context);

        const gridProps = computed(() => {
            const { grid } = props;
            return isBoolean(grid) ? {} : grid;
        });
        const isShowGrid = computed(() => !!props.grid);

        if(formInject) {
            formInject.init({
                validate,
                restoreValidation,
            });
        }

        provide(formActionContext, {
            grid: isShowGrid,
            loading: computed(() => unref(formInject?.loading)),
            reset: formInject?.resetFields,
            validate,
        });

        function validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void> {
            return nFormRef.value?.validate(validateCallback, shouldRuleBeApplied) as Promise<void>;
        }

        function restoreValidation() {
            nFormRef.value?.restoreValidation();
        }

        function setModel(key: string, value: any) {
            if(!formInject?.setModel) return;
            formInject.setModel(key, value);
        }

        function renderFormItem(schema: BaseSchemaOption, model: Record<string, any>) {
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
            gridProps,
            isShowGrid,
            renderFormItem,
            renderVNode,
        };
    },
    render() {
        const { $attrs, $slots, model, injectModel, isShowGrid, gridProps, labelPlacement, schema, renderFormItem, renderVNode } = this;
        const defaultModel = model ?? injectModel;
        const FormItem = isShowGrid ? NFormItemGi : NFormItem;
        const defaultSlot = renderSlot($slots, "default", {}, () => {
            return renderList(schema, (item, i) => {
                const formItemProps = omit(item, "type,props,render,feedback,label");
                return (
                    <FormItem {...formItemProps} key={i}>
                        {{
                            default: () => renderFormItem(item, defaultModel),
                            feedback: renderVNode(item.feedback),
                            label: renderVNode(item.label),
                        }}
                    </FormItem>
                );
            });
        });
        const NGridVNode = (
            <NGrid {...gridProps}>
                {defaultSlot}
                {renderSlot($slots, "action")}
            </NGrid>
        );
        return (
            <NForm
                ref="nFormRef"
                model={defaultModel}
                labelPlacement={labelPlacement}
                {...$attrs}
            >
                {isShowGrid ? NGridVNode : defaultSlot}
                {isShowGrid ? null : renderSlot($slots, "action")}
            </NForm>
        );
    },
});
