import {
    NForm,
    NGrid,
    NFormItem,
    NFormItemGi,
    NSpace,
    type FormItemRule,
    type FormValidationError,
    type GridProps,
} from "naive-ui";
import { omit } from "@/util";
import { isFunction, isBoolean } from "@/util/validata";
import type { VNodeChild } from "vue";
import { formActionContext, ComponentsMap, ComponentsOptionsMap, HasChildrenComponents, NeedSpaceMap, type RenderFormProvide } from "./index";
import type { SchemaOption, FormSchema } from "./types";


export default defineComponent({
    name: "FormRender",
    inheritAttrs: false,
    props: {
        model: { type: Object, default: void 0 },
        schema: { type: Array as PropType<Array<FormSchema>>, default: () => [] },
        grid: { type: [Boolean, Object] as PropType<GridProps | boolean>, default: false },
        labelPlacement: { type: String as PropType<"left" | "top">, default: "left" },
        displayDirective: { type: String as PropType<"show" | "if">, default: "show" },
        context: { type: Symbol as PropType<RenderFormProvide<Record<string, any>>>, default: Symbol("RenderForm") },
        showColon: { type: Boolean, default: false },
    },
    setup(props, { slots }) {

        const nFormRef = ref<InstanceType<typeof NForm> | null>(null);

        const formInject = inject(props.context, null);

        const gridProps = computed(() => {
            const { grid } = props;
            return isBoolean(grid) ? {} : grid;
        });
        const isShowGrid = computed(() => !!props.grid);

        const schemaList = computed(() => {
            return props.schema.filter(s => {
                const show = s.show ?? true;
                const display = s.displayDirective || props.displayDirective;
                return show || display !== "if";
            });
        });

        formInject?.init({
            validate,
            restoreValidation,
        });

        provide(formActionContext, reactive({
            grid: isShowGrid,
            loading: formInject?.loading,
            reset: formInject?.resetFields,
            validate,
        }));

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

        function renderFormItem(schema: SchemaOption, model: Record<string, any>) {
            const { render, path, slot, props = {}, type = "input" } = schema;
            // render
            if(render) return render();
            // path 为空 渲染插槽
            if(!path) return slot ? renderSlot(slots, slot) : null;
            const slotName = slot ?? path;
            const modelValue = model[path];
            const component = ComponentsMap[type];
            // component 组件不存在 渲染插槽
            if(!component) return renderSlot(slots, slotName);
            let result: JSX.Element;
            if(HasChildrenComponents.includes(type)) {
                const GroupItem = ComponentsOptionsMap[type as keyof typeof ComponentsOptionsMap];
                const resultChilds = renderList((props as any).options || [], (item: any, i: number) => <GroupItem {...item} key={i} />);
                result = (
                    <component value={modelValue} onUpdateValue={(value: boolean) => setModel(path, value)} {...props}>
                        { NeedSpaceMap.includes(type) ? <NSpace>{resultChilds}</NSpace> : resultChilds }
                    </component>
                );
            } else {
                result = (<component value={modelValue} onUpdateValue={(value: string) => setModel(path, value)} {...props} />);
            }
            return renderSlot(slots, slotName, {}, () => [result]);
        }

        function renderVNode(value?: string | (() => VNodeChild)) {
            return isFunction<() => VNodeChild>(value) ? value : () => value;
        }

        return {
            nFormRef,
            formInject,
            schemaList,
            injectModel: formInject?.model || {},
            gridProps,
            isShowGrid,
            renderFormItem,
            renderVNode,
        };
    },
    render() {
        const { $attrs, $slots, model, injectModel, isShowGrid, gridProps, labelPlacement, schemaList, renderFormItem, renderVNode, showColon } = this;
        const defaultModel = model ?? injectModel;
        const FormItem = isShowGrid ? NFormItemGi : NFormItem;
        const defaultSlot = renderSlot($slots, "default", {}, () => {
            return renderList(schemaList, (item, i) => {
                const formItemProps = omit(item, ["type", "props", "render", "feedback", "label", "slot", "show", "displayDirective"]);
                return (
                    <FormItem {...formItemProps as any} key={i} v-show={item.show ?? true}>
                        {{
                            default: () => renderFormItem(item, defaultModel),
                            feedback: renderVNode(item.feedback),
                            label: () => [renderVNode(item.label)(), showColon ? "：" : null],
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
                {isShowGrid ? NGridVNode : [defaultSlot, renderSlot($slots, "action")]}
            </NForm>
        );
    },
});
