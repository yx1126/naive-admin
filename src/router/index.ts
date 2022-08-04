import { createRouter, createWebHistory } from "vue-router";
import { useFreeBack, useTitle } from "@/hooks";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    scrollBehavior() {
        return {
            top: 0,
            left: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    const loadingbar = useFreeBack("loadingbar");
    const title = useTitle(null, `%s-${import.meta.env.VITE_APP_TITLE}`);
    title.value = to.matched.map(r => r.meta.title).filter(v => v).reverse().join("-");
    loadingbar.start();
    next();
});

router.afterEach(() => {
    const loadingbar = useFreeBack("loadingbar");
    loadingbar.finish();
});

router.onError(error => {
    console.error("路由错误", error);
});

export default router;
