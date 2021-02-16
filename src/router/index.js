import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PR_V2 from "../views/PR_V2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/PR_V2",
    name: "PR_V2",
    component: PR_V2,
  },
];

const router = new VueRouter({
  routes
});

export default router;
