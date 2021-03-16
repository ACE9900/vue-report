<template>
  <div class="pr_v2" v-if="sendDate">
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title
          ><v-row class="pa-4 align-center"
            >รายงานการผลิต โรง<v-col cols="2">
              <v-select
                class="mt-7"
                :items="factory"
                v-model="fact"
                label="เลือกโรง"
              ></v-select> </v-col
            >ประจำวันที่<v-col cols="3"
              ><v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="mt-7"
                    v-model="date"
                    label="เลือกวันที่วันผลิต"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker> </v-menu></v-col></v-row></v-toolbar-title
        ><v-spacer></v-spacer
        ><div v-if="createButton"><vueGrid class="ma-0 pa-0 mt-13 text-right" :fact="fact" :date="date" /></div>
      </v-toolbar>
      <v-row class="mb-2">
        <v-col cols="12" sm="8" class="pa-0">
          <TitleDetail :fact="fact" :date="date" />
        </v-col>
        <v-col cols="12" sm="4" class="pa-0">
          <ProductionData :fact="fact" :date="date" />
        </v-col>
      </v-row>
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Production Report</v-toolbar-title>
      </v-toolbar>
      <ProductionReport :fact="fact" :date="date" />
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Delay Report</v-toolbar-title>
      </v-toolbar>
      <DelayReport :fact="fact" :date="date" />
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Consumption</v-toolbar-title>
      </v-toolbar>
      <Consumption />
    </v-card>
    <v-card class="grey lighten-3 ma-4 mb-8">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Loss Report</v-toolbar-title>
      </v-toolbar>
      <LossReport :fact="fact" :date="date" />
    </v-card>
  </div>
</template>

<script>
import TitleDetail from "./TitleDetail";
import ProductionReport from "./ProductionReport";
import DelayReport from "./DelayReport";
import Consumption from "./Consumption";
import LossReport from "./LossReport";
import ProductionData from "./ProductionData";
//import Test from "./Test";
//import dataNode from "./dataNode";
//import dataCell from "./dataCell";
import vueGrid from "./vueGrid";

export default {
  name: "PRV2",
  components: {
    TitleDetail,
    ProductionReport,
    DelayReport,
    Consumption,
    LossReport,
    ProductionData,
    //Test,
    //dataCell
    //dataXLSX
    //dataPopulate
    //dataNode
    vueGrid
  },
  data() {
    return {
      fact: "RMD8",
      factory: ["RMD7", "RMD8"],
      date: "",
      //date: new Date().toISOString().substr(0, 10),
      menu2: false
    };
  },
  computed: {
    sendDate() {
      if (
        localStorage.getItem("date_data") != null ||
        localStorage.getItem("date_data") != "" ||
        localStorage.getItem("date_data") == null ||
        localStorage.getItem("date_data") == ""
      ) {
        const data_date = {
          fact: this.fact,
          date: this.date
        };
        this.$store.commit("setDate", data_date);
      }
      return true;
    },
    createButton() {
      if (
        localStorage.getItem("date_data") != null ||
        localStorage.getItem("date_data") != "" ||
        localStorage.getItem("date_data") == null ||
        localStorage.getItem("date_data") == ""
      ) {
        console.log("show");
        //window.location.reload(1)
      }
      return true;
    }
  },
  created() {
    //console.log(this.data_table1);
    var d = new Date();
    d.setDate(d.getDate() - 1);
    this.date = d.toISOString().substr(0, 10);
  }
};
</script>
<style scoped>
.PR_table th {
  color: #fff;
  border: solid 1px black;
  background-color: #29b6f6;
}
</style>
