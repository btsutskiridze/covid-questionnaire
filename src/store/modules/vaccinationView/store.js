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
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
