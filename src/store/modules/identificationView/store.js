export default {
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      inputValue: "",
    };
  },
  actions: {
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
  },
};
