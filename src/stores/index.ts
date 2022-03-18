import { createPinia } from "pinia";

import createVuePinia from "./plugins/vuex-pinia";
// import createVuePinia from "vue-pinia-store";

import type { MenuState } from "./menu";
import type { SetState } from "./setting";
import type { UserState } from "./user";

const pinia = createPinia();

interface RootState {
    menu: MenuState;
    set: SetState;
    user: UserState;
}

pinia.use(
    createVuePinia<RootState>({
        separate: true,
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
    createVuePinia<RootState>({
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
