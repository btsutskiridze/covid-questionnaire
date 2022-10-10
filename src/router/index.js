import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "../views/WelcomeView.vue";
import IdentificationView from "../views/IdentificationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
    },
    {
      path: "/identification",
      name: "identification",
      component: IdentificationView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/" },
  ],
});

export default router;
