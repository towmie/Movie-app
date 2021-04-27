import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseSpinner from "./components/UI/BaseSpinner";
import BaseNotification from "./components/UI/BaseNotification";
import BaseForm from "./components/UI/BaseForm";

const app = createApp(App);

app.component("base-spinner", BaseSpinner);
app.component("base-motification", BaseNotification);
app.component("base-form", BaseForm);

app.use(store).use(router).mount("#app");
