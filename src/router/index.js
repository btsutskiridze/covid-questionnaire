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
      beforeEnter: () => {
        localStorage.setItem("identificationValidated", false);
      },
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: CovidQuestionnaireView,
      beforeEnter: (to, from, next) => {
        localStorage.setItem("questionnaireValidated", false);

        store.state.identificationValidated = JSON.parse(
          localStorage.getItem("identificationValidated")
        );

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
      beforeEnter: (to, from, next) => {
        localStorage.setItem("vaccinationValidated", false);
        //retriving values from storage
        store.state.identificationValidated = JSON.parse(
          localStorage.getItem("identificationValidated")
        );
        store.state.questionnaireValidated = JSON.parse(
          localStorage.getItem("questionnaireValidated")
        );

        const pagesValid =
          store.state.questionnaireValidated &&
          store.state.identificationValidated;

        if (pagesValid) {
          next();
          return;
        }
        next("/questionnaire");
      },
    },
    {
      path: "/suggestions",
      name: "suggestions",
      component: SuggestionsView,
      beforeEnter: (to, from, next) => {
        localStorage.setItem("suggestionsValidated", false);

        //retriving values from storage
        store.state.identificationValidated = JSON.parse(
          localStorage.getItem("identificationValidated")
        );
        store.state.questionnaireValidated = JSON.parse(
          localStorage.getItem("questionnaireValidated")
        );
        store.state.vaccinationValidated = JSON.parse(
          localStorage.getItem("vaccinationValidated")
        );

        const pagesValid =
          store.state.questionnaireValidated &&
          store.state.identificationValidated &&
          store.state.vaccinationValidated;

        if (pagesValid) {
          next();
          return;
        }
        next("/questionnaire");
      },
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
