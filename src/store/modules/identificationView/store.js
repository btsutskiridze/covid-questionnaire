export default {
  state: {
    firstname: "",
    lastname: "",
    email: "",
    inputValue: "",
  },
  actions: {
    saveData(context, payload) {
      localStorage.setItem(payload.key, payload.value);
    },
  },
};
