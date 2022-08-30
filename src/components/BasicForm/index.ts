import type { FormItemRule, FormValidationError, FormRules } from "naive-ui";
import type { Ref } from "vue";
import BasicForm from "./BasicForm";

type BasicFormInstance = InstanceType<typeof BasicForm> | null | undefined;

export function useForm<T extends object>(formInstance: Ref<BasicFormInstance>, form: () => T) {
    const formRef = $ref(formInstance);
    let formData = reactive(form());

    function validate(validateCallback?: (errors?: Array<FormValidationError>) => void, shouldRuleBeApplied?: (rule: FormItemRule) => boolean): Promise<void> {
        return formRef!.nFormRef!.validate(validateCallback, shouldRuleBeApplied) as Promise<void>;
    }

    function restoreValidation() {
        formRef!.nFormRef!.restoreValidation();
    }

    function resetFields() {
        formData = Object.assign(formData, form());
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

export type {
    FormRules,
    BasicFormInstance,
};

export default BasicForm;
