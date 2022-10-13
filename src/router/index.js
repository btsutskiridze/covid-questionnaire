import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import WelcomeView from "@/views/WelcomeView.vue";
import IdentificationView from "@/views/IdentificationView.vue";
import CovidQuestionnaireView from "@/views/CovidQuestionnaireView.vue";
import VaccinationView from "@/views/VaccinationView.vue";
import SuggestionsView from "@/views/SuggestionsView.vue";
import EndView from "@/views/EndView.vue";
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
      beforeEnter: (to, from, next) => {
        console.log(store.state.identificationValidated);
        if (store.state.identificationValidated) {
          next();
          return;
        }
        next("/identification");
      },
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
    {
      path: "/thankyou",
      name: "thankyou",
      component: EndView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/" },
  ],
});

export default router;
