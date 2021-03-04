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
          _until: "ดีเซล(Lirte)", //None
          _be_burn: 0, //ก่อนจุดเตา
          _be_iron: 0, //ก่อนรีด
          _af_burn: 0, //หลังรีด
          _use_burn: 3000, //ใช้จุดเตา
          _use_iron: 20500, //ใช้รีด
          _total: 3000 + 20500, //รวม
          //อัตราการใช้พลังงาน
          _p_rolling: (
            (20500 / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Rolling
          _p_total: (
            ((3000 + 20500) / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Total
          //หน่วย
          _unit: "ลิตร/ตัน"
        },
        {
          _until: "น้ำมันเตา(Lirte)", //None
          _be_burn: 0, //ก่อนจุดเตา
          _be_iron: 0, //ก่อนรีด
          _af_burn: 0, //หลังรีด
          _use_burn: 3000, //ใช้จุดเตา
          _use_iron: 20500, //ใช้รีด
          _total: 3000 + 20500, //รวม
          //อัตราการใช้พลังงาน
          _p_rolling: (
            (20500 / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Rolling
          _p_total: (
            ((3000 + 20500) / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Total
          _unit: "ลิตร/ตัน" //หน่วย
        },
        {
          //None
          _until: "ไฟฟ้า(kwh)", //None
          _be_burn: 0, //ก่อนจุดเตา
          _be_iron: 0, //ก่อนรีด
          _af_burn: 0, //หลังรีด
          _use_burn: 3000, //ใช้จุดเตา
          _use_iron: 20500, //ใช้รีด
          _total: 3000 + 20500, //รวม
          //อัตราการใช้พลังงาน
          _p_rolling: (
            (20500 / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Rolling
          _p_total: (
            ((3000 + 20500) / localStorage.getItem("localQuantity_act")) *
            1000
          ).toFixed(2), //Total
          //หน่วย
          _unit: "kwh/ตัน"
        }
      ],
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0 || rowIndex === 1) {
            return "table-header-cell-consumption";
          }
        },
        //ตั่งค่าพื้นหลัง body column
        bodyCellClass: ({ column, rowIndex }) => {
          if (
            column.field === "_until" ||
            /* column.field === "_total" ||
            column.field === "_p_rolling" ||
            column.field === "_p_total" || */
            column.field === "_unit"
          ) {
            return "table-body-cell-consumption";
          }
          if (
            (rowIndex == 0 && column.field === "_total") ||
            column.field === "_p_rolling" ||
            column.field === "_p_total" ||
            (rowIndex == 1 && column.field === "_total") ||
            column.field === "_p_rolling" ||
            column.field === "_p_total" ||
            (rowIndex == 2 && column.field === "_total") ||
            column.field === "_p_rolling" ||
            column.field === "_p_total"
          ) {
            return "table-summary-cell-consumption";
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
        { field: "_until", key: "a", title: "", width: "75%" },
        //ก่อนจุดเตา
        { field: "_be_burn", key: "b", title: "ก่อนจุดเตา", width: "50%" },
        //ก่อนรีด
        { field: "_be_iron", key: "c", title: "ก่อนรีด", width: "50%" },
        //หลังรีด
        { field: "_af_burn", key: "d", title: "หลังรีด", width: "50%" },
        //ใช้จุดเตา
        { field: "_use_burn", key: "e", title: "ใช้จุดเตา", width: "50%" },
        //ใช้รีด
        { field: "_use_iron", key: "f", title: "ใช้รีด", width: "50%" },
        //รวม
        { field: "_total", key: "g", title: "รวม", width: "80%" },
        //อัตราการใช้พลังงาน
        {
          title: "อัตราการใช้พลังงาน",
          children: [
            {
              field: "_p_rolling",
              key: "h",
              title: "Rolling",
              width: "40%"
            },
            {
              field: "_p_total",
              key: "i",
              title: "Total",
              width: "40%"
            }
          ]
        },
        //หน่วย
        { field: "_unit", key: "j", title: "หน่วย", width: "40%" }
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
    }
  },
  created() {
    //this.initTableData();
  }
};
</script>

<style>
/* header css */
.table-header-cell-consumption {
  background: #addeff !important;
  color: rgb(0, 0, 0) !important;
}
/* body css */
.table-body-cell-consumption {
  background: #addeff !important;
  color: rgb(0, 0, 0) !important;
}
/* summary */
.table-summary-cell-consumption {
  background: #feffd5 !important;
  color: rgb(255, 0, 0) !important;
}
</style>
