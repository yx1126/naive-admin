import { NFormItem, NFormItemGi, NSpace, NButton, type SpaceProps } from "naive-ui";
import type { PropType } from "vue";
import { formActionContext } from "../index";

export default defineComponent({
    name: "FormAction",
    inheritAttrs: false,
    __GRID_ITEM__: true, // NGrid 内部根据 __GRID_ITEM__ 来 来识别 NFormItemGi 组件
    props: {
        submitText: { type: String, default: "提 交" },
        resetText: { type: String, default: "重 置" },
        space: { type: Object as PropType<SpaceProps>, default: () => ({}) },
        loading: { type: Boolean, default: void 0 },
    },
    emits: ["submit", "reset"],
    setup(props, { emit }) {
        const formInject = inject(formActionContext);

        const load = computed(() => {
            const loading = unref(formInject?.loading) ?? false;
            return props.loading !== void 0 ? props.loading : loading;
        });

        function submit() {
            if(!formInject) return;
            formInject.validate((errors) => {
                if(errors) return;
                emit("submit");
            });
        }
        function reset() {
            if(formInject) formInject.reset();
            emit("reset");
        }

        return {
            formInject,
            grid: formInject!.grid,
            load,
            submit,
            reset,
        };
    },
    render() {
        const { grid, load, $attrs, submitText, resetText, space, submit, reset } = this;
        const FormItem = grid ? NFormItemGi : NFormItem;
        return (
            <FormItem path="" label=" " {...$attrs}>
                <NSpace {...space}>
                    <NButton loading={load} type="primary" onClick={submit}>{submitText}</NButton>
                    <NButton onClick={reset}>{resetText}</NButton>
                </NSpace>
            </FormItem>
        );
    },
});
