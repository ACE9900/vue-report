import Vue from "vue";
import Vuex from "vuex";
import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

export default new Vuex.Store({
  state: {
    localPro: Vue.localStorage.get("pd_pro"),
    localAva: Vue.localStorage.get("pd_ava"),
    localTotaltime: Vue.localStorage.get("total_time"),
    localBillet_act: Vue.localStorage.get("b_act"),
    localQuantity_act: Vue.localStorage.get("q_act")
  },
  mutations: {
    //Production Data
    setPro(state, pd_pro) {
      localStorage.setItem("localPro", pd_pro);
    },
    setAva(state, pd_ava) {
      localStorage.setItem("localAva", pd_ava);
    },
    //Production Report
    setBillet(state, b_act) {
      localStorage.setItem("localBillet_act", b_act);
    },
    setQuantity(state, q_act) {
      localStorage.setItem("localQuantity_act", q_act);
      //console.log(localStorage.getItem("localQuantity_act"))
    },
    //Delay Report
    setTotaltime(state, total_time) {
      localStorage.setItem("localTotaltime", total_time);
    }
  },
  actions: {},
  modules: {}
});
