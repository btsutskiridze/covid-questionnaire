export default {
  namespaced: true,
  state() {
    return {
      identificationValidated: false,

      first_name: "",
      last_name: "",
      email: "",
      inputValue: "",
    };
  },
  actions: {
    validateFirstPage() {
      localStorage.setItem("identificationValidated", true);
    },

    collectData(context) {
      context.state.first_name = getLocalStorage("first_name");
      context.state.last_name = getLocalStorage("last_name");
      context.state.email = getLocalStorage("email");
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
