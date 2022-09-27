import FormRender from "./FormRender";
import useForm from "./hooks/useForm";
import FormAction from "./components/FormAction";
import type { FormActionProvide } from "./types";


import createInjectionKey from "@/util/create-key";

export const formActionContext = createInjectionKey<FormActionProvide>("FormActions");



type FormRenderInstance = InstanceType<typeof FormRender> | null | undefined;

export {
    useForm,
    type FormRenderInstance,
};

export * from "./types";

export {
    FormAction,
};

export default FormRender;
