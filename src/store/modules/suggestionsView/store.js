export default {
  state() {
    return {
      suggestionsValidated: false,
      non_formal_meetings: "",
      number_of_days_from_office: "",
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },

  mutations: {},
  actions: {
    validatefourthPage() {
      localStorage.setItem("suggestionsValidated", true);
    },
  },
};
