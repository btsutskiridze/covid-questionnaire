import store from "@/store";

export default {
  namespaced: true,
  state() {
    return {
      suggestionsValidated: false,
    };
  },

  actions: {
    validatefourthPage() {
      localStorage.setItem("suggestionsValidated", true);
    },
    collectData() {
      store.commit("addData", {
        key: "non_formal_meetings",
        value: getLocalStorage("non_formal_meetings"),
      });

      store.commit("addData", {
        key: "number_of_days_from_office",
        value: getLocalStorage("number_of_days_from_office"),
      });

      if (getLocalStorage("what_about_meetings_in_live")) {
        store.commit("addData", {
          key: "what_about_meetings_in_live",
          value: getLocalStorage("what_about_meetings_in_live"),
        });
      }

      if (getLocalStorage("tell_us_your_opinion_about_us")) {
        store.commit("addData", {
          key: "tell_us_your_opinion_about_us",
          value: getLocalStorage("tell_us_your_opinion_about_us"),
        });
      }
    },
  },
};

function getLocalStorage(value) {
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
