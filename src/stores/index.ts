import { createPinia } from "pinia";

import createVuePinia from "./plugins/vuex-pinia";

const pinia = createPinia();

pinia.use(
    createVuePinia({
        separate: false,
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

export default pinia;
