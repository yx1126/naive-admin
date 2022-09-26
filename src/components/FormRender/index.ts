import FormRender from "./FormRender";
import useForm from "./hooks/useForm";






type FormRenderInstance = InstanceType<typeof FormRender> | null | undefined;

export {
    useForm,
    type FormRenderInstance,
};

export * from "./types";

export default FormRender;
