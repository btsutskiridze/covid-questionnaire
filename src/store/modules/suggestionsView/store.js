export default {
  namespaced: true,
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
    collectData(context) {
      context.state.non_formal_meetings = getLocalStorage(
        "non_formal_meetings"
      );

      context.state.number_of_days_from_office = getLocalStorage(
        "number_of_days_from_office"
      );
      context.state.what_about_meetings_in_live = getLocalStorage(
        "what_about_meetings_in_live"
      );

      context.state.tell_us_your_opinion_about_us = getLocalStorage(
        "tell_us_your_opinion_about_us"
      );
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
