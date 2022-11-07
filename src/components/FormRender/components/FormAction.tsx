import { NFormItem, NFormItemGi, NSpace, NButton, type SpaceProps } from "naive-ui";
import { formActionContext } from "../index";

export default defineComponent({
    name: "FormAction",
    inheritAttrs: false,
    __GRID_ITEM__: true,
    props: {
        submitText: { type: String, default: "提 交" },
        resetText: { type: String, default: "重 置" },
        space: { type: Object as PropType<SpaceProps>, default: () => ({}) },
        loading: { type: Boolean, default: void 0 },
    },
    emits: ["submit", "error", "reset"],
    setup(props, { emit }) {
        const formInject = inject(formActionContext)!;
        if(!formInject) {
            throw new Error("[FormRedner/FormAction]：`FormAction` must be placed in `FormRedner`");
        }

        const load = computed(() => {
            if(props.loading !== void 0) return props.loading;
            return unref(formInject?.loading) ?? false;
        });

        function submit() {
            formInject.validate((errors) => {
                if(errors) {
                    emit("error", errors);
                    return;
                }
                emit("submit");
            });
        }
        function reset() {
            if(formInject.reset)
                formInject.reset();
            emit("reset");
        }

        return {
            formInject,
            grid: formInject.grid,
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
