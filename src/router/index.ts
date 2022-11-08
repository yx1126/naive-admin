import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

const baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
    history: import.meta.env.MODE === "production" ? createWebHistory(baseUrl) : createWebHashHistory(baseUrl),
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

router.afterEach((to) => {
    const loadingbar = useFeedBack("loadingbar");
    if(!to.path.startsWith("/redirect")) {
        loadingbar.finish();
    }
});

router.onError(error => {
    const loadingbar = useFeedBack("loadingbar");
    loadingbar.error();
    console.error("路由错误", error);
});

export default router;
