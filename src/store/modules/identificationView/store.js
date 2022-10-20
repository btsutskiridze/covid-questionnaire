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
      store.commit("addData", {
        key: "first_name",
        value: getLocalStorage("first_name"),
      });
      store.commit("addData", {
        key: "last_name",
        value: getLocalStorage("last_name"),
      });
      store.commit("addData", {
        key: "email",
        value: getLocalStorage("email"),
      });
    },
  },
};

function getLocalStorage(value) {
  console.log(localStorage.getItem(value));
  return localStorage.getItem(value) ? localStorage.getItem(value) : null;
}
