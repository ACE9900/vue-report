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
      :cell-span-option="cellSpanOption"
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
          //CV1
          _cv1: "a",
          //CV2
          _cv2: "b",
          //Cold Shear
          _coldshear: "c",
          //SAW
          _saw: "d",
          //Scale
          _scale: "e",
          //หางเหล็ก
          _irontail: "f",
          //BandSAW
          _band_saw: "g",
          //Cobble
          _cobble: "h",
          //Total
          _total: "i"
        },
        {
          //CV1
          _cv1: "a",
          //CV2
          _cv2: "b",
          //Cold Shear
          _coldshear: "c",
          //SAW
          _saw: "d",
          //Scale
          _scale: "e",
          //หางเหล็ก
          _irontail: "f",
          //BandSAW
          _band_saw: "g",
          //Cobble
          _cobble: "h",
          //Total
          _total: "i"
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
      //ตั่งค่า footer โดยเรียกใช้ function
      cellSpanOption: {
        footerCellSpan: this.footerCellSpan
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
        //SAW
        { field: "_saw", key: "d", title: "SAW", width: "50%" },
        //Scale
        { field: "_scale", key: "e", title: "Scale", width: "50%" },
        //หางเหล็ก
        { field: "_irontail", key: "f", title: "หางเหล็ก", width: "50%" },
        //BandSAW
        { field: "_band_saw", key: "g", title: "BandSAW", width: "40%" },
        //Cobble
        { field: "_cobble", key: "h", title: "Cobble", width: "40%" },
        //Total
        { field: "_total", key: "i", title: "Total", width: "40%" }
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
    // footer cell span
    footerCellSpan({ column, rowIndex }) {
      if (rowIndex === 0) {
        if (column.field === "_no") {
          return {
            rowspan: 1,
            colspan: 3
          };
        } else if (column.field === "_b_std") {
          return {
            rowspan: 1,
            colspan: 2
          };
        }
      }
      if (rowIndex === 1) {
        if (column.field === "_no") {
          return {
            rowspan: 1,
            colspan: 3
          };
        } else if (column.field === "_b_std") {
          return {
            rowspan: 1,
            colspan: 2
          };
        }
      }
    },
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
