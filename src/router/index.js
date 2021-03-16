import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PRV2 from "../views/PRV2.vue";
import Excel from "../views/Excel.vue";
import vueGrid from "../views/vueGrid.vue";

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
    path: "/Excel",
    name: "Excel",
    component: Excel
  },
  {
    path: "/vueGrid",
    name: "vueGrid",
    component: vueGrid
  }
];

const router = new VueRouter({
  routes
});

export default router;
