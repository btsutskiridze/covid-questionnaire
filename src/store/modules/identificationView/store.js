import store from "@/store";

export default {
  namespaced: true,
  state() {
    return {
      identificationValidated: false,
    };
  },
  actions: {
    validateFirstPage() {
      localStorage.setItem("identificationValidated", true);
    },

    collectData() {
      store.state.dataToSubmit["first_name"] = getLocalStorage("first_name");
      store.state.dataToSubmit["last_name"] = getLocalStorage("last_name");
      store.state.dataToSubmit["email"] = getLocalStorage("email");
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
