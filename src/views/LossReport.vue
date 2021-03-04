<template>
  <div v-if="data_Now">
    <ve-table
      :scroll-width="1000"
      fixed-header
      border-x
      border-y
      :columns="columns"
      :table-data="data_table1"
      rowKeyFieldName="rowkey"
      :cell-selection-option="cellSelectionOption"
      :cell-style-option="cellStyleOption"
      class="ma-2 caption"
    />
  </div>
</template>
<script>
import { VeTable } from "vue-easytable";
import axios from "axios";
export default {
  props: ["fact", "date"],
  components: {
    VeTable
  },
  data() {
    return {
      //Data Table
      data_table1: [],
      //Axios
      url: "http://api.zen.zubbsteel.com/v1/",
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0) {
            return "table-header-cell-lossreport";
          }
        },
        //ตั่งค่าพื้นหลัง body row
        bodyCellClass: ({ column, rowIndex }) => {
          if (
            (rowIndex === 0 && column.field === "_unit") ||
            (rowIndex === 1 && column.field === "_unit")
          ) {
            {
              return "table-body-cell-lossreport";
            }
          }
          if (
            (rowIndex === 0 && column.field === "_total") ||
            (rowIndex === 1 && column.field === "_total")
          ) {
            {
              return "table-summary-cell-lossreport";
            }
          }
        }
      },
      //ตั่งค่า selected click
      cellSelectionOption: {
        enable: false
      },
      //Header
      columns: [
        //CV1
        { field: "_cv1", key: "a", title: "CV1", width: "50%" },
        //CV2
        { field: "_cv2", key: "b", title: "CV2", width: "50%" },
        //Cold Shear
        { field: "_coldshear", key: "c", title: "Cold Shear", width: "50%" },
        //Scale
        { field: "_scale", key: "e", title: "Scale", width: "50%" },
        //หางเหล็ก
        { field: "_irontail", key: "f", title: "หางเหล็ก", width: "50%" },
        //BandSAW
        { field: "_reject", key: "g", title: "Reject", width: "40%" },
        //Cobble
        { field: "_total", key: "h", title: "Total", width: "40%" },
        //Total
        { field: "_unit", key: "i", title: "", width: "40%" }
      ],
      tableData: []
    };
  },
  methods: {
    initTableData() {
      let data = [];
      for (let i = 0; i < 6; i++) {
        data.push({
          rowkey: i,
          col1: i,
          col2: i,
          col3: i,
          col4: i,
          col5: i,
          col6: i,
          col7: i,
          col8: i
        });
      }
      this.data_table1 = data;
    },
    //รับค่า Data Loss
    getData() {
      if (this.fact == "RMD7") this.factor = "7";
      if (this.fact == "RMD8") this.factor = "8";
      return axios
        .get(this.url + "loss/" + this.date + "/" + this.factor)
        .then(response => {
          this.data_loss = response.data;
          //console.log(this.data_loss);
          this.pushDataNull();
          if (this.data_loss == null || this.data_loss == "") {
            this.pushDataNull();
          } else {
            this.pushData();
          }
        });
    },
    //Push ค่าไปที่ data_table1
    async pushData() {
      this.data_table1 = [
        {
          _cv1: null, //CV1
          _cv2: null, //CV2
          _coldshear: null, //Cold Shear
          _scale: null, //Scale
          _irontail: null, //หางเหล็ก
          _reject: null, //Reject
          _total: null, //Total
          _unit: "กก." //Unit
        },
        {
          _cv1: null, //CV1
          _cv2: null, //CV2
          _coldshear: null, //Cold Shear
          _scale: null, //Scale
          _irontail: null, //หางเหล็ก
          _reject: null, //Reject
          _total: null, //Total
          _unit: "%" //Unit
        }
      ];
      this.data_table1.push();
      //console.log(this.data_table1);
      for (let i = 0; i < this.data_loss.length; i++) {
        this.formatData(i);
      }
      this.$store.commit("setLR", this.data_table1);
    },
    //Push Data Null
    pushDataNull() {
      this.data_table1 = [];
    },
    //Format data to data_table1
    formatData(i) {
      //CV1
      if (this.data_loss[i].GoodsType == "CV1") {
        this.data_table1[0]._cv1 = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._cv1 = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localBillet_act")) *
          100
        ).toFixed(2);
      }
      //CV2
      if (this.data_loss[i].GoodsType == "CV2") {
        this.data_table1[0]._cv2 = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._cv2 = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localQuantity_act")) *
          100
        ).toFixed(2);
      }
      //Cold Shear
      if (this.data_loss[i].GoodsType == "Cold Shear") {
        this.data_table1[0]._coldshear = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._coldshear = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localQuantity_act")) *
          100
        ).toFixed(2);
      }
      //SCALE
      if (this.data_loss[i].GoodsType == "SCALE") {
        this.data_table1[0]._scale = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._scale = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localQuantity_act")) *
          100
        ).toFixed(2);
      }
      //หางเหล็ก
      if (this.data_loss[i].GoodsType == "หางเหล็ก") {
        this.data_table1[0]._irontail = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._irontail = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localQuantity_act")) *
          100
        ).toFixed(2);
      }
      //Reject
      if (this.data_loss[i].GoodsType == "Reject") {
        this.data_table1[0]._reject = this.data_loss[i].GoodsWeight;
        this.data_table1[1]._reject = (
          (this.data_loss[i].GoodsWeight /
            localStorage.getItem("localQuantity_act")) *
          100
        ).toFixed(2);
      }
      /* this.data_table1[0]._unit = "กก.";
      this.data_table1[1]._unit = "%"; */
      this.summary();
    },
    async summary() {
      //Total
      if (this.data_table1[0]._cv1 == null) this.data_table1[0]._cv1 = 0;
      if (this.data_table1[0]._cv2 == null) this.data_table1[0]._cv2 = 0;
      if (this.data_table1[0]._coldshear == null)
        this.data_table1[0]._coldshear = 0;
      if (this.data_table1[0]._scale == null) this.data_table1[0]._scale = 0;
      if (this.data_table1[0]._irontail == null)
        this.data_table1[0]._irontail = 0;
      if (this.data_table1[0]._reject == null) this.data_table1[0]._reject = 0;
      //data sum
      this.data_table1[0]._total =
        this.data_table1[0]._cv1 +
        this.data_table1[0]._cv2 +
        this.data_table1[0]._coldshear +
        this.data_table1[0]._scale +
        this.data_table1[0]._irontail +
        this.data_table1[0]._reject;
      //Total Percent
      if (this.data_table1[1]._cv1 == null) this.data_table1[1]._cv1 = 0;
      if (this.data_table1[1]._cv2 == null) this.data_table1[1]._cv2 = 0;
      if (this.data_table1[1]._coldshear == null)
        this.data_table1[1]._coldshear = 0;
      if (this.data_table1[1]._scale == null) this.data_table1[1]._scale = 0;
      if (this.data_table1[1]._irontail == null)
        this.data_table1[1]._irontail = 0;
      if (this.data_table1[1]._reject == null) this.data_table1[1]._reject = 0;
      //data sum
      this.data_table1[1]._total =
        parseFloat(this.data_table1[1]._cv1) +
        parseFloat(this.data_table1[1]._cv2) +
        parseFloat(this.data_table1[1]._coldshear) +
        parseFloat(this.data_table1[1]._scale) +
        parseFloat(this.data_table1[1]._irontail) +
        parseFloat(this.data_table1[1]._reject);
    }
  },
  computed: {
    //แสดงข้อมูลตามวันที่ และ โรงรีด
    data_Now() {
      if (this.date != null || this.fact != null) {
        this.getData();
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    //this.getData();
    //this.initTableData();
  }
};
</script>

<style>
/* header css */
.table-header-cell-lossreport {
  background: #29b6f6 !important;
  color: rgb(0, 0, 0) !important;
}
/* body css */
.table-body-cell-lossreport {
  background: #addeff !important;
  color: rgb(0, 0, 0) !important;
}
/* summary */
.table-summary-cell-lossreport {
  background: #feffd5 !important;
  color: rgb(255, 0, 0) !important;
}
</style>
