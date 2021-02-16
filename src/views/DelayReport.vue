<template>
  <div class="about">
    <ve-table
      :scroll-width="1800"
      fixed-header
      border-x
      border-y
      :columns="columns"
      :table-data="data_table1"
      :footer-data="footerData"
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
          _until: "22:00 - 22:03",
          //Billet
          _time: "3",
          _PP: "",
          _PD: "3",
          _MM: "",
          _EM: "",
          //Other
          _o_UTD: "",
          _o_QA: "",
          _o_IT: "",
          _o_WHD: "",
          _o_SMD: "",
          _o_Setup: "",
          //ปัญหา/Miss Roll
          _m_Rods: "",
          _m_Rerods: "",
          _m_Cobble: "",
          _m_Heat: "",
          _m_Grade: "",
          _m_Zone: "RH",
          //ปัญหาและรายละเอียด
          _detail: "ปล่อย Auto Billet ไม่ได้",
          //สาเหตุ
          _cause: "walk Auto ไม่ได้ ไม่ถึงตำแหน่ง",
          //ผู้รับเรื่อง
          _how_fix: "",
          _sub_recip1: "",
          _sub_recip2: ""
        }
      ],
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0 || rowIndex === 1) {
            return "table-header-cell-class";
          }
        },
        //ตั่งค่าพื้นหลัง footer column
        footerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
            return "table-footer-cell-class3";
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
        //Until time
        { field: "_until", key: "a", title: "ตั้งแต่เวลา", width: "84%" },
        //Total time
        {
          title: "เวลารวม",
          children: [
            {
              field: "_time",
              key: "b",
              title: "(นาที)",
              width: "57%"
            }
          ],
        },
        //PP
        { field: "_PP", key: "c", title: "PP", width: "43%" },
        //PD
        { field: "_PD", key: "d", title: "PD", width: "43%" },
        //MM
        { field: "_MM", key: "e", title: "MM", width: "47%" },
        //EM
        { field: "_EM", key: "f", title: "EM", width: "47%" },
        //Other
        {
          title: "Other",
          children: [
            {
              field: "_o_UTD",
              key: "g",
              title: "UTD",
              width: "43%"
            },
            {
              field: "_o_QA",
              key: "h",
              title: "QA",
              width: "43%"
            },
            {
              field: "_o_IT",
              key: "i",
              title: "IT",
              width: "43%"
            },
            {
              field: "_o_WHD",
              key: "j",
              title: "WHD",
              width: "43%"
            },
            {
              field: "_o_SMD",
              key: "k",
              title: "SMD",
              width: "43%"
            },
            {
              field: "_o_Setup",
              key: "l",
              title: "SET UP",
              width: "52%"
            }
          ]
        },
        //ปัญหา / Miss Roll
        {
          title: "ปัญหา / Miss Roll",
          children: [
            {
              field: "_m_Rods",
              key: "m",
              title: "แท่งที่",
              width: "44%"
            },
            {
              field: "_m_Rerods",
              key: "n",
              title: "Return (แท่ง)",
              width: "74%"
            },
            {
              field: "_m_Cobble",
              key: "o",
              title: "Cobble (แท่ง)",
              width: "74%"
            },
            {
              field: "_m_Heat",
              key: "p",
              title: "Heat No",
              width: "60%"
            },
            {
              field: "_m_Grade",
              key: "q",
              title: "Grade",
              width: "60%"
            },
            {
              field: "_m_Zone",
              key: "r",
              title: "Zone Area",
              width: "60%"
            }
          ]
        },
        //Detail
        {
          field: "_detail",
          key: "s",
          title: "ปัญหา/รายละเอียด",
          width: "110%"
        },
        //Cause
        { field: "_cause", key: "t", title: "สาเหตุ", width: "110%" },
        //How to Fix
        { field: "_how_fix", key: "u", title: "วิธีการแก้ไข", width: "100%" },
        //Recip
        {
          title: "ผู้รับเรื่อง",
          children: [
            {
              field: "_sub_recip1",
              key: "v",
              title: "",
              width: "35%"
            },
            {
              field: "_sub_recip2",
              key: "w",
              title: "",
              width: "35%"
            }
          ]
        }
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
    // footer data
    initFooterData() {
      this.footerData = [
        {
          rowkey: 0,
          _until: "รวมเวลา(นาที)",
          _time: 123,
          _PP: 0,
          _PD: 101,
          _MM: 6,
          _EM: 16,
          _o_UTD: 0,
          _o_QA: 0,
          _o_IT: 0,
          _o_WHD: 0,
          _o_SMD: 0,
          _o_Setup: 0,
          _m_Rods: "",
          _m_Rerods: 0.0,
          _m_Cobble: 2.0,
          _m_Heat: "",
          _m_Grade: "",
          _m_Zone: ""
        },
        {
          rowkey: 1,
          _until: "%",
          _time: 18.6,
          _PP: 0.0,
          _PD: 15.3,
          _MM: 0.9,
          _EM: 2.4,
          _o_UTD: 0.0,
          _o_QA: 0.0,
          _o_IT: 0.0,
          _o_WHD: 0.0,
          _o_SMD: 0.0,
          _o_Setup: 0.0
        },
        {
          rowkey: 2,
          _PP: 1100.0,
          _PD: 0.49,
          _MM: 48.64,
          _EM: 67.27
        }
      ];
    }
  },
  created() {
    //this.initTableData();
    this.initFooterData();
  }
};
</script>

<style>
/* footer css */
.table-footer-cell-class3 {
  background: #addeff !important;
  color: rgb(0, 0, 0) !important;
}
</style>
