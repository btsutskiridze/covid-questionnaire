import { createStore } from "vuex";
import identificationViewModule from "@/store/modules/identificationView/store.js";
import questionnaireViewModule from "@/store/modules/questionnaireView/store.js";
const store = createStore({
  modules: {
    identificationViewModule,
    questionnaireViewModule,
  },
  state: {
    vaccinationValidated: false,
    suggestionsValidated: false,
    dataToSubmit: {},
  },
  mutations: {},
  actions: {},
});

export default store;
