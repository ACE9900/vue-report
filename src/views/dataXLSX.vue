<template>
  <v-main>
    <div v-if="data_Now">
      <v-btn color="" elevation="2" outlined rounded @click="onexport">
        Excel download
      </v-btn>
    </div>
  </v-main>
</template>

<script>
import XLSX from "xlsx";

export default {
  props: ["fact", "date"],
  data: () => ({
    Datas: {
      data: [
        //Image
        {
          Image: "Item",
          "": "Billet",
          " ": "1",
          "  ": "2",
          "   ": "3",
          "    ": "4",
          "     ": "5",
          "      ": "6",
          "       ": "7",
          "        ": "8",
          "         ": "9",
          "          ": "10",
          "           ": "11",
          "            ": "12",
          "             ": "13",
          "              ": "14",
          "               ": "15",
          "                ": "16",
          "                 ": "17",
          "                  ": "18",
          "                   ": "19",
          "                    ": "20",
          "                     ": "21",
          "                      ": "22",
          "                       ": "23",
          "                        ": "24",
          "                         ": "25"
        },
        {
          Image: "Item"
        },
        //เรียน
        {
          Image: "เรียน"
        },
        //Date
        {
          Image: "Date :",
          "": "18/02/2564"
        },
        //Billet
        {
          Image: "Billet :",
          "": "Grade :",
          " ": "M12"
        },
        { "": "Length :", " ": "12", "  ": "m" },
        //FG
        { Image: "FG :", "": "Size :", " ": "5.5mm." },
        { "": "Grade :", " ": "SWRM12" },
        { "": "Bundle size :", "  ": "0", "   ": "bars/bundle" },
        { "": "Cut of Length :", "  ": "", "   ": "m" },
        //
        {
          Image: ""
        },
        //Production Report
        {
          Image: "Production Report"
        },
        //Production Report - Data
        {
          Image: "Item",
          "": "Billet",
          "     ": "Product",
          "       ": "Quantity",
          "           ": "Miss roll Total",
          "                ": "Production Loss(kgs)",
          "                 ": "Product Yield(%)",
          "                   ": "Energy Consumption"
        },
        {
          Image: "Item",
          "": "Heat No",
          " ": "Grade",
          "  ": "Billet Usage"
        },
        {
          Image: "Item",
          "": "Heat No",
          " ": "Grade",
          "  ": "QTY",
          "   ": "STD",
          "    ": "ACT"
        },
        {
          Image: "Item",
          "": "Heat No",
          " ": "Grade",
          "  ": "แท่ง",
          "   ": "(ton)",
          "    ": "(ton)"
          /* ".": "Product",
          "..": "Quantity",
          "...": "Miss roll Total" */
        }
        //{ Image: "FG :", "..": "แท่ง", "...": "(ton)", "....": "(ton)" },
        //{ name: "pig", category: "animal" }
      ]
    },
    data_table1: [
      {
        _no: "1",
        //Billet
        _b_heat: 6400211,
        _b_grade: "SR24",
        _b_qty: 4,
        _b_std: 0,
        _b_act: 8461,
        //Product
        _p_size: "AG 40x40x6",
        _p_grade: "SS400",
        //Quantity
        _q_bundle: 4,
        _q_pcs: 403,
        _q_std: 0,
        _q_act: 8195,
        //Miss roll Total
        _m_cobble_piece: 0,
        _m_cobble_kg: 0,
        _m_return_piece: 0,
        _m_return_kg: 0,
        _m_total: 0.0,
        //Production Loss(kgs)
        _ploss_kg: 266,
        //Product Yield(%)
        _pyield_std: 0,
        _pyield_act: 96.86,
        //Energy Consumption
        _e_stove: 375,
        _e_elec: 716,
        _e_diesel: 0
      },
      {
        _no: "2",
        //Billet
        _b_heat: 6400212,
        _b_grade: "SR24",
        _b_qty: 23,
        _b_std: 0,
        _b_act: 49078,
        //Product
        _p_size: "AG 40x40x6",
        _p_grade: "SS400",
        //Quantity
        _q_bundle: 22,
        _q_pcs: 2244,
        _q_std: 0,
        _q_act: 45869,
        //Miss roll Total
        _m_cobble_piece: 0,
        _m_cobble_kg: 0,
        _m_return_piece: 0,
        _m_return_kg: 0,
        _m_total: 0.0,
        //Production Loss(kgs)
        _ploss_kg: 3209,
        //Product Yield(%)
        _pyield_std: 0,
        _pyield_act: 93.46,
        //Energy Consumption
        _e_stove: 2153,
        _e_elec: 4114,
        _e_diesel: 0
      },
      {
        _no: "3",
        //Billet
        _b_heat: 6400211,
        _b_grade: "SR24",
        _b_qty: 4,
        _b_std: 0,
        _b_act: 8461,
        //Product
        _p_size: "AG 40x40x6",
        _p_grade: "SS400",
        //Quantity
        _q_bundle: 4,
        _q_pcs: 403,
        _q_std: 0,
        _q_act: 8195,
        //Miss roll Total
        _m_cobble_piece: 0,
        _m_cobble_kg: 0,
        _m_return_piece: 0,
        _m_return_kg: 0,
        _m_total: 0.0,
        //Production Loss(kgs)
        _ploss_kg: 266,
        //Product Yield(%)
        _pyield_std: 0,
        _pyield_act: 96.86,
        //Energy Consumption
        _e_stove: 375,
        _e_elec: 716,
        _e_diesel: 0
      }
    ],
    /* data_test: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" },
      { text: "5" },
      { text: "6" },
      { text: "7" }
    ],
    data_test2: [
      { text: "8" },
      { text: "9" },
      { text: "10" },
      { text: "11" },
      { text: "12" },
      { text: "13" },
      { text: "14" }
    ] */
    data_test: [],
    data_test2: [],
    footer_test: [],
    product_data: [],
    loss_data: [],
    //count row
    count_product: 0, //product data
    count_prof: 0, //product footer
    count_delay: 0, //product data
    count_def: 0 //product footer
  }),
  methods: {
    onexport() {
      //console.log(this.Datas.data);
      //var ws = XLSX.utils.json_to_sheet(this.Datas.data);
      var wb = XLSX.utils.book_new();
      var aoa = [
        ["Main information", null], // pay special attention to reserve 2 nulls behind the merged place
        [null, "Gender"],
        [null, "Male"],
        //เรียน
        ["เรียน", "Female"],
        //Grade and Size
        ["Date :", new Date(), null, null],
        ["Billet :", "Grade :", null, null],
        [null, "Length", 22, null],
        ["FG :", "Size :", 22, null],
        [null, "Grade :", 22, null],
        [null, "Bundle size :", null, 22],
        [null, "Cut of Length :", null, 22],
        [null, null, null, null],
        //Production Report
        ["Production Report"],
        ["Item", "Billet", null, null, null, null, "Product", null, "Quantity", null, null, null, "Miss roll Total", null, null, null, null, "Production Loss(kgs)", "Production Yield(%)", null, "Enegy Consumption", null, null],
        [null, "Heat No", "Grade", "Billet Usages", null, null, null, null, "ปริมาณผลผลิต", null, null, null, null, null, null, null, null, null, null, null, "ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด", null, null],
        [null, null, null, "QTY", "STD", "ACT", "Size", "Grade", "Bundle/Coil", "Pcs", "Std Wgt", "Actual Wgt", "Return", null, "Cobble", null, "Total", "สูญเสีย", "STD", "ACT", "น้ำมันเตา", "ไฟฟ้า", "น้ำมันดีเซล"],
        [null, null, null, "แท่ง", "(ton)", "(ton)", "ขนาด", "ชั้นคุณภาพ", "(มัด/ขด)", "เส้น", "(ton)", "(ton)", "แท่ง", "(kg)", "แท่ง", "(kg)", "%", "(kg)", "%", "%", "litre", "Kw", "Litre"]
      ];
      //product data
      for (let i = 0; i < this.data_test.length; i++) {
        aoa[i + 17] = [
          this.data_test[i]._no,
          this.data_test[i]._b_heat,
          this.data_test[i]._b_grade,
          this.data_test[i]._b_qty,
          this.data_test[i]._b_std,
          this.data_test[i]._b_act,
          this.data_test[i]._p_size,
          this.data_test[i]._p_grade,
          this.data_test[i]._q_bundle,
          this.data_test[i]._q_pcs,
          this.data_test[i]._q_std,
          this.data_test[i]._q_act,
          this.data_test[i]._m_return_piece,
          this.data_test[i]._m_return_kg,
          this.data_test[i]._m_cobble_piece,
          this.data_test[i]._m_cobble_kg,
          this.data_test[i]._m_total,
          this.data_test[i]._ploss_kg,
          this.data_test[i]._pyield_std,
          this.data_test[i]._pyield_act,
          this.data_test[i]._e_stove,
          this.data_test[i]._e_elec,
          this.data_test[i]._e_diesel
        ];
        this.count_product = i;
      }
      //product footer
      for (let i = 0; i < this.footer_test.length; i++) {
        aoa[i + this.count_product + 18] = [
          this.footer_test[i].total,
          null,
          null,
          this.footer_test[i].b_qty,
          this.footer_test[i].b_std,
          this.footer_test[i].b_act,
          null,
          null,
          this.footer_test[i].q_bundle,
          this.footer_test[i].q_pcs,
          this.footer_test[i].q_std,
          this.footer_test[i].q_act,
          this.footer_test[i].m_return_piece,
          this.footer_test[i].m_return_kg,
          this.footer_test[i].m_cobble_piece,
          this.footer_test[i].m_cobble_kg,
          this.footer_test[i].m_total,
          this.footer_test[i].ploss_kg,
          this.footer_test[i].pyield_std,
          this.footer_test[i].pyield_act
        ]
        this.count_prof = i + this.count_product + 17
      }
      //Delay Report
      aoa[this.count_prof + 2] = ["Delay Report"];
      aoa[this.count_prof + 3] = ["ตั้งแต่เวลา", "เวลารวม \n(นาที)", "Production", null, "MainTenance", null, "Other", null, null, null, null, null, "No. of Billet", "Miss Roll", null, null, null, "Area", "ปัญหา/รายละเอียด", null, null, "สาเหตุ", "การแก้ไขเบื้องต้น"];
      aoa[this.count_prof + 4] = [null, null, "PP", "PD", "MM", "EM", "UTD", "QA", "IT", "WHD", "SMD", "Setup", null, "Return", "Cobble", "Heat No", "Grade"];
      this.count_delay = this.count_prof + 5
      for (let i = 0; i < this.data_test2.length; i++) {
        aoa[i + this.count_delay] = [
          this.data_test2[i]._until,
          this.data_test2[i]._time,
          this.data_test2[i]._PP,
          this.data_test2[i]._PD,
          this.data_test2[i]._MM,
          this.data_test2[i]._EM,
          this.data_test2[i]._o_UTD,
          this.data_test2[i]._o_QA,
          this.data_test2[i]._o_IT,
          this.data_test2[i]._o_WHD,
          this.data_test2[i]._o_SMD,
          this.data_test2[i]._o_Setup,
          this.data_test2[i]._no_billet,
          this.data_test2[i]._m_Rerods,
          this.data_test2[i]._m_Cobble,
          this.data_test2[i]._m_Heat,
          this.data_test2[i]._m_Grade,
          this.data_test2[i]._zone,
          this.data_test2[i]._detail,
          null,
          null,
          this.data_test2[i]._cause,
          this.data_test2[i]._simple_fix
        ]
        this.count_def = i + this.count_delay + 1
      }
      //console.log(this.count_def)
      //aoa[this.count_prof + 2] = ["Name", "Gender", "Age", "Registration Time"];
      var sheet = XLSX.utils.aoa_to_sheet(aoa);
      sheet["!merges"] = [
        //Logo Zubb
        { s: { r: 0, c: 0 }, e: { r: 2, c: 1 } },
        //เรียน
        { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } },
        //Date / Billet / FG
        { s: { r: 4, c: 1 }, e: { r: 4, c: 2 } },
        { s: { r: 5, c: 0 }, e: { r: 6, c: 0 } },
        { s: { r: 7, c: 0 }, e: { r: 10, c: 0 } },
        { s: { r: 9, c: 1 }, e: { r: 9, c: 2 } },
        { s: { r: 10, c: 1 }, e: { r: 10, c: 2 } },
        //Production Report
        { s: { r: 12, c: 0 }, e: { r: 12, c: 2 } },
        //Production Report - Data
        { s: { r: 13, c: 0 }, e: { r: 16, c: 0 } }, //Item
        //Billet - Data
        { s: { r: 13, c: 1 }, e: { r: 13, c: 5 } }, //Billet
        { s: { r: 14, c: 1 }, e: { r: 16, c: 1 } }, //Heat No
        { s: { r: 14, c: 2 }, e: { r: 16, c: 2 } }, //Grade
        { s: { r: 14, c: 3 }, e: { r: 14, c: 5 } }, //Billet Usage
        //Product - Data
        { s: { r: 13, c: 6 }, e: { r: 14, c: 7 } }, //Product
        //Quantity - Data
        { s: { r: 13, c: 8 }, e: { r: 13, c: 11 } }, //Quantity
        { s: { r: 14, c: 8 }, e: { r: 14, c: 11 } }, //ปริมาณผลผลิต
        //Miss roll Total - Data
        { s: { r: 13, c: 12 }, e: { r: 14, c: 16 } }, //Miss roll Total
        { s: { r: 15, c: 12 }, e: { r: 15, c: 13 } }, //Return
        { s: { r: 15, c: 14 }, e: { r: 15, c: 15 } }, //Cobble
        //Production Loss(kgs) - Data
        { s: { r: 13, c: 17 }, e: { r: 14, c: 17 } }, //Production Loss(kgs)
        //Product Yield(%) - Data
        { s: { r: 13, c: 18 }, e: { r: 14, c: 19 } }, //Product Yield(%)
        //Energy Consumption - Data
        { s: { r: 13, c: 20 }, e: { r: 13, c: 22 } }, //Energy Consumption
        { s: { r: 14, c: 20 }, e: { r: 14, c: 22 } }, //ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด
        //Summary Production Footer
        {
          s: { r: this.count_prof, c: 0 },
          e: { r: this.count_prof, c: 2 }
        },
        {
          s: { r: this.count_prof + 1, c: 0 },
          e: { r: this.count_prof + 1, c: 2 }
        },
        //Delay Report
        {
          s: { r: this.count_prof + 2, c: 0 },
          e: { r: this.count_prof + 2, c: 2 }
        },
        //Delay Report - Data
        {
          s: { r: this.count_prof + 3, c: 0 },
          e: { r: this.count_prof + 4, c: 0 } //ตั้งแต่เวลา
        },
        {
          s: { r: this.count_prof + 3, c: 1 },
          e: { r: this.count_prof + 4, c: 1 } //เวลารวม
        },
        //Production - Data
        {
          s: { r: this.count_prof + 3, c: 2 },
          e: { r: this.count_prof + 3, c: 3 }
        },
        //MainTenance
        {
          s: { r: this.count_prof + 3, c: 4 },
          e: { r: this.count_prof + 3, c: 5 }
        },
        //Other
        {
          s: { r: this.count_prof + 3, c: 6 },
          e: { r: this.count_prof + 3, c: 11 }
        },
        //No. of Billet
        {
          s: { r: this.count_prof + 3, c: 12 },
          e: { r: this.count_prof + 4, c: 12 }
        },
        //Miss Roll
        {
          s: { r: this.count_prof + 3, c: 13 },
          e: { r: this.count_prof + 3, c: 16 }
        },
        //Area
        {
          s: { r: this.count_prof + 3, c: 17 },
          e: { r: this.count_prof + 4, c: 17 }
        },
        //ปัญหา/รายละเอียด
        {
          s: { r: this.count_prof + 3, c: 18 },
          e: { r: this.count_prof + 4, c: 20 }
        },
        //สาเหตุ
        {
          s: { r: this.count_prof + 3, c: 21 },
          e: { r: this.count_prof + 4, c: 21 }
        },
        //การแก้ไขเบื้องต้น
        {
          s: { r: this.count_prof + 3, c: 22 },
          e: { r: this.count_prof + 4, c: 23 }
        },
      ];
      /* for(let i = 0;i < this.data_test2.length;i++){
        //console.log(i + this.count_delay)
        sheet["!merges"] = [
          //ปัญหา/รายละเอียด
          {
            s: { r: i + this.count_delay, c: 18 },
            e: { r: i + this.count_delay, c: 20 }
          },
          //ปัญหา/รายละเอียด
          {
            s: { r: i + this.count_delay, c: 22 },
            e: { r: i + this.count_delay, c: 23 }
          },
        ]
      } */
      
      sheet["A5"] = {
        font: {
          sz: 20,
          bold: true,
          color: {
            rgb: "FFFFAA00"
          }
        },
        alignment: {
          horizontal: "center",
          vertical: "center",
          wrap_text: true
        }
      };
      sheet[
        XLSX.utils.encode_cell({
          c: 1,
          r: 4
        })
      ] = {
        //s: { style: "thin", color: "FFFFAA00" }
        //f: { font: { sz: "20", bold: true } },
        //s: '=cellStyles(font: { "size=20","bold=true" })'
        f: '=HYPERLINK("http://www.google.com","Google")'
      };
      //Control cell width
      sheet["!cols"] = [
        {
          wpx: 50 // A
        },
        {
          wpx: 70 // B
        },
        {
          wpx: 50 // C
        },
        {
          wpx: 50 // D
        },
        {
          wpx: 50 // E
        },
        {
          wpx: 50 // F
        },
        {
          wpx: 70 // G
        },
        {
          wpx: 60 // H
        },
        {
          wpx: 60 // I
        },
        {
          wpx: 50 // J
        },
        {
          wpx: 50 // K
        },
        {
          wpx: 60 // L
        },
        {
          wpx: 70 // M
        },
        {
          wpx: 50 // N
        },
        {
          wpx: 50 // O
        },
        {
          wpx: 50 // P
        },
        {
          wpx: 50 // Q
        },
        {
          wpx: 70 // R
        },
        {
          wpx: 60 // S
        },
        {
          wpx: 60 // T
        },
        {
          wpx: 60 // U
        },
        {
          wpx: 60 // V
        },
        {
          wpx: 60 // W
        },
      ]; //Cell column width
      //console.log(sheet);
      XLSX.utils.book_append_sheet(wb, sheet, "animals");
      XLSX.writeFile(wb, "book.xlsx" /* , { cellStyles: true } */);
    },
    get_ProductReport() {
      setTimeout(
        () => (
          (this.data_test = JSON.parse(localStorage.getItem("product_report"))),
          (this.footer_test = JSON.parse(
            localStorage.getItem("product_footer")
          )) //, console.log(this.data_test)
        ),
        2000
      );
    },
    get_DelayReport() {
      setTimeout(
        () =>
          (this.data_test2 = JSON.parse(localStorage.getItem("delay_report"))),
        2000
      );
    },
    get_LossReport() {
      setTimeout(
        () =>
          (this.loss_data = JSON.parse(localStorage.getItem("loss_report"))),
        2000
      );
    },
    get_ProductData() {
      setTimeout(
        () => (
          (this.product_data = JSON.parse(
            localStorage.getItem("product_data")
          )[0]),
          console.log(this.product_data)
        ),
        3000
      );
    }
  },
  computed: {
    //แสดงข้อมูลตามวันที่ และ โรงรีด
    data_Now() {
      if (this.date != null || this.fact != null) {
        this.get_ProductReport();
        this.get_DelayReport();
        this.get_LossReport();
        this.get_ProductData();
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
