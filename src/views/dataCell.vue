<template>
  <v-main>
    <div v-if="data_Now">
      <v-btn elevation="2" outlined rounded @click="onexport">
        Excel download
        <table id="sheetjs" hidden v-if="get_ProductReport">
          <tr>
            <th colspan="2" rowspan="3">Zubb Steel</th>
            <th colspan="17" rowspan="3">รายงานผลการรีดเหล็กประจำวัน RMD7</th>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <th>เรียน</th>
          </tr>
          <tr>
            <th>Date :</th>
            <th colspan="2">18/02/2564</th>
            <th v-for="i in 12" :key="i"></th>
            <th rowspan="3">BL weight :</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th rowspan="2">Billet :</th>
            <th>Grade :</th>
            <th>M12</th>
            <th v-for="i in 12" :key="i"></th>
            <th>Standard :</th>
            <th></th>
            <th>Kgs</th>
          </tr>
          <tr>
            <th>Length :</th>
            <th>12</th>
            <th>m</th>
            <th v-for="i in 11" :key="i"></th>
            <th>Actual :</th>
            <th></th>
            <th>Kgs</th>
          </tr>
          <tr>
            <th rowspan="4">FG :</th>
            <th>Size :</th>
            <th>5.5mm.</th>
            <th v-for="i in 12" :key="i"></th>
            <th colspan="2" rowspan="2">FG Standard weight :</th>
            <th>Coil</th>
            <th>Kgs/m</th>
          </tr>
          <tr>
            <th>Grade :</th>
            <th>SWRM12</th>
            <th v-for="i in 12" :key="i"></th>
            <th>Coil</th>
            <th>Kgs/bundle</th>
          </tr>
          <tr>
            <th colspan="2">Bundle size :</th>
            <th>0</th>
            <th>bars/bundle</th>
          </tr>
          <tr>
            <th colspan="2">Cut of Length :</th>
            <th></th>
            <th>m</th>
          </tr>
          <tr></tr>
          <tr>
            <th colspan="3">Production Report</th>
          </tr>
          <tr>
            <th rowspan="4">Item</th>
            <th colspan="5">Billet</th>
            <th colspan="2" rowspan="2">Product</th>
            <th colspan="4">Quantity</th>
            <th colspan="5" rowspan="2">Miss roll Total</th>
            <th rowspan="2">Production Loss(kgs)</th>
            <th colspan="2" rowspan="2">Product Yield(%)</th>
            <th colspan="3">Energy Consumption</th>
          </tr>
          <tr>
            <th rowspan="3">Heat No</th>
            <th rowspan="3">Grade</th>
            <th colspan="3">Billet Usage</th>
            <th colspan="4">ปริมาณผลผลิต</th>
            <th colspan="3">ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด</th>
          </tr>
          <tr>
            <th>QTY</th>
            <th>STD</th>
            <th>ACT</th>
            <th>Size</th>
            <th>Grade</th>
            <th>Bundle/Coil</th>
            <th>Pcs</th>
            <th>Std Wgt</th>
            <th>Actual Wgt</th>
            <th colspan="2">Return</th>
            <th colspan="2">Cobble</th>
            <th>Total</th>
            <th>สูญเสีย</th>
            <th>STD</th>
            <th>ACT</th>
            <th>น้ำมันเตา</th>
            <th>ไฟฟ้า</th>
            <th>น้ำมันดีเซล</th>
          </tr>
          <tr>
            <th>แท่ง</th>
            <th>(ton)</th>
            <th>(ton)</th>
            <th>ขนาด</th>
            <th>ชั้นคุณภาพ</th>
            <th>(มัด/ขด)</th>
            <th>เส้น</th>
            <th>(ton)</th>
            <th>(ton)</th>
            <th>แท่ง</th>
            <th>(kg)</th>
            <th>แท่ง</th>
            <th>(kg)</th>
            <th>%</th>
            <th>(kg)</th>
            <th>%</th>
            <th>%</th>
            <th>litre</th>
            <th>Kw</th>
            <th>litre</th>
          </tr>
          <tr v-for="item in data_test" :key="item._no">
            <td>{{ item._no }}</td>
            <td>{{ item._b_heat }}</td>
            <td>{{ item._b_grade }}</td>
            <td>{{ item._b_qty }}</td>
            <td>{{ item._b_std }}</td>
            <td>{{ item._b_act }}</td>
            <td>{{ item._p_size }}</td>
            <td>{{ item._p_grade }}</td>
            <td>{{ item._q_bundle }}</td>
            <td>{{ item._q_pcs }}</td>
            <td>{{ item._q_std }}</td>
            <td>{{ item._q_act }}</td>
            <td>{{ item._m_return_piece }}</td>
            <td>{{ item._m_return_kg }}</td>
            <td>{{ item._m_cobble_piece }}</td>
            <td>{{ item._m_cobble_kg }}</td>
            <td>{{ item._m_total }}</td>
            <td>{{ item._ploss_kg }}</td>
            <td>{{ item._pyield_std }}</td>
            <td>{{ item._pyield_act }}</td>
            <td>{{ item._e_stove }}</td>
            <td>{{ item._e_elec }}</td>
            <td>{{ item._e_diesel }}</td>
          </tr>
          <!-- <tr>
            <th colspan="3">Total</th>
          </tr> -->
          <tr v-for="item in footer_test" :key="item.total">
            <td colspan="3">{{ item.total }}</td>
            <td>{{ item.b_qty }}</td>
            <td>{{ item.b_std }}</td>
            <td>{{ item.b_act }}</td>
            <td>{{ item.q_bundle }}</td>
            <td>{{ item.q_pcs }}</td>
            <td>{{ item.q_std }}</td>
            <td>{{ item.q_act }}</td>
            <td>{{ item.m_return_piece }}</td>
            <td>{{ item.m_return_kg }}</td>
            <td>{{ item.m_cobble_piece }}</td>
            <td>{{ item.m_cobble_kg }}</td>
            <td>{{ item.m_total }}</td>
            <td>{{ item.ploss_kg }}</td>
            <td>{{ item.pyield_std }}</td>
            <td>{{ item.pyield_act }}</td>
          </tr>
          <tr></tr>
          <tr>
            <th colspan="3" class="red--text">Delay Report</th>
          </tr>
          <tr>
            <th rowspan="2">ตั้งแต่เวลา</th>
            <th rowspan="2">เวลารวม (นาที)</th>
            <th colspan="2">Production</th>
            <th colspan="2">MainTenance</th>
            <th colspan="6">Other</th>
            <th rowspan="2">No. of Billet</th>
            <th colspan="4">Miss Roll</th>
            <th rowspan="2">Area</th>
            <th rowspan="2">ปัญหา/รายละเอียด</th>
            <th rowspan="2">สาเหตุ</th>
            <th rowspan="2">การแก้ไขเบื้องต้น</th>
          </tr>
          <tr>
            <th>PP</th>
            <th>PD</th>
            <th>MM</th>
            <th>EM</th>
            <th>UTD</th>
            <th>QA</th>
            <th>IT</th>
            <th>WHD</th>
            <th>SMD</th>
            <th>Setup</th>
            <th>Return</th>
            <th>Cobble</th>
            <th>Heat No</th>
            <th>Grade</th>
          </tr>
          <tr v-for="item in data_test2" :key="item._until">
            <td width="50%">{{ item._until }}</td>
            <td>{{ item._time }}</td>
            <td>{{ item._PP }}</td>
            <td>{{ item._PD }}</td>
            <td>{{ item._MM }}</td>
            <td>{{ item._EM }}</td>
            <td>{{ item._o_UTD }}</td>
            <td>{{ item._o_QA }}</td>
            <td>{{ item._o_IT }}</td>
            <td>{{ item._o_WHD }}</td>
            <td>{{ item._o_SMD }}</td>
            <td>{{ item._o_Setup }}</td>
            <td>{{ item._no_billet }}</td>
            <td>{{ item._m_Rerods }}</td>
            <td>{{ item._m_Cobble }}</td>
            <td>{{ item._m_Heat }}</td>
            <td>{{ item._m_Grade }}</td>
            <td>{{ item._zone }}</td>
            <td>{{ item._detail }}</td>
            <td>{{ item._cause }}</td>
            <td>{{ item._simple_fix }}</td>
          </tr>
          <tr>
            <th>เวลารวม(นาที)</th>
          </tr>
          <tr>
            <th>%</th>
          </tr>
          <tr></tr>
          <tr>
            <th colspan="10" class="red--text">Consumption Data</th>
            <th></th>
            <th colspan="6" class="red--text">Production Data</th>
          </tr>
          <tr>
            <th rowspan="2"></th>
            <th rowspan="2">ก่อนจุดเตา</th>
            <th rowspan="2">ก่อนรีด</th>
            <th rowspan="2">หลังรีด</th>
            <th rowspan="2">ใช้จุดเตา</th>
            <th rowspan="2">ใช้รีด</th>
            <th rowspan="2">รวม</th>
            <th colspan="2">อัตราการใช้พลังงาน</th>
            <th rowspan="2">หน่วย</th>
            <th></th>
            <th>Production time</th>
            <th>{{ product_data.pro_time }}</th>
            <th>hr</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Rolling</th>
            <th>Total</th>
            <th></th>
            <th>Available time</th>
            <th>{{ product_data.ava_time }}</th>
            <th>min</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>ดีเซล(Lirte)</th>
            <th v-for="i in 8" :key="i"></th>
            <th>ลิตร/ตัน</th>
            <th></th>
            <th>Down time</th>
            <th>{{ product_data.down_time }}</th>
            <th>min</th>
            <th>{{ product_data.per_downtime }}</th>
            <th>%</th>
            89.2
          </tr>
          <tr>
            <th>น้ำมันเตา(Lirte)</th>
            <th v-for="i in 8" :key="i"></th>
            <th>ลิตร/ตัน</th>
            <th></th>
            <th>Net Rolling</th>
            <th>{{ product_data.net_roll }}</th>
            <th>min</th>
            <th>{{ product_data.per_netroll }}</th>
            <th>%</th>
          </tr>
          <tr>
            <th>ไฟฟ้า(kwh)</th>
            <th v-for="i in 8" :key="i"></th>
            <th>ลิตร/ตัน</th>
            <th></th>
            <th>Mill Availabilty</th>
            <th>{{ product_data.mill_ava }}</th>
            <th>%</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th v-for="i in 11" :key="i"></th>
            <th>Rolling speed (BL)</th>
            <th>{{ product_data.roll_speed }}</th>
            <th>ton/hr</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th colspan="8" class="red--text">LOSS Report</th>
            <th v-for="i in 3" :key="i"></th>
            <th>Productivity of Machine</th>
            <th>{{ product_data.pro_machine }}</th>
            <th>ton/hr</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>CV1</th>
            <th>CV2</th>
            <th>Cold Shear</th>
            <th>SCALE</th>
            <th>หางเหล็ก</th>
            <th>Reject</th>
            <th>TOTAL</th>
            <th v-for="i in 4" :key="i"></th>
            <th>Run Factor (BL)</th>
            <th>{{ product_data.run_factor }}</th>
            <th>ton/hr</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="item in loss_data" :key="item._cv1">
            <th>{{ item._cv1 }}</th>
            <th>{{ item._cv2 }}</th>
            <th>{{ item._coldshear }}</th>
            <th>{{ item._scale }}</th>
            <th>{{ item._irontail }}</th>
            <th>{{ item._reject }}</th>
            <th>{{ item._total }}</th>
            <th>{{ item._unit }}</th>
          </tr>
        </table>
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
    data_test: [],
    data_test2: [],
    footer_test: [],
    product_data: [],
    loss_data: []
  }),
  methods: {
    onexport() {
      //console.log(this.Datas.data);
      var ws = XLSX.utils.json_to_sheet(this.Datas.data);
      //var wb = XLSX.utils.book_new();
      const merge = [
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
        { s: { r: 13, c: 12 }, e: { r: 13, c: 16 } }, //Miss roll Total
        { s: { r: 14, c: 12 }, e: { r: 14, c: 16 } }, //ปริมาณผลผลิต
        //Production Loss(kgs) - Data
        { s: { r: 13, c: 17 }, e: { r: 14, c: 17 } }, //Production Loss(kgs)
        //Product Yield(%) - Data
        { s: { r: 13, c: 18 }, e: { r: 14, c: 19 } }, //Product Yield(%)
        //Energy Consumption - Data
        { s: { r: 13, c: 20 }, e: { r: 13, c: 22 } }, //Energy Consumption
        { s: { r: 14, c: 20 }, e: { r: 14, c: 21 } } //ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด
      ];
      ws["!merges"] = merge;
      ws["A1"] = {
        font: {
          sz: 20,
          bold: true
        },
        alignment: {
          horizontal: "center",
          vertical: "center",
          wrap_text: true
        }
      };

      //XLSX.utils.book_append_sheet(wb, ws, "animals");
      //XLSX.utils.table_to_book(wb, ws, "animals2");
      var tbl = document.getElementById("sheetjs");
      var wb = XLSX.utils.table_to_book(tbl); //table_tosheet
      //Control cell width
      wb["!cols"] = [
        {
          wpx: 120
        },
        {
          wpx: 120
        },
        {
          wpx: 120
        },
        {
          wpx: 120
        },
        {
          wpx: 120
        },
        {
          wpx: 120
        }
      ];
      /* var wb = {
        SheetNames: ["Sheet", "JS"], // <-- include the sheet names in the array
        Sheets: {
          Sheet: {
            // <-- each sheet name is a key in the Sheets object
            "!ref": "A1:B2",
            A1: { t: "n", v: 1 },
            B2: { t: "n", v: 4 }
          },
          JS: {
            // <-- since "JS" is the second entry in SheetNames, it will be the second tab
            "!ref": "A1:B2",
            A2: { t: "s", v: "Sheet" },
            B1: { t: "s", v: "JS" }
          }
        }
      }; */
      //var wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      XLSX.writeFile(wb, "export.xlsx", { cellStyles: true });
      //XLSX.writeFile(wb, "book.xlsx", { cellStyles: true } ); // name of the file is 'book.xlsx'
    },
    get_ProductReport() {
      setTimeout(
        () => (
          (this.data_test = JSON.parse(localStorage.getItem("product_report"))),
          (this.footer_test = JSON.parse(
            localStorage.getItem("product_footer")
          )) //, console.log(this.footer_test)
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
          )[0]) //, console.log(this.product_data)
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
  },
  created() {
    /* let current_doc = localStorage.getItem("current_doc");
    current_doc = JSON.parse(current_doc);
    console.log(current_doc) */
  }
};
</script>
