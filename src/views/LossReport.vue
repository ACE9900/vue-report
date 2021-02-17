<template>
  <div class="about">
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
export default {
  components: {
    VeTable
  },
  data() {
    return {
      //Data Table
      data_table1: [
        {
          _cv1: 1, //CV1
          _cv2: 2, //CV2
          _coldshear: 3, //Cold Shear
          _scale: 4, //Scale
          _irontail: 5, //หางเหล็ก
          _reject: 6, //BandSAW
          _cobble: 7, //Cobble
          _total: 8, //Total
          _unit: "กก." //Unit
        },
        {
          //Percent
          _cv1: ((1 / localStorage.getItem("localQuantity_act")) * 100).toFixed(
            2
          ), //CV1
          _cv2: ((2 / localStorage.getItem("localQuantity_act")) * 100).toFixed(
            2
          ), //CV2
          _coldshear: (
            (3 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //Cold Shear
          _scale: (
            (4 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //Scale
          _irontail: (
            (5 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //หางเหล็ก
          _reject: (
            (6 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //BandSAW
          _cobble: (
            (7 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //Cobble
          _total: (
            (8 / localStorage.getItem("localQuantity_act")) *
            100
          ).toFixed(2), //Total
          _unit: "%" //Unit
        }
      ],
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0) {
            return "table-header-cell-lossreport";
          }
        },
        //ตั่งค่าพื้นหลัง body row
        bodyCellClass: ({ rowIndex }) => {
          if (rowIndex === 0 || rowIndex === 1) {
            {
              return "table-body-cell-lossreport";
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
    }
  },
  created() {
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
</style>
