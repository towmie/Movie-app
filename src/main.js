import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseSpinner from "./components/UI/BaseSpinner";

const app = createApp(App);

app.component("base-spinner", BaseSpinner);

app.use(store).use(router).mount("#app");
