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
        const response = await fetch("https://covid19.devtest.ge/api/create", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(context.state.dataToSubmit),
        });
        const data = await response;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log(JSON.parse(JSON.stringify(context.state.dataToSubmit)));
    },
  },
});

export default store;
