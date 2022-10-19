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
    dataToSubmit: {},
  },

  actions: {
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
    addData(state, payload) {
      state.dataToSubmit[payload.key] = payload.value;
    },
    collectData(context) {
      console.log({ ...context.state.dataToSubmit });
    },
  },
});

export default store;
