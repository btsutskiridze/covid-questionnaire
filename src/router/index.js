import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import WelcomeView from "@/views/WelcomeView.vue";
import IdentificationView from "@/views/identification/IndexView.vue";
import CovidQuestionnaireView from "@/views/questionnaire/IndexView.vue";
import VaccinationView from "@/views/vaccination/IndexView.vue";
import SuggestionsView from "@/views/suggestions/IndexView.vue";
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
      path: "/thank-you",
      name: "thank-you",
      component: EndView,
      beforeEnter: (to, from, next) => {
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
        store.state.suggestionsValidated = JSON.parse(
          localStorage.getItem("suggestionsValidated")
        );
        const pagesValid =
          store.state.questionnaireValidated &&
          store.state.identificationValidated &&
          store.state.vaccinationValidated &&
          store.state.suggestionsValidated;

        if (pagesValid) {
          next();
          return;
        }
        next("/suggestions");
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/" },
  ],
});

export default router;
