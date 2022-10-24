import store from "@/store";

export default {
  namespaced: true,
  state() {
    return {
      questionnaireValidated: false,
      hadCovid: false,
      hadAntibodyTest: null,
    };
  },

  mutations: {
    hadCovid(state, value) {
      state.hadCovid = value;
    },
    hadAntibodyTest(state, value) {
      state.hadAntibodyTest = value;
    },
  },
  actions: {
    setHadCovid(context, value) {
      context.commit("hadCovid", value);
    },
    setHadAntibodyTest(context, value) {
      context.commit("hadAntibodyTest", value);
    },
    validateSecondPage() {
      localStorage.setItem("questionnaireValidated", true);
    },
    dateValidation(_, value) {
      const inputDate = new Date(value); //taking input as date
      const minDate = new Date("2020-01-01").getTime(); //converting min data to millsec
      const maxDate = new Date().getTime(); //converting max data to millsec

      //comparing inputDate to limits
      if (
        inputDate.toDateString() === "Invalid Date" ||
        inputDate.getTime() < minDate ||
        inputDate.getTime() > maxDate
      ) {
        return "გთხოვთ მიუთითოთ სწორი თარიღი";
      } else {
        return true;
      }
    },
    collectData() {
      store.commit("addData", {
        key: "had_covid",
        value: getLocalStorage("had_covid"),
      });

      if (store.getters.dataItem("had_covid") === "yes") {
        store.commit("addData", {
          key: "had_antibody_test",
          value: JSON.parse(getLocalStorage("had_antibody_test")),
        });
      }

      if (store.getters.dataItem("had_antibody_test")) {
        store.commit("addData", {
          key: "antibodies",
          value: {
            test_date: new Date(getLocalStorage("test_date")).toISOString(),
            number: JSON.parse(getLocalStorage("number")),
          },
        });
      } else {
        store.commit("addData", {
          key: "covid_sickness_date",
          value: getLocalStorage("covid_sickness_date"),
        });
      }
    },
  },
};

function getLocalStorage(value) {
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
