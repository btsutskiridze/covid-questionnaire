import { createStore } from "vuex";
import identificationViewModule from "@/store/modules/identificationView";
const store = createStore({
  modules: {
    identificationViewModule,
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
      this.state.identificationValidated = true;
      console.log({ ...context.state["dataToSubmit"] });
    },
  },
});

export default store;
