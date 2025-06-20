import { createRouter, createWebHistory } from "vue-router";    // import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Test.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
