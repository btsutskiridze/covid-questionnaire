export default {
  state() {
    return {
      vaccinationValidated: false,
      had_covid: "",
      had_antibody_test: "",
      test_date: "",
      number: "",
      covid_date: "",
    };
  },

  mutations: {},
  actions: {
    validateThirdPage() {
      localStorage.setItem("vaccinationValidated", true);
    },
  },
};
