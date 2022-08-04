import type { ComponentInternalInstance } from "vue";

export default () => {
    return getCurrentInstance() as ComponentInternalInstance;
};
