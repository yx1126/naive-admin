import SvgIcon from "./SvgIcon.vue";

import type { App } from "vue";

SvgIcon.install = (app: App) => {
    app.component(SvgIcon.name, SvgIcon);
};

export default SvgIcon;
