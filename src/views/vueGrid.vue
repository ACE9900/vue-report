<template>
  <div id="app" v-if="data_change">
    <!-- <v-btn ref="myBtn" @click="clickTest">Test</v-btn>
    <v-btn @click="myClickEvent">Click</v-btn> -->
    <ejs-grid
      ref="grid"
      id="Grid"
      :dataSource="data"
      :toolbar="toolbarOptions"
      height="100px"
      width="100px"
      :allowExcelExport="true"
      :toolbarClick="toolbarClick"
      :queryCellInfo="queryCellInfo"
      :excelQueryCellInfo="excelQueryCellInfo"
    >
      <e-columns>
        <!-- Item -->
        <e-column
          field="A"
          headerText=""
          textAlign="Right"
          width="140"
        ></e-column>
        <!-- Heat No -->
        <e-column
          field="B"
          headerText=""
          textAlign="Center"
          width="120"
        ></e-column>
        <!-- Grade -->
        <e-column
          field="C"
          headerText=""
          textAlign="Left"
          width="100"
        ></e-column>
        <e-column
          field="D"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <e-column
          field="E"
          headerText=""
          textAlign="Right"
          width="80"
        ></e-column>
        <e-column
          field="F"
          headerText=""
          textAlign="Center"
          width="70"
        ></e-column>
        <!-- Size -->
        <e-column
          field="G"
          headerText=""
          textAlign="Left"
          width="200"
        ></e-column>
        <!-- Grade -->
        <e-column
          field="H"
          headerText=""
          textAlign="Center"
          width="100"
        ></e-column>
        <!-- Bundle/Coil -->
        <e-column
          field="I"
          headerText=""
          textAlign="Right"
          width="90"
        ></e-column>
        <!-- Pcs -->
        <e-column
          field="J"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <!-- Std Wgt -->
        <e-column
          field="K"
          headerText=""
          textAlign="Left"
          width="80"
        ></e-column>
        <!-- Actual Wgt -->
        <e-column
          field="L"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <!-- Return -->
        <e-column
          field="M"
          headerText=""
          textAlign="Right"
          width="100"
        ></e-column>
        <e-column
          field="N"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <!-- Cobble -->
        <e-column
          field="O"
          headerText=""
          textAlign="Left"
          width="70"
        ></e-column>
        <e-column
          field="P"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <!-- Total -->
        <e-column
          field="Q"
          headerText=""
          textAlign="Right"
          width="80"
        ></e-column>
        <!-- Ploss -->
        <e-column
          field="R"
          headerText=""
          textAlign="Center"
          width="120"
        ></e-column>
        <!-- Product Yield -->
        <e-column
          field="S"
          headerText=""
          textAlign="Left"
          width="80"
        ></e-column>
        <e-column
          field="T"
          headerText=""
          textAlign="Center"
          width="80"
        ></e-column>
        <!-- น้ำมันเตา -->
        <e-column
          field="U"
          headerText=""
          textAlign="Center"
          width="100"
        ></e-column>
        <!-- ไฟฟ้า -->
        <e-column
          field="V"
          headerText=""
          textAlign="Center"
          width="200"
        ></e-column>
        <!-- น้ำมันดีเซล -->
        <e-column
          field="W"
          headerText=""
          textAlign="Center"
          width="140"
        ></e-column>
        <e-column
          field="X"
          headerText=""
          textAlign="Center"
          width="140"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
