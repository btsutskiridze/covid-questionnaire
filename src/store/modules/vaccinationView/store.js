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

  mutations: {},
  actions: {
    validateThirdPage() {
      localStorage.setItem("vaccinationValidated", true);
    },
    collectData() {
      store.state.dataToSubmit["had_vaccine"] = JSON.parse(
        getLocalStorage("had_vaccine")
      );

      if (store.state.dataToSubmit["had_vaccine"]) {
        store.state.dataToSubmit["vaccination_stage"] =
          getLocalStorage("vaccination_stage");
      } else {
        store.state.dataToSubmit["i_am_waiting"] = getLocalStorage(
          "vaccination_stage_2"
        );
      }
    },
  },
};
function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
