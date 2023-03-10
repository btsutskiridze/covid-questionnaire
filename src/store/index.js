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
  state() {
    return {
      dataToSubmit: {},
    };
  },
  mutations: {
    addData(state, payload) {
      state.dataToSubmit[payload.key] = payload.value;
    },
  },
  getters: {
    dataItem: (state) => (key) => {
      return state.dataToSubmit[key];
    },
  },
  actions: {
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
    async submitData(context) {
      try {
        const headers = {
          accept: "application/json",
          "Content-Type": "application/json",
        };
        fetch("https://covid19.devtest.ge/api/create", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(context.state.dataToSubmit),
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
