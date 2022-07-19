import Message from "./Message.vue";
import { createVNode, render } from "vue";

const instance = createVNode(Message, { value: 10 });

function useMessage() {
    const div = document.createElement("div");
    render(instance, div);
    document.querySelector("body")?.appendChild(div as any);
}
export { useMessage };
