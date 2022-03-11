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
        redirect: "/home/sub",
        children: [
            {
                path: "sub",
                name: "subHome",
                component: () => import("@/views/home-sub.vue"),
            },
        ],
    },
    {
        path: "/about",
        name: "About",
        redirect: "/about/sub",
        component: () => import("@/views/about.vue"),
        children: [
            {
                path: "sub",
                name: "subAbout",
                component: () => import("@/views/about-sub.vue"),
            },
        ],
    },
];

export default routes;
