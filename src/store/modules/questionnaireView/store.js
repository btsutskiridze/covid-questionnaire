export default {
  state() {
    return {
      had_covid: "",
      had_antibody_test: "",
      test_date: "",
      number: "",
      covid_date: "",
    };
  },

  mutations: {},
  actions: {
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
  },
};