//import Image from "../assets/logo.png";
//import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  props: ["fact", "date"],
  data() {
    return {
      data: [
        //null
        {
          A: "",
          B: "",
          C: "",
          D: "",
          E: "",
          F: "",
          G: "",
          I: "",
          J: "",
          K: "",
          L: "",
          M: "",
          N: "",
          O: "",
          P: "",
          Q: "",
          R: "",
          S: "",
          T: "",
          U: "",
          V: "",
          W: ""
        },
        //เรียน
        {
          A: "เรียน....."
        },
        //Date
        {
          A: "Date :",
          B: this.date,
          P: "BL weight",
          Q: "Standard",
          R: JSON.parse(localStorage.getItem("title_data")).billet_std,
          S: "Kgs"
        },
        //Billet
        {
          A: "Billet :",
          B: "Grade :",
          C: JSON.parse(localStorage.getItem("title_data")).billet_grade,
          Q: "Actual",
          R: JSON.parse(localStorage.getItem("title_data")).billet_act,
          S: "Kgs"
        },
        {
          B: "Length :",
          C: JSON.parse(localStorage.getItem("title_data")).billet_length,
          D: "m",
          P: "FG Standard weight",
          Q: "",
          R: JSON.parse(localStorage.getItem("title_data")).fg_std_1,
          S: "Kgs/m"
        },
        //FG
        {
          A: "FG :",
          B: "Size :",
          C: JSON.parse(localStorage.getItem("title_data")).fg_size,
          R: JSON.parse(localStorage.getItem("title_data")).fg_std_2,
          S: "Kgs/bundle"
        },
        {
          B: "Grade :",
          C: JSON.parse(localStorage.getItem("title_data")).fg_grade
        },
        {
          B: "Bundle size :",
          C: "",
          D: JSON.parse(localStorage.getItem("title_data")).fg_bundle,
          E: "bars/bundle"
        },
        {
          B: "Cut of length :",
          C: this.title_data,
          D: JSON.parse(localStorage.getItem("title_data")).fg_cut,
          E: "m"
        },
        {
          A: "",
          B: "",
          C: "",
          D: "",
          E: "",
          F: "",
          G: "",
          I: "",
          J: "",
          K: "",
          L: "",
          M: "",
          N: "",
          O: "",
          P: "",
          Q: "",
          R: "",
          S: "",
          T: "",
          U: "",
          V: "",
          W: ""
        },
        //Production Report title
        {
          A: "Production Report",
          B: "",
          C: "",
          D: "",
          E: "",
          F: "",
          G: "",
          I: "",
          J: "",
          K: "",
          L: "",
          M: "",
          N: "",
          O: "",
          P: "",
          Q: "",
          R: "",
          S: "",
          T: "",
          U: "",
          V: "",
          W: ""
        },
        //Production Report header
        {
          A: "Item",
          B: "Billet",
          G: "Product",
          I: "Quantity",
          M: "Miss roll Total",
          R: "Production Loss",
          S: "Product Yield",
          U: "Energy Consumption"
        },
        {
          B: "Heat No",
          C: "Grade",
          D: "Billet Usages",
          I: "ปริมาณผลผลิต",
          U: "ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด"
        },
        {
          D: "Qty",
          E: "STD",
          F: "ACT",
          G: "Size",
          H: "Grade",
          I: "Bundle/Coil",
          J: "Pcs",
          K: "Std Wgt",
          L: "Actual Wgt",
          M: "Return",
          O: "Cobble",
          Q: "Total",
          R: "สูญเสีย",
          S: "STD",
          T: "ACT",
          U: "น้ำมันเตา",
          V: "ไฟฟ้า",
          W: "น้ำมันดีเซล"
        },
        {
          D: "แท่ง",
          E: "(ton)",
          F: "(ton)",
          G: "ขนาด",
          H: "ชั้นคุณภาพ",
          I: "(มัด/ขด)",
          J: "เส้น",
          K: "(ton)",
          L: "(ton)",
          M: "แท่ง",
          N: "(kg)",
          O: "แท่ง",
          P: "(kg)",
          Q: "%",
          R: "(kg)",
          S: "%",
          T: "%",
          U: "litre",
          V: "Kw",
          W: "litre"
        }
      ],
      toolbarOptions: ["ExcelExport"],
      RMD_date: localStorage.getItem("date_data"),
      rmd_date: "",
      billet_grade: "",
      billet_length: "",
      fg_size: "",
      fg_grade: "",
      fg_bundle: "",
      fg_cut: "",
      billet_std: "",
      billet_act: "",
      fg_std_1: "",
      fg_std_2: "",
      title_data: JSON.parse(localStorage.getItem("title_data"))
    };
  },
  methods: {
    myClickEvent($event) {
      //const elem = this.$refs.myBtn;
      this.$refs.grid.click($event);
    },
    clickTest() {
      //document.getElementById("Grid").click();
      console.log("Test");
    },
    //กำหนด Style Header Cell
    toolbarClick(args) {
      if (args.item.id === "Grid_excelexport") {
        // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.excelExport({
          fileName: "ExportTest - " + this.date_data.date + ".xlsx",
          header: {
            headerRow: 3,
            rows: [
              {
                cells: [
                  {
                    colSpan: 2,
                    rowSpan: 3,
                    value: "ZUBBSTEEL",
                    /* hyperlink: {
                      displayText: "Image",
                      target: "https://picsum.photos/id/11/500/300"
                    }, */
                    style: {
                      fontSize: 30,
                      hAlign: "center",
                      vAlign: "center",
                      bold: true,
                      fontColor: "#D50000",
                      //backColor: "#F44336",
                      //underline: true,
                      borders: "5"
                    }
                  },
                  {
                    value: null
                  },
                  {
                    colSpan: 17,
                    rowSpan: 3,
                    value:
                      "รายงานผลการรีดเหล็กประจำวัน       " +
                      this.date_data.fact,
                    style: {
                      fontSize: 20,
                      hAlign: "center",
                      vAlign: "center",
                      bold: true,
                      borders: "5"
                    }
                  }
                ]
              }
            ]
          }
        });
      }
    },
    //กำหนด Style Cell
    excelQueryCellInfo(args) {
      //console.log(this.data_product.length);
      for (let i = 0; i < this.data_delay.length; i++) {
        //console.log(i + ": test");
        if (args.column.field == "A") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center",
            visible: false
          };
          if (args.value == new Date()) {
            args.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center"
            };
          } else if (args.value == "Billet :") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center"
            };
          } else if (args.value === "FG :") {
            args.cell.rowSpan = 4;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center"
            };
          } else if (
            args.value == "Production Report" ||
            args.value == "Delay Report"
          ) {
            args.colSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Item") {
            args.cell.rowSpan = 4;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "ตั้งแต่เวลา") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value === "   ") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (
            args.value == "เวลารวม(นาที)" ||
            args.value == "%" ||
            args.value == "ดีเซล(Litre)" ||
            args.value == "น้ำมันเตา" ||
            args.value == "ไฟฟ้า(Kw)" ||
            args.value == "CV1"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Total") {
            args.colSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Consumption Data") {
            args.colSpan = 10;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "LOSS Report") {
            args.colSpan = 8;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "B") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == this.date) {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value == "Bundle size :" ||
            args.value == "Cut of length :"
          ) {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (args.value == "Billet") {
            args.colSpan = 5;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "Heat No") {
            args.cell.rowSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (
            args.value == "ก่อนจุดเตา" ||
            args.value == "เวลารวม (นาที)"
          ) {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "CV2") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "C") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Grade") {
            args.cell.rowSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "ก่อนรีด") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "PP" || args.value == "Cold Shear") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Production") {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (args.value === " ") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              backColor: "#F44336"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "D") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Billet Usages") {
            args.colSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "หลังรีด") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (
            args.value == "Qty" ||
            args.value == "แท่ง" ||
            args.value == "PD" ||
            args.value == "SCALE"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "E") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "STD" ||
            args.value == "(ton)" ||
            args.value == "MM" ||
            args.value == "หางเหล็ก"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "ใช้จุดเตา") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "Maintenance") {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "F") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "ACT" ||
            args.value == "(ton)" ||
            args.value == "EM" ||
            args.value == "Reject"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "ใช้รีด") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "G") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Product") {
            args.colSpan = 2;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value == "Other") {
            args.colSpan = 6;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (
            args.value == "Size" ||
            args.value == "ขนาด" ||
            args.value == "UTD" ||
            args.value == "TOTAL"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "รวม") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "H") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "Grade" ||
            args.value == "ชั้นคุณภาพ" ||
            args.value == "QA" ||
            args.value == "Rolling" ||
            args.value == "กก." ||
            args.value == "%"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "อัตราการใช้พลังงาน") {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "I") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Quantity" || args.value == "ปริมาณผลผลิต") {
            args.colSpan = 4;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (
            args.value == "Bundle/Coil" ||
            args.value == "(มัด/ขด)" ||
            args.value == "IT" ||
            args.value == "Total"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "J") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "Pcs" ||
            args.value == "เส้น" ||
            args.value == "WHD" ||
            args.value == "ลิตร/ตัน"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "หน่วย") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "K") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "Std Wgt" ||
            args.value == "(ton)" ||
            args.value == "SMD"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "L") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "Actual Wgt" ||
            args.value == "(ton)" ||
            args.value == "Setup"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Production Data") {
            args.colSpan = 6;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (
            args.value == "Production time" ||
            args.value == "Avaliable time" ||
            args.value == "Down time" ||
            args.value == "Net Rolling" ||
            args.value == "Mill Avaliabilty" ||
            args.value == "Rolling speed (BL)" ||
            args.value == "Productivity of Machine" ||
            args.value == "Run Factor"
          ) {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "M") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Miss roll Total") {
            args.colSpan = 5;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value == "No. of Billet") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true,
              vAlign: "center"
            };
          } else if (args.value == "Return") {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "แท่ง") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === " ") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              backColor: "#F44336"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "N") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "(kg)" || args.value == "Return") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "Miss Roll") {
            args.colSpan = 4;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === " ") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              backColor: "#F44336"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "O") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Cobble") {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "แท่ง" || args.value == "Cobble ") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "P") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "BL weight") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center"
            };
          } else if (args.value == "FG Standard weight") {
            args.colSpan = 2;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center"
            };
          } else if (args.value == "(kg)" || args.value == "Heat No") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "Q") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Standard" || args.value == "Actual") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value == "Total" ||
            args.value == "%" ||
            args.value == "Grade"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "R") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "Production Loss" || args.value == "Area") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value == "สูญเสีย" || args.value == "(kg)") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "S") {
          args.style = {
            borders: "5",
            fontSize: 12
          };
          if (
            args.value == "Kgs" ||
            args.value == "Kgs/m" ||
            args.value == "Kgs/bundle"
          ) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (args.value == "Product Yield") {
            args.colSpan = 2;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value == "ปัญหา/รายละเอียด") {
            args.colSpan = 3;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
            /* } else if (args.value == this.data_product[i]._pyield_std) {
            console.log(i + " : Production");
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            }; */
          } else if (args.value == this.data_delay[i]._detail) {
            //console.log(i + " : Delay");
            args.colSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "left"
            };
          } else if (args.value == "STD" || args.value == "%") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "T") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "ACT" || args.value == "%") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "U") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (
            args.value == "Energy Consumption" ||
            args.value == "ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด"
          ) {
            args.colSpan = 3;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "น้ำมันเตา" || args.value == "litre") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "V") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "ไฟฟ้า" || args.value == "Kw") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value === "สาเหตุ") {
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value == this.data_delay[i]._detail) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "left"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
        if (args.column.field == "W") {
          args.style = {
            borders: "5",
            fontSize: 12,
            hAlign: "center"
          };
          if (args.value == "น้ำมันดีเซล" || args.value == "litre") {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              bold: true
            };
          } else if (args.value == "การแก้ไขเบื้องต้น") {
            args.colSpan = 2;
            args.cell.rowSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center",
              vAlign: "center",
              bold: true
            };
          } else if (args.value === this.data_delay[i]._simple_fix) {
            args.colSpan = 2;
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "left"
            };
          } else if (args.value === 0) {
            args.style = {
              borders: "5",
              fontSize: 12,
              hAlign: "center"
            };
          } else if (
            args.value === "" ||
            args.value === null ||
            args.value === undefined
          ) {
            args.style = {
              fontSize: 12,
              hAlign: "center"
            };
          }
        }
      }
    },
    queryCellInfo(args) {
      if (args.column.field == "A") {
        if (args.data["A"] == "Date :") {
          args.cell.bgColor = "#99ffcc";
        } else if (args.data["A"] == "Billet :") {
          args.cell.bgColor = "#ffffb3";
        } else {
          args.cell.bgColor = "#ff704d";
        }
      }
    },
    formatStyle() {
      //
    },
    //Product Report
    async get_ProductReport() {
      this.data_product = JSON.parse(localStorage.getItem("product_report"));
      this.footer_product = JSON.parse(localStorage.getItem("product_footer"));
      //console.log(this.data_test);
      await this.push_ProductData();
      this.push_ProductFooter();
    },
    //Push Product Data
    async push_ProductData() {
      //product data
      for (let i = 0; i < this.data_product.length; i++) {
        this.formatProduct(i);
        this.data[i + 15] = {
          A: this.data_product[i]._no,
          B: this.data_product[i]._b_heat,
          C: this.data_product[i]._b_grade,
          D: this.data_product[i]._b_qty,
          E: this.data_product[i]._b_std,
          F: this.data_product[i]._b_act,
          G: this.data_product[i]._p_size,
          H: this.data_product[i]._p_grade,
          I: this.data_product[i]._q_bundle,
          J: this.data_product[i]._q_pcs,
          K: this.data_product[i]._q_std,
          L: this.data_product[i]._q_act,
          M: this.data_product[i]._m_return_piece,
          N: this.data_product[i]._m_return_kg,
          O: this.data_product[i]._m_cobble_piece,
          P: this.data_product[i]._m_cobble_kg,
          Q: this.data_product[i]._m_total,
          R: this.data_product[i]._ploss_kg,
          S: this.data_product[i]._pyield_std,
          T: this.data_product[i]._pyield_act,
          U: this.data_product[i]._e_stove,
          V: this.data_product[i]._e_elec,
          W: this.data_product[i]._e_diesel
        };
        this.count_product = i + 15;
      }
    },
    //Push Product Footer
    push_ProductFooter() {
      //product footer
      for (let i = 0; i < this.footer_product.length; i++) {
        this.data[i + this.count_product + 1] = {
          A: this.footer_product[i].total,
          B: null,
          C: null,
          D: this.footer_product[i].b_qty,
          E: this.footer_product[i].b_std,
          F: this.footer_product[i].b_act,
          G: null,
          H: null,
          I: this.footer_product[i].q_bundle,
          J: this.footer_product[i].q_pcs,
          K: this.footer_product[i].q_std,
          L: this.footer_product[i].q_act,
          M: this.footer_product[i].m_return_piece,
          N: this.footer_product[i].m_return_kg,
          O: this.footer_product[i].m_cobble_piece,
          P: this.footer_product[i].m_cobble_kg,
          Q: this.footer_product[i].m_total,
          R: this.footer_product[i].ploss_kg,
          S: this.footer_product[i].pyield_std,
          T: this.footer_product[i].pyield_act
        };
        this.count_prof = i + this.count_product + 1;
      }
      //Delay Title
      this.data[this.count_prof + 1] = {
        A: "Delay Report"
      };
      //Delay Header Row 1
      this.data[this.count_prof + 2] = {
        A: "ตั้งแต่เวลา",
        B: "เวลารวม (นาที)",
        C: "Production",
        E: "Maintenance",
        G: "Other",
        M: "No. of Billet",
        N: "Miss Roll",
        R: "Area",
        S: "ปัญหา/รายละเอียด",
        V: "สาเหตุ",
        W: "การแก้ไขเบื้องต้น"
      };
      //Delay Header Row 2
      this.data[this.count_prof + 3] = {
        C: "PP",
        D: "PD",
        E: "MM",
        F: "EM",
        G: "UTD",
        H: "QA",
        I: "IT",
        J: "WHD",
        K: "SMD",
        L: "Setup",
        N: "Return",
        O: "Cobble ",
        P: "Heat No",
        Q: "Grade"
      };
      this.count_delay = this.count_prof + 3;
      this.data.push();
      //console.log(this.count_prof);
      this.get_DelayReport();
    },
    //Delay Report
    async get_DelayReport() {
      this.data_delay = JSON.parse(localStorage.getItem("delay_report"));
      this.footer_delay = JSON.parse(localStorage.getItem("delay_footer"));
      //console.log(this.footer_delay);
      await this.push_DelayData();
      this.push_DelayFooter();
    },
    //Push Delay Data
    async push_DelayData() {
      //product footer
      for (let i = 0; i < this.data_delay.length; i++) {
        this.formatDelay(i);
        this.data[i + this.count_delay + 1] = {
          A: this.data_delay[i]._until,
          B: this.data_delay[i]._time,
          C: this.data_delay[i]._PP,
          D: this.data_delay[i]._PD,
          E: this.data_delay[i]._MM,
          F: this.data_delay[i]._EM,
          G: this.data_delay[i]._o_UTD,
          H: this.data_delay[i]._o_QA,
          I: this.data_delay[i]._o_IT,
          J: this.data_delay[i]._o_WHD,
          K: this.data_delay[i]._o_SMD,
          L: this.data_delay[i]._o_Setup,
          M: this.data_delay[i]._no_billet,
          N: this.data_delay[i]._m_Rerods,
          O: this.data_delay[i]._m_Cobble,
          P: this.data_delay[i]._m_Heat,
          Q: this.data_delay[i]._m_Grade,
          R: this.data_delay[i]._zone,
          S: this.data_delay[i]._detail,
          V: this.data_delay[i]._cause,
          W: this.data_delay[i]._simple_fix
        };
        this.count_def = i + this.count_delay + 1;
      }
      this.data.push();
    },
    //Push Delay Footer
    async push_DelayFooter() {
      //product footer
      for (let i = 0; i < this.footer_delay.length; i++) {
        //console.log(this.footer_delay[i])
        this.data[i + this.count_def + 1] = {
          A: this.footer_delay[i]._until,
          B: this.footer_delay[i]._time,
          C: this.footer_delay[i]._PP,
          D: this.footer_delay[i]._PD,
          E: this.footer_delay[i]._MM,
          F: this.footer_delay[i]._EM,
          G: this.footer_delay[i]._o_UTD,
          H: this.footer_delay[i]._o_QA,
          I: this.footer_delay[i]._o_IT,
          J: this.footer_delay[i]._o_WHD,
          K: this.footer_delay[i]._o_SMD,
          L: this.footer_delay[i]._o_Setup,
          N: this.footer_delay[i]._m_Rerods,
          O: this.footer_delay[i]._m_Cobble
        };
        this.count_consump = i + this.count_def + 2;
      }
      await this.get_ProductData(); //get Production Data
      this.count_loss = this.count_consump + 10;
      this.get_LossReport(); //get LOSS Data
      //LOSS Data
      for (let i = 0; i < this.loss_data.length; i++) {
        this.formatLOSS(i);
        this.data[i + this.count_loss] = {
          A: this.loss_data[i]._cv1,
          B: this.loss_data[i]._cv2,
          C: this.loss_data[i]._coldshear,
          D: this.loss_data[i]._scale,
          E: this.loss_data[i]._irontail,
          F: this.loss_data[i]._reject,
          G: this.loss_data[i]._total,
          H: this.loss_data[i]._unit
        };
      }
      this.data.push();
    },
    async push_Consumption() {
      await this.formatProData();
      //Consumption Title
      this.data[this.count_consump + 1] = {
        A: "Consumption Data",
        L: "Production Data"
      };
      //Consumption Header Row 1
      this.data[this.count_consump + 2] = {
        A: "   ",
        B: "ก่อนจุดเตา",
        C: "ก่อนรีด",
        D: "หลังรีด",
        E: "ใช้จุดเตา",
        F: "ใช้รีด",
        G: "รวม",
        H: "อัตราการใช้พลังงาน",
        J: "หน่วย",
        L: "Production time",
        N: this.product_data.pro_time,
        O: "hr",
        P: " ",
        Q: " "
      };
      //Consumption Header Row 2
      this.data[this.count_consump + 3] = {
        H: "Rolling",
        I: "Total",
        J: " ",
        L: "Avaliable time",
        N: this.product_data.ava_time,
        O: "min",
        P: " ",
        Q: " "
      };
      //Consumption Data Row 1
      this.data[this.count_consump + 4] = {
        A: "ดีเซล(Litre)",
        B: " ",
        C: " ",
        D: " ",
        E: " ",
        F: " ",
        G: " ",
        H: " ",
        I: " ",
        J: "ลิตร/ตัน",
        L: "Down time",
        N: this.product_data.down_time,
        O: "min",
        P: this.product_data.per_downtime,
        Q: "%"
      };
      //Consumption Data Row 2
      this.data[this.count_consump + 5] = {
        A: "น้ำมันเตา",
        B: " ",
        C: " ",
        D: " ",
        E: " ",
        F: " ",
        G: " ",
        H: " ",
        I: " ",
        J: "ลิตร/ตัน",
        L: "Net Rolling",
        N: this.product_data.net_roll,
        O: "min",
        P: this.product_data.per_netroll,
        Q: "%"
      };
      //Consumption Data Row 3
      this.data[this.count_consump + 6] = {
        A: "ไฟฟ้า(Kw)",
        B: " ",
        C: " ",
        D: " ",
        E: " ",
        F: " ",
        G: " ",
        H: " ",
        I: " ",
        J: "ลิตร/ตัน",
        L: "Mill Avaliabilty",
        N: this.product_data.mill_ava,
        O: "%",
        P: " ",
        Q: " "
      };
      //Production Data
      this.data[this.count_consump + 7] = {
        L: "Rolling speed (BL)",
        N: this.product_data.roll_speed,
        O: "ton/hr",
        P: " ",
        Q: " "
      };
      //LOSS Title
      this.data[this.count_consump + 8] = {
        A: "LOSS Report",
        L: "Productivity of Machine",
        N: this.product_data.pro_machine,
        O: "ton/hr",
        P: " ",
        Q: " "
      };
      //LOSS header
      this.data[this.count_consump + 9] = {
        A: "CV1",
        B: "CV2",
        C: "Cold Shear",
        D: "SCALE",
        E: "หางเหล็ก",
        F: "Reject",
        G: "TOTAL",
        H: " ",
        L: "Run Factor",
        N: this.product_data.run_factor,
        O: "%",
        P: " ",
        Q: " "
      };
    },
    //LOSS Report
    get_LossReport() {
      this.loss_data = JSON.parse(localStorage.getItem("loss_report"));
      //console.log(this.loss_data);
    },
    //Production Data
    async get_ProductData() {
      setTimeout(
        () => (
          (this.product_data = JSON.parse(
            localStorage.getItem("product_data")
          )),
          //console.log(this.product_data),
          this.push_Consumption() //get Consumption Data
        ),
        1000
      );
    },
    //format Production Report
    formatProduct(i) {
      if (
        this.data_product[i]._pyield_act == null ||
        this.data_product[i]._pyield_act == ""
      ) {
        this.data_product[i]._pyield_act = " ";
      }
    },
    //format Delay Report
    formatDelay(i) {
      if (this.data_delay[i]._PP == null) {
        this.data_delay[i]._PP = " ";
      }
      if (this.data_delay[i]._PD == null) {
        this.data_delay[i]._PD = " ";
      }
      if (this.data_delay[i]._MM == null) {
        this.data_delay[i]._MM = " ";
      }
      if (this.data_delay[i]._EM == null) {
        this.data_delay[i]._EM = " ";
      }
      if (this.data_delay[i]._o_UTD == null) {
        this.data_delay[i]._o_UTD = " ";
      }
      if (this.data_delay[i]._o_QA == null) {
        this.data_delay[i]._o_QA = " ";
      }
      if (this.data_delay[i]._o_IT == null) {
        this.data_delay[i]._o_IT = " ";
      }
      if (this.data_delay[i]._o_WHD == null) {
        this.data_delay[i]._o_WHD = " ";
      }
      if (this.data_delay[i]._o_SMD == null) {
        this.data_delay[i]._o_SMD = " ";
      }
      if (this.data_delay[i]._o_Setup == null) {
        this.data_delay[i]._o_Setup = " ";
      }
      if (this.data_delay[i]._no_billet == null) {
        this.data_delay[i]._no_billet = " ";
      }
      if (this.data_delay[i]._m_Rerods == null) {
        this.data_delay[i]._m_Rerods = " ";
      }
      if (this.data_delay[i]._m_Cobble == null) {
        this.data_delay[i]._m_Cobble = " ";
      }
      if (this.data_delay[i]._m_Heat == null) {
        this.data_delay[i]._m_Heat = " ";
      }
      if (this.data_delay[i]._m_Grade == null) {
        this.data_delay[i]._m_Grade = " ";
      }
      if (this.data_delay[i]._simple_fix == null) {
        this.data_delay[i]._simple_fix = " ";
      }
    },
    //format LOSS Report
    formatLOSS(i) {
      if (this.loss_data[i]._cv1 == null) {
        this.loss_data[i]._cv1 = " ";
      }
      if (this.loss_data[i]._cv2 == null) {
        this.loss_data[i]._cv2 = " ";
      }
      if (this.loss_data[i]._coldshear == null) {
        this.loss_data[i]._coldshear = " ";
      }
      if (this.loss_data[i]._scale == null) {
        this.loss_data[i]._scale = " ";
      }
      if (this.loss_data[i]._irontail == null) {
        this.loss_data[i]._irontail = " ";
      }
      if (this.loss_data[i]._reject == null) {
        this.loss_data[i]._reject = " ";
      }
      if (this.loss_data[i]._total == null) {
        this.loss_data[i]._total = " ";
      }
      if (this.loss_data[i]._unit == null) {
        this.loss_data[i]._unit = " ";
      }
    },
    //format Production Data
    formatProData() {
      if (this.product_data.pro_time == null) {
        this.product_data.pro_time = " ";
      }
      if (this.product_data.ava_time == null) {
        this.product_data.ava_time = " ";
      }
      if (this.product_data.down_time == null) {
        this.product_data.down_time = " ";
      }
      if (this.product_data.per_downtime == null) {
        this.product_data.per_downtime = " ";
      }
      if (this.product_data.net_roll == null) {
        this.product_data.net_roll = " ";
      }
      if (this.product_data.per_netroll == null) {
        this.product_data.per_netroll = " ";
      }
      if (this.product_data.mill_ava == null) {
        this.product_data.mill_ava = " ";
      }
      if (this.product_data.roll_speed == null) {
        this.product_data.roll_speed = " ";
      }
      if (this.product_data.pro_machine == null) {
        this.product_data.pro_machine = " ";
      }
      if (this.product_data.run_factor == null) {
        this.product_data.run_factor = " ";
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  },
  created() {
    this.get_ProductReport();
    //this.get_DelayReport();
    this.date_data = JSON.parse(localStorage.getItem("date_data"));
    //this.title_data = JSON.parse(localStorage.getItem("title_data"));
    //console.log(this.title_data);
  },
  computed: {
    //แสดงข้อมูลตามวันที่ และ โรงรีด
    data_Now() {
      if (this.date != null || this.fact != null) {
        this.get_ProductReport();
        window.location.reload(1)
        //this.get_DelayReport();
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        //this.date_data = JSON.parse(localStorage.getItem("date_data"));
        return true;
      } else {
        return false;
      }
    },
    data_change() {
      if (this.date != null || this.fact != null) {
        //window.location.reload(1)
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
/*  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css"; */
.e-grid .e-gridheader {
  display: none;
}
.e-grid .e-gridcontent {
  display: none;
}
</style>
