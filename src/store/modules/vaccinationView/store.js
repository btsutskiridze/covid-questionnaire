export default {
  namespaced: true,
  state() {
    return {
      vaccinationValidated: false,
      had_vaccine: "",
      vaccination_stage: "",
      vaccination_stage_2: "",
    };
  },

  mutations: {},
  actions: {
    validateThirdPage() {
      localStorage.setItem("vaccinationValidated", true);
    },
    collectData(context) {
      context.state.had_vaccine = JSON.parse(getLocalStorage("had_vaccine"));
      context.state.vaccination_stage = getLocalStorage("vaccination_stage");
      context.state.vaccination_stage_2 = getLocalStorage(
        "vaccination_stage_2"
      );
    },
  },
};
function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
