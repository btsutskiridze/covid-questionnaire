import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseContainer from "./components/UI/BaseContainer.vue";

import "./index.css";

const app = createApp(App);

app.component("BaseContainer", BaseContainer);
app.use(router);

app.mount("#app");
