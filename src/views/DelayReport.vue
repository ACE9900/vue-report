<template>
  <div v-if="data_Now">
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
    <!-- <p v-for="item in data_table1" :key="item">{{ item._until}}</p> -->
  </div>
</template>
<script>
import { VeTable } from "vue-easytable";
import axios from "axios";
export default {
  name: "delay-report",
  props: ["fact", "date"],
  components: {
    VeTable
  },
  data() {
    return {
      //Data Table
      data_table1: [],
      data_delay: [],
      //Summary Data
      sum_time: null, //Time
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
      sum_Rerods: null, //Return
      sum_Cobble: null, //Cobble
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
      //Axios
      url: "http://api.zen.zubbsteel.com/v1/",
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
              return "table-footer-cell-delay";
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
              column.field == "_o_SMD"
            ) {
              return "table-footer-cell-delay";
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
        { field: "_until", key: "a", title: "ตั้งแต่เวลา", width: "100%" },
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
              width: "45%"
            },
            {
              field: "_m_Cobble",
              key: "o",
              title: "Cobble",
              width: "45%"
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
        { field: "_zone", key: "r", title: "Area", width: "60%" },
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
          width: "200%"
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
      ];
    },
    //เวลาปัจจุบัน YY/MM/DD
    getTime() {
      var months_arr = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
      ];
      var date = new Date(Date.now());
      var year = date.getFullYear();
      var month = months_arr[date.getMonth()];
      var day = date.getDate();
      if (
        day == 1 ||
        day == 2 ||
        day == 3 ||
        day == 4 ||
        day == 5 ||
        day == 6 ||
        day == 7 ||
        day == 8 ||
        day == 9
      ) {
        day = "0" + day;
      }
      this.emp_date = year + "-" + month + "-" + day;
    },
    //สรุปผล
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
        if (
          this.data_table1[i]._m_Rerods == null ||
          this.data_table1[i]._m_Rerods == ""
        ) {
          this.sum_Rerods = 0 + this.sum_Rerods; //Return = 0
        } else {
          this.sum_Rerods =
            parseFloat(this.data_table1[i]._m_Rerods) + this.sum_Rerods; //Return
        }
        if (
          this.data_table1[i]._m_Cobble == null ||
          this.data_table1[i]._m_Cobble == ""
        ) {
          this.sum_Cobble = 0 + this.sum_Cobble; //Cobble = 0
        } else {
          this.sum_Cobble =
            parseFloat(this.data_table1[i]._m_Cobble) + this.sum_Cobble; //Cobble
        }
      }
      this.$store.commit("setTotaltime", this.commit_sum);
      //Percent Data
      //setTimeout(() => (this.percent_time = (this.sum_time / localStorage.getItem("localAva")) * 100), 2000), //Time
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
    },
    //รับค่า Data Delay
    getData() {
      this.getTime();
      return axios
        .get(this.url + "delay/" + this.date + "/" + this.fact)
        .then(response => {
          this.data_delay = response.data;
          this.pushDataNull();
          if (this.data_delay == null || this.data_delay == "") {
            this.pushDataNull();
          } else {
            this.pushData();
          }
        });
    },
    async pushData() {
      for (let i = 0; i < this.data_delay.length; i++) {
        this.data_table1[i] = {
          _until:
            this.data_delay[i].StartTime + " - " + this.data_delay[i].EndTime,
          //Billet
          _time: this.data_delay[i].Minute,
          _PP: null,
          _PD: null,
          _MM: null,
          _EM: null,
          //Other
          _o_UTD: null,
          _o_QA: null,
          _o_IT: null,
          _o_WHD: null,
          _o_SMD: null,
          _o_Setup: null,
          //No. of Billet
          _no_billet: this.data_delay[i].NoOfBillet,
          //ปัญหา/Miss Roll
          _m_Rerods: this.data_delay[i].Return,
          _m_Cobble: this.data_delay[i].Cobble,
          _m_Heat: this.data_delay[i].HeatNo,
          _m_Grade: this.data_delay[i].Grade,
          //Area
          _zone: this.data_delay[i].Area,
          //ปัญหาและรายละเอียด
          _detail: this.data_delay[i].Problem,
          //สาเหตุ
          _cause: this.data_delay[i].Cause,
          //แก้ไขปัญหาเริ่มต้น
          _simple_fix: this.data_delay[i].Resolve
        };
        this.formatData(i);
      }
      //console.log(this.data_table1);
      this.data_table1.push();
      this.$store.commit("setDR", this.data_table1);
    },
    //Push Data Null
    pushDataNull() {
      this.data_table1 = [];
      //Summary Data
      (this.sum_time = 0), //Time
        (this.sum_PP = 0), //PP
        (this.sum_PD = 0), //PD
        (this.sum_MM = 0), //MM
        (this.sum_EM = 0), //EM
        (this.sum_UTD = 0), //UTD
        (this.sum_QA = 0), //QA
        (this.sum_IT = 0), //IT
        (this.sum_WHD = 0), //WHD
        (this.sum_SMD = 0), //SMD
        (this.sum_Setup = 0), //Setup
        (this.sum_Rerods = null), //Return
        (this.sum_Cobble = null), //Cobble
        //Percent Data
        (this.percent_time = 0), //Time
        (this.percent_PP = 0), //PP
        (this.percent_PD = 0), //PD
        (this.percent_MM = 0), //MM
        (this.percent_EM = 0), //EM
        (this.percent_UTD = 0), //UTD
        (this.percent_QA = 0), //QA
        (this.percent_IT = 0), //IT
        (this.percent_WHD = 0), //WHD
        (this.percent_SMD = 0), //SMD
        (this.percent_Setup = 0); //Setup
    },
    async formatData(i) {
      if (this.data_delay[i].Group == "PP") {
        this.data_table1[i]._PP = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "PD") {
        this.data_table1[i]._PD = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "MM") {
        this.data_table1[i]._MM = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "EM") {
        this.data_table1[i]._EM = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "UTD") {
        this.data_table1[i]._o_UTD = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "QA") {
        this.data_table1[i]._o_QA = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "IT") {
        this.data_table1[i]._o_IT = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "WHD") {
        this.data_table1[i]._o_WHD = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "SMD") {
        this.data_table1[i]._o_SMD = this.data_delay[i].Minute;
      }
      if (this.data_delay[i].Group == "SET UP") {
        this.data_table1[i]._o_Setup = this.data_delay[i].Minute;
      }
    }
  },
  computed: {
    delayReport() {
      if (
        localStorage.getItem("localTotaltime") != null ||
        localStorage.getItem("localTotaltime") != ""
      ) {
        //this.$store.commit("setTotaltime", this.sum_time);
        this.initFooterData();
      }
      return true;
    },
    commit_sum() {
      return this.sum_time;
    },
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
    //this.initTableData();
    //this.getData();
    //this.initFooterData();
  }
};
</script>

<style>
/* footer css */
.table-footer-cell-delay {
  background: #feffd5 !important; /* addeff */
  color: rgb(0, 0, 0) !important;
}
</style>
