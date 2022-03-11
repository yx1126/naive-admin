import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home",
    },
    // {
    //     path: "/",
    //     name: "home",
    //     component: () => import("@/Layout/index.vue"),
    //     children: [],
    // },
    {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home.vue"),
        children: [],
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/about.vue"),
        children: [],
    },
];

export default routes;
