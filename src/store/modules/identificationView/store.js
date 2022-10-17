export default {
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
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
  },
};
