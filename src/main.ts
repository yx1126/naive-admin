import { createApp } from "vue";
import Pinia from "@/stores";
import Router from "@/router";
import Locales from "@/locales";
import Directive from "@/directive";
import App from "./App.vue";
import "@/style/index.scss";
import "virtual:svg-icons-register";
import "uno.css";
import PortalVue from "portal-vue";

const app = createApp(App);
app.use(Pinia);
app.use(Router);
app.use(Locales);
app.use(Directive);
app.use(PortalVue);


Router.isReady().then(() => {
    console.log("ready");
});


app.mount("#app");
