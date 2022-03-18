import { createPinia } from "pinia";

import createVuePinia from "./plugins/vuex-pinia";

const pinia = createPinia();

pinia.use(
    createVuePinia({
        reducer: state => {
            return {
                menu: {
                    count: state.menu?.count,
                    menu: state.menu?.menu,
                },
                user: {
                    info: state.user?.info,
                    count: state.user?.count,
                },
            };
        },
    }),
);
pinia.use(
    createVuePinia({
        stroage: window.sessionStorage,
        reducer: state => {
            return {
                set: {
                    drawerStatus: state.set?.drawerStatus,
                },
            };
        },
    }),
);

export default pinia;
