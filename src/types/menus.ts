import { pick } from "lodash";

export interface Menu {
    label: string;
    path: string;
    name: string;
    component: string | null;
    children?: Menu[];
}
pick
export {};
