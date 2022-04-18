import { createApp } from "vue";
import Pinia from "@/stores";
import Router from "@/router";
import Locales from "@/locales";
import App from "./App.vue";
import "@/style/index.scss";

const app = createApp(App);

app.use(Pinia);
app.use(Router);
app.use(Locales);

app.mount("#app");
