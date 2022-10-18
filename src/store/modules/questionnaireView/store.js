export default {
  namespaced: true,
  state() {
    return {
      questionnaireValidated: false,
      had_covid: "",
      had_antibody_test: "",
      test_date: "",
      number: "",
      covid_date: "",
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
    collectData(context) {
      context.state.had_covid = getLocalStorage("had_covid");
      context.state.had_antibody_test = getLocalStorage("had_antibody_test")
        ? true
        : false;
      context.state.test_date = getLocalStorage("test_date");
      context.state.number = getLocalStorage("number");
      context.state.covid_date = getLocalStorage("covid_date");
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
