import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseRadioQuestion from "./components/UI/BaseRadioQuestion.vue";
import BaseQuestionsLayout from "./components/UI/BaseQuestionsLayout.vue";
import NextArrowIcon from "./components/icons/NextArrowIcon.vue";
import PreviousArrowIcon from "./components/icons/PreviousArrowIcon.vue";

import "./index.css";

const app = createApp(App);

app.component("BaseContainer", BaseContainer);
app.component("BaseQuestionsLayout", BaseQuestionsLayout);
app.component("NextArrowIcon", NextArrowIcon);
app.component("PreviousArrowIcon", PreviousArrowIcon);
app.component("BaseRadioQuestion", BaseRadioQuestion);

app.use(router);

app.mount("#app");
