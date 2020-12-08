import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../pages/Store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Store",
    component: Store,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
