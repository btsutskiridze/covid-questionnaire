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
  mutations: {
    addData(state, payload) {
      state.dataToSubmit[payload.key] = payload.value;
    },
  },
  actions: {
    validateFirstPage(context) {
      localStorage.setItem("identificationValidated", true);
      console.log({ ...context.state["dataToSubmit"] });
    },
  },
});

export default store;
