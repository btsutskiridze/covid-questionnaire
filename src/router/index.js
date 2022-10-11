import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "../views/WelcomeView.vue";
import IdentificationView from "../views/IdentificationView.vue";
import CovidQuestionnaireView from "../views/CovidQuestionnaireView.vue";
import VaccinationView from "../views/VaccinationView.vue";
import SuggestionsView from "../views/SuggestionsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
    },
    {
      path: "/identification",
      name: "identification",
      component: IdentificationView,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: CovidQuestionnaireView,
    },
    {
      path: "/vaccination",
      name: "vaccination",
      component: VaccinationView,
    },
    {
      path: "/suggestions",
      name: "suggestions",
      component: SuggestionsView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/" },
  ],
});

export default router;
