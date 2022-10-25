import store from "@/store";

export default {
  namespaced: true,
  state() {
    return {
      vaccinationValidated: false,
      hadVaccine: null,
      onlyFirstVaccine: false,
      notPlanningVaccine: false,
      planningVaccine: false,
    };
  },
  mutations: {
    hadVaccine(state, value) {
      state.hadVaccine = value;
    },
    onlyFirstVaccine(state, value) {
      state.onlyFirstVaccine = value;
    },
    notPlanningVaccine(state, value) {
      state.notPlanningVaccine = value;
    },
    planningVaccine(state, value) {
      state.planningVaccine = value;
    },
  },
  actions: {
    setHadVaccine(context, value) {
      context.commit("hadVaccine", value);
    },
    setOnlyFirstVaccine(context, value) {
      context.commit("onlyFirstVaccine", value);
    },
    setNotPlanningVaccine(context, value) {
      context.commit("notPlanningVaccine", value);
    },
    setPlanningVaccine(context, value) {
      context.commit("planningVaccine", value);
    },

    validateThirdPage() {
      localStorage.setItem("vaccinationValidated", true);
    },
    collectData() {
      store.commit("addData", {
        key: "had_vaccine",
        value: JSON.parse(getLocalStorage("had_vaccine")),
      });

      if (store.getters.dataItem("had_vaccine")) {
        store.commit("addData", {
          key: "vaccination_stage",
          value: getLocalStorage("vaccination_stage"),
        });
      } else {
        store.commit("addData", {
          key: "i_am_waiting",
          value: getLocalStorage("vaccination_stage_2"),
        });
      }
    },
  },
};
function getLocalStorage(value) {
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
