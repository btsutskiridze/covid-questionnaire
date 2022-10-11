import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseQuestionLayout from "./components/UI/BaseQuestionLayout.vue";
import BaseQuestionsContainer from "./components/UI/BaseQuestionsContainer.vue";
import NextArrowIcon from "./components/icons/NextArrowIcon.vue";
import PreviousArrowIcon from "./components/icons/PreviousArrowIcon.vue";

import "./index.css";

const app = createApp(App);

app.component("BaseContainer", BaseContainer);
app.component("BaseQuestionsContainer", BaseQuestionsContainer);
app.component("NextArrowIcon", NextArrowIcon);
app.component("PreviousArrowIcon", PreviousArrowIcon);
app.component("BaseQuestionLayout", BaseQuestionLayout);

app.use(router);

app.mount("#app");
