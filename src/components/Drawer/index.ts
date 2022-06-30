import Drawer from "./Drawer.vue";

import type { App } from "vue";

Drawer.install = (app: App) => {
    app.component(Drawer.name, Drawer);
};
export default Drawer;
