import { createRouter, createWebHistory } from "vue-router";
import useMitt from "@hooks/use-mitt";
import routes from "./routes";

const mitt = useMitt();

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    mitt.emit("loadingbar:start");
    next();
});

router.afterEach(() => {
    mitt.emit("loadingbar:finish");
});

export default router;
