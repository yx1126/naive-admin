import { createRouter, createWebHistory } from "vue-router";
import useMitt from "@hooks/use-mitt";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const mitt = useMitt();
    mitt.emit("load:start");
    next();
});

router.afterEach(() => {
    const mitt = useMitt();
    mitt.emit("load:finish");
});

export default router;
