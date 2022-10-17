import { createStore } from "vuex";
import identificationViewModule from "@/store/modules/identificationView";
import questionnaireViewModule from "@/store/modules/questionnaireView";
const store = createStore({
  modules: {
    identificationViewModule,
    questionnaireViewModule,
  },
  state: {
    identificationValidated: false,
    questionnaireValidated: false,
    vaccinationValidated: false,
    suggestionsValidated: false,
    dataToSubmit: {},
  },
  mutations: {},
  actions: {
    validateFirstPage() {
      localStorage.setItem("identificationValidated", true);
    },
  },
});

export default store;
