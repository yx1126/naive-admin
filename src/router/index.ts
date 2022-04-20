import { createRouter, createWebHistory } from "vue-router";
import { useLoadingBar } from "@/hooks/useFreeBack";
import menus from "@/assets/menu";
import { getRoutesByMenu } from "@/util/menus";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "",
            redirect: "/dashboard/console",
        },
        ...getRoutesByMenu(menus),
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
    const loadingbar = useLoadingBar();
    loadingbar.start();
    next();
});

router.afterEach(() => {
    const loadingbar = useLoadingBar();
    loadingbar.finish();
});

router.onError(error => {
    console.error("路由错误", error);
});

export default router;
