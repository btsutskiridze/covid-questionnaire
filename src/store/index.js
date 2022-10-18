import { createStore } from "vuex";
import identificationViewModule from "@/store/modules/identificationView/store.js";
import questionnaireViewModule from "@/store/modules/questionnaireView/store.js";
import vaccinationViewModule from "@/store/modules/vaccinationView/store.js";
import suggestionsViewModule from "@/store/modules/suggestionsView/store.js";
const store = createStore({
  modules: {
    identification: identificationViewModule,
    questionnaire: questionnaireViewModule,
    vaccination: vaccinationViewModule,
    suggestions: suggestionsViewModule,
  },

  actions: {
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
    collectData(context) {
      const dataToSubmit = {
        first_name: context.state.identification.first_name,
        last_name: context.state.identification.last_name,
        email: context.state.identification.email,
        had_covid: context.state.questionnaire.had_covid,
        had_antibody_test: context.state.questionnaire.had_antibody_test,
        ...(context.state.questionnaire.had_covid === "yes" && {
          had_antibody_test: context.state.questionnaire.had_antibody_test,
        }),
        ...(context.state.questionnaire.had_antibody_test && {
          antibodies: {
            test_date: context.state.questionnaire.test_date,
            number: context.state.questionnaire.number,
          },
        }),
        ...(!context.state.questionnaire.had_antibody_test && {
          covid_date: context.state.questionnaire.covid_date,
        }),
        had_vaccine: context.state.vaccination.had_vaccine,
        ...(context.state.vaccination.had_vaccine && {
          vaccination_stage: context.state.vaccination.vaccination_stage,
        }),
        ...(!context.state.vaccination.had_vaccine && {
          vaccination_stage: context.state.vaccination.vaccination_stage_2,
        }),
        non_formal_meetings: context.state.suggestions.non_formal_meetings,
        number_of_days_from_office:
          context.state.suggestions.number_of_days_from_office,
        what_about_meetings_in_live:
          context.state.suggestions.what_about_meetings_in_live,
        tell_us_your_opinion_about_us:
          context.state.suggestions.tell_us_your_opinion_about_us,
      };
      console.log(dataToSubmit);
    },
  },
});

export default store;
