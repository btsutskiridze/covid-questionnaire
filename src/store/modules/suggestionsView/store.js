import store from "@/store";

export default {
  namespaced: true,
  state() {
    return {
      suggestionsValidated: false,
    };
  },

  mutations: {},
  actions: {
    validatefourthPage() {
      localStorage.setItem("suggestionsValidated", true);
    },
    collectData() {
      store.state.dataToSubmit["non_formal_meetings"] = getLocalStorage(
        "non_formal_meetings"
      );
      store.state.dataToSubmit["number_of_days_from_office"] = JSON.parse(
        getLocalStorage("number_of_days_from_office")
      );
      if (getLocalStorage("what_about_meetings_in_live"))
        store.state.dataToSubmit["what_about_meetings_in_live"] =
          getLocalStorage("what_about_meetings_in_live");

      if (getLocalStorage("tell_us_your_opinion_about_us"))
        store.state.dataToSubmit["tell_us_your_opinion_about_us"] =
          getLocalStorage("tell_us_your_opinion_about_us");
    },
  },
};

function getLocalStorage(value) {
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
