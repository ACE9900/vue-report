import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "vue-easytable/libs/theme-default/index.css"; // import style
import VueEasytable from "vue-easytable"; // import library
import JsonExcel from "vue-json-excel";

Vue.config.productionTip = false;
Vue.component("downloadExcel", JsonExcel);

new Vue({
  router,
  store,
  vuetify,
  VueEasytable,
  render: h => h(App)
}).$mount("#app");
