import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PRV2 from "../views/PRV2.vue";
import dataCell from "../views/dataCell.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/PRV2",
    name: "PRV2",
    component: PRV2
  },
  {
    path: "/dataCell",
    name: "dataCell",
    component: dataCell
  }
];

const router = new VueRouter({
  routes
});

export default router;
