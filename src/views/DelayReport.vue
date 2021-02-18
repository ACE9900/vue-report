<template>
  <ve-table
    v-if="delayReport"
    class="ma-2 caption"
    rowKeyFieldName="rowkey"
    fixed-header
    border-x
    border-y
    :scroll-width="1870"
    :columns="columns"
    :table-data="data_table1"
    :footer-data="footerData"
    :cell-selection-option="cellSelectionOption"
    :cell-style-option="cellStyleOption"
    :cell-span-option="cellSpanOption"
  />
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
          _time: 3,
          _PP: 0,
          _PD: 3,
          _MM: 0,
          _EM: 0,
          //Other
          _o_UTD: 0,
          _o_QA: 0,
          _o_IT: 0,
          _o_WHD: 0,
          _o_SMD: 0,
          _o_Setup: 0,
          //No. of Billet
          _no_billet: "",
          //ปัญหา/Miss Roll
          _m_Rerods: 0,
          _m_Cobble: 0,
          _m_Heat: "",
          _m_Grade: "",
          //Area
          _zone: "RH",
          //ปัญหาและรายละเอียด
          _detail: "ปล่อย Auto Billet ไม่ได้",
          //สาเหตุ
          _cause: "walk Auto ไม่ได้ ไม่ถึงตำแหน่ง",
          //ผู้รับเรื่อง
          _simple_fix: ""
        }
      ],
      //Summary Data
      sum_time: 0, //Time
      sum_PP: 0, //PP
      sum_PD: 0, //PD
      sum_MM: 0, //MM
      sum_EM: 0, //EM
      sum_UTD: 0, //UTD
      sum_QA: 0, //QA
      sum_IT: 0, //IT
      sum_WHD: 0, //WHD
      sum_SMD: 0, //SMD
      sum_Setup: 0, //Setup
      sum_Rerods: 0, //Return
      sum_Cobble: 0, //Cobble
      //Percent Data
      percent_time: 0, //Time
      percent_PP: 0, //PP
      percent_PD: 0, //PD
      percent_MM: 0, //MM
      percent_EM: 0, //EM
      percent_UTD: 0, //UTD
      percent_QA: 0, //QA
      percent_IT: 0, //IT
      percent_WHD: 0, //WHD
      percent_SMD: 0, //SMD
      percent_Setup: 0, //Setup
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (rowIndex === 0 || rowIndex === 1) {
            return "table-header-cell-class";
          }
        },
        //ตั่งค่าพื้นหลัง footer column
        footerCellClass: ({ column, rowIndex }) => {
          if (rowIndex === 0) {
            if (
              column.field == "_until" ||
              column.field == "_time" ||
              column.field == "_PP" ||
              column.field == "_PD" ||
              column.field == "_MM" ||
              column.field == "_EM" ||
              column.field == "_o_UTD" ||
              column.field == "_o_QA" ||
              column.field == "_o_IT" ||
              column.field == "_o_WHD" ||
              column.field == "_o_SMD" ||
              column.field == "_o_Setup" ||
              column.field == "_m_Rods" ||
              column.field == "_m_Rerods" ||
              column.field == "_m_Cobble"
            ) {
              return "table-footer-cell-class3";
            }
          }
          if (rowIndex === 1) {
            if (
              (rowIndex === 1 && column.field == "_until") ||
              column.field == "_time" ||
              column.field == "_PP" ||
              column.field == "_PD" ||
              column.field == "_MM" ||
              column.field == "_EM" ||
              column.field == "_o_UTD" ||
              column.field == "_o_QA" ||
              column.field == "_o_IT" ||
              column.field == "_o_WHD" ||
              column.field == "_o_SMD" ||
              column.field == "_o_Setup"
            ) {
              return "table-footer-cell-class3";
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
          ]
        },
        //Production
        {
          title: "Production",
          children: [
            {
              field: "_PP",
              key: "c",
              title: "PP",
              width: "43%"
            },
            {
              field: "_PD",
              key: "d",
              title: "PD",
              width: "43%"
            }
          ]
        },
        //MainTenance
        {
          title: "MainTenance",
          children: [
            {
              field: "_MM",
              key: "e",
              title: "MM",
              width: "43%"
            },
            {
              field: "_EM",
              key: "f",
              title: "EM",
              width: "43%"
            }
          ]
        },
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
        //No. of Billet
        { field: "_no_billet", key: "m", title: "No. of Billet", width: "47%" },
        //ปัญหา / Miss Roll
        {
          title: "Miss Roll",
          children: [
            {
              field: "_m_Rerods",
              key: "n",
              title: "Return",
              width: "74%"
            },
            {
              field: "_m_Cobble",
              key: "o",
              title: "Cobble",
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
            }
          ]
        },
        //Area
        { field: "_zone", key: "r", title: "Area", width: "47%" },
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
        {
          field: "_simple_fix",
          key: "u",
          title: "การแก้ไขเบื้องต้น",
          width: "100%"
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
      this.summary();
      this.footerData = [
        {
          rowkey: 0,
          _until: "รวมเวลา(นาที)",
          _time: this.sum_time,
          _PP: this.sum_PP,
          _PD: this.sum_PD,
          _MM: this.sum_MM,
          _EM: this.sum_EM,
          _o_UTD: this.sum_UTD,
          _o_QA: this.sum_QA,
          _o_IT: this.sum_IT,
          _o_WHD: this.sum_WHD,
          _o_SMD: this.sum_SMD,
          _o_Setup: this.sum_Setup,
          _m_Rerods: this.sum_Rerods,
          _m_Cobble: this.sum_Cobble
        },
        {
          rowkey: 1,
          _until: "%",
          _time: this.percent_time.toFixed(1),
          _PP: this.percent_PP.toFixed(1),
          _PD: this.percent_PD.toFixed(1),
          _MM: this.percent_MM.toFixed(1),
          _EM: this.percent_EM.toFixed(1),
          _o_UTD: this.percent_UTD.toFixed(1),
          _o_QA: this.percent_QA.toFixed(1),
          _o_IT: this.percent_IT.toFixed(1),
          _o_WHD: this.percent_WHD.toFixed(1),
          _o_SMD: this.percent_SMD.toFixed(1)
          //_o_Setup: this.percent_Setup.toFixed(2)
        }
        /* {
          rowkey: 2,
          _PP: 1100.0,
          _PD: 0.49,
          _MM: 48.64,
          _EM: 67.27
        } */
      ];
    },
    summary() {
      for (let i = 0; i < this.data_table1.length; i++) {
        //Summary Data
        this.sum_time = this.data_table1[i]._time + this.sum_time; //Time
        this.sum_PP = this.data_table1[i]._PP + this.sum_PP; //PP
        this.sum_PD = this.data_table1[i]._PD + this.sum_PD; //PD
        this.sum_MM = this.data_table1[i]._MM + this.sum_MM; //MM
        this.sum_EM = this.data_table1[i]._EM + this.sum_EM; //EM
        this.sum_UTD = this.data_table1[i]._o_UTD + this.sum_UTD; //UTD
        this.sum_QA = this.data_table1[i]._o_QA + this.sum_QA; //QA
        this.sum_IT = this.data_table1[i]._o_IT + this.sum_IT; //IT
        this.sum_WHD = this.data_table1[i]._o_WHD + this.sum_WHD; //WHD
        this.sum_SMD = this.data_table1[i]._o_SMD + this.sum_SMD; //SMD
        this.sum_Setup = this.data_table1[i]._o_Setup + this.sum_Setup; //Setup
      }
      //Percent Data
      this.percent_time =
        (this.sum_time / localStorage.getItem("localAva")) * 100; //Time
      this.percent_PP = (this.sum_PP / localStorage.getItem("localAva")) * 100; //PP
      this.percent_PD = (this.sum_PD / localStorage.getItem("localAva")) * 100; //PD
      this.percent_MM = (this.sum_MM / localStorage.getItem("localAva")) * 100; //MM
      this.percent_EM = (this.sum_EM / localStorage.getItem("localAva")) * 100; //EM
      this.percent_UTD =
        (this.sum_UTD / localStorage.getItem("localAva")) * 100; //UTD
      this.percent_QA = (this.sum_QA / localStorage.getItem("localAva")) * 100; //QA
      this.percent_IT = (this.sum_IT / localStorage.getItem("localAva")) * 100; //IT
      this.percent_WHD =
        (this.sum_WHD / localStorage.getItem("localAva")) * 100; //WHD
      this.percent_SMD =
        (this.sum_SMD / localStorage.getItem("localAva")) * 100; //SMD
    }
  },
  computed: {
    delayReport() {
      if (
        localStorage.getItem("localTotaltime") != null ||
        localStorage.getItem("localTotaltime") != ""
      ) {
        this.$store.commit("setTotaltime", this.sum_time);
        console.log("total time :" + localStorage.getItem("localTotaltime"));
      }
      return true;
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
