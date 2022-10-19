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

  mutations: {},
  actions: {
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
      store.state.dataToSubmit["had_covid"] = getLocalStorage("had_covid");

      if (store.state.dataToSubmit["had_covid"] === "yes") {
        store.state.dataToSubmit["had_antibody_test"] = getLocalStorage(
          "had_antibody_test"
        )
          ? true
          : false;
      }

      if (store.state.dataToSubmit["had_antibody_test"]) {
        store.state.dataToSubmit["antibodies"] = {
          test_date: new Date(getLocalStorage("test_date")).toISOString(),
          number: JSON.parse(getLocalStorage("number")),
        };
      } else {
        store.state.dataToSubmit["covid_date"] = new Date(
          getLocalStorage("covid_date")
        ).toISOString();
      }
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
