import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.css";
import router from "./router";
import pinia from "./plugins/pinia";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import Maska from "maska";
import i18n from "@/plugins/i18n";

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Toast);
app.use(Maska);
app.use(i18n);
app.use(VueApexCharts);

app.mount("#app");
