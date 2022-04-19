import { createRouter, createWebHistory } from "vue-router";
import { useLoadingBar } from "@/hooks/useFreeBack";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
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

export default router;
