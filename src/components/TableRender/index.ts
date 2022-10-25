import TableRender from "./TableRender.vue";
import TableTool from "./components/TableTool.vue";
import createInjectionKey from "@/util/create-key";
import type { TableToolProvide } from "./types";

export * from "./types";


export const tableToolContext = createInjectionKey<TableToolProvide>("TableTool");

export {
    TableTool,
};

export default TableRender;
