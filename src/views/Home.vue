<template>
  <div class="home">
    <v-col cols="8" class="">
      <v-card class="grey lighten-3 ma-4">
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>รายงานการผลิต โรง...ประจำวันที่ ...</v-toolbar-title>
        </v-toolbar>
        <TitleDetail />
      </v-card>
    </v-col>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Production Report Test</v-toolbar-title>
      </v-toolbar>
      <ProductionReport />
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Delay Report Test</v-toolbar-title>
      </v-toolbar>
      <DelayReport />
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Consumption</v-toolbar-title>
      </v-toolbar>
      <Consumption />
    </v-card>
    <v-card class="grey lighten-3 ma-4">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Loss Report</v-toolbar-title>
      </v-toolbar>
      <LossReport />
    </v-card>
    <v-col cols="5" class="">
      <v-card class="grey lighten-3">
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>Production Data</v-toolbar-title>
        </v-toolbar>
        <ProductionData />
      </v-card>
    </v-col>
  </div>
</template>

<script>
import TitleDetail from "./TitleDetail";
import ProductionReport from "./ProductionReport";
import DelayReport from "./DelayReport";
import Consumption from "./Consumption";
import LossReport from "./LossReport";
import ProductionData from "./ProductionData";

export default {
  name: "Home",
  components: {
    TitleDetail,
    ProductionReport,
    DelayReport,
    Consumption,
    LossReport,
    ProductionData
  },
  data() {
    return {
      data_table1: [
        {
          _no: "1",
          //Billet
          _b_heat: "6400211",
          _b_grade: "SR24",
          _b_qty: "4",
          _b_std: "",
          _b_act: "8461",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "4",
          _q_pcs: "403",
          _q_std: "",
          _q_act: "8195",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "266",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "96.86",
          //Energy Consumption
          _e_stove: "375",
          _e_elec: "716",
          _e_diesel: "0"
        },
        {
          _no: "1",
          //Billet
          _b_heat: "6400212",
          _b_grade: "SR24",
          _b_qty: "23",
          _b_std: "",
          _b_act: "49078",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "22",
          _q_pcs: "2244",
          _q_std: "",
          _q_act: "45869",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "3209",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "93.46",
          //Energy Consumption
          _e_stove: "2153",
          _e_elec: "4114",
          _e_diesel: "0"
        },
        {
          _no: "1",
          //Billet
          _b_heat: "6400211",
          _b_grade: "SR24",
          _b_qty: "4",
          _b_std: "",
          _b_act: "8461",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "4",
          _q_pcs: "403",
          _q_std: "",
          _q_act: "8195",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "266",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "96.86",
          //Energy Consumption
          _e_stove: "375",
          _e_elec: "716",
          _e_diesel: "0"
        }
      ],
      data_test: [
        { text: "Date :", value: "2/1/2564" },
        { text: "Grade :", value: "SR24" },
        { text: "Length :", value: "12" },
        { text: "Size :", value: "RB6" },
        { text: "Grade :", value: "SR24" },
        { text: "Bundle size :", value: "Coil" },
        { text: "Cut of length :", value: "Coil", class: "blue lighten-5" }
      ],
      itemsPerPage: 4
    };
  },
  created() {
    console.log(this.data_table1);
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
