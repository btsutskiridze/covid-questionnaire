import { createStore } from "vuex";
import identificationViewModule from "@/store/modules/identificationView/store.js";
import questionnaireViewModule from "@/store/modules/questionnaireView/store.js";
import vaccinationViewModule from "@/store/modules/vaccinationView/store.js";
const store = createStore({
  modules: {
    identificationViewModule,
    questionnaireViewModule,
    vaccinationViewModule,
  },
  state: {},
  mutations: {},
  actions: {},
});

export default store;
