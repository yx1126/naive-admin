import type { FormItemRule, FormValidationError, FormRules, GridProps } from "naive-ui";
import type { Ref } from "vue";
import FormRender from "./FormRender";

type FormRenderInstance = InstanceType<typeof FormRender> | null | undefined;

interface FormOptions<T> {
    data: () => T;
    gridProps?: GridProps;
}

function useForm<T extends object>(formInstance: Ref<FormRenderInstance>, options: FormOptions<T>) {
    const { data } = options;

    const formRef = $ref(formInstance);
    const formData = ref(data());

    function validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void> {
        return formRef!.nFormRef!.validate(validateCallback, shouldRuleBeApplied) as Promise<void>;
    }

    function restoreValidation() {
        formRef!.nFormRef!.restoreValidation();
    }

    function resetFields() {
        formData.value = data();
        restoreValidation();
    }

    return {
        model: formData,
        formInstance: shallowRef({
            validate,
            restoreValidation,
            resetFields,
        }),
    };
}

export {
    useForm,
    type FormRules,
    type FormRenderInstance,
};

export default FormRender;
