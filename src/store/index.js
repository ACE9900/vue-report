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
    localQuantity_act: Vue.localStorage.get("q_act"),
    product_report: Vue.localStorage.get("product_report"),
    product_footer: Vue.localStorage.get("product_footer"),
    delay_report: Vue.localStorage.get("delay_report"),
    product_data: Vue.localStorage.get("product_data"),
    loss_report: Vue.localStorage.get("loss_report"),
    date_data: Vue.localStorage.get("date_data"),
    title_data: Vue.localStorage.get("title_data")
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
      //console.log(localStorage.getItem("localBillet_act"))
    },
    setQuantity(state, q_act) {
      localStorage.setItem("localQuantity_act", q_act);
      //console.log(localStorage.getItem("localQuantity_act"))
    },
    //Delay Report
    setTotaltime(state, total_time) {
      localStorage.setItem("localTotaltime", total_time);
      //console.log(localStorage.getItem("localTotaltime"))
    },
    //เก็บค่า product_report
    setPR(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("product_report", doc_data);
      //console.log("product_report" + localStorage.getItem("product_report"));
    },
    //เก็บค่า product_footer
    setPF(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("product_footer", doc_data);
      //console.log("product_footer" + localStorage.getItem("product_footer"));
    },
    //เก็บค่า delay_report
    setDR(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("delay_report", doc_data);
      //console.log("delay_report" + localStorage.getItem("delay_report"));
    },
    //เก็บค่า delay_footer
    setDF(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("delay_footer", doc_data);
      //console.log("delay_footer" + localStorage.getItem("delay_footer"));
    },
    //เก็บค่า loss_report
    setLR(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("loss_report", doc_data);
      //console.log("loss_report" + localStorage.getItem("loss_report"));
    },
    //เก็บค่า product_data
    setPD(state, doc) {
      let doc_data = JSON.stringify(doc);
      localStorage.setItem("product_data", doc_data);
      //console.log("product_data" + localStorage.getItem("product_data"));
    },
    //เก็บค่า date_data
    setDate(state, doc) {
      let doc_date = JSON.stringify(doc);
      localStorage.setItem("date_data", doc_date);
      //console.log("date_data" + localStorage.getItem("date_data"));
    },
    //เก็บค่า title_data
    setTitle(state, doc) {
      let title_data = JSON.stringify(doc);
      localStorage.setItem("title_data", title_data);
      //console.log("date_data" + localStorage.getItem("date_data"));
    }
  },
  actions: {},
  modules: {}
});
