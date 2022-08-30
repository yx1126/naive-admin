import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

const history = import.meta.env.MODE === "production" ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(import.meta.env.BASE_URL);

const router = createRouter({
    history,
    routes: routes,
    scrollBehavior() {
        return {
            top: 0,
            left: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    const loadingbar = useFeedBack("loadingbar");
    const title = useTitle(null, `%s-${import.meta.env.VITE_APP_TITLE}`);
    title.value = to.matched.map(r => r.meta.title).filter(v => v).reverse().join("-");
    loadingbar.start();
    next();
});

router.afterEach(() => {
    const loadingbar = useFeedBack("loadingbar");
    loadingbar.finish();
});

router.onError(error => {
    console.error("路由错误", error);
});

export default router;
