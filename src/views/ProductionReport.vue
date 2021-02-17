<template>
  <div>
    <ve-table
      v-if="productReport"
      class="ma-2 caption item box"
      border-x
      border-y
      fixed-header
      rowKeyFieldName="rowkey"
      :columns="columns"
      :table-data="data_table1"
      :footer-data="footerData"
      :cell-selection-option="cellSelectionOption"
      :cell-style-option="cellStyleOption"
      :cell-span-option="cellSpanOption"
      :scroll-width="1870"
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
      //ตั่งค่า style table
      cellStyleOption: {
        //ตั่งค่าพื้นหลัง header row
        headerCellClass: ({ rowIndex }) => {
          if (
            rowIndex === 0 ||
            rowIndex === 1 ||
            rowIndex === 2 ||
            rowIndex === 3
          ) {
            return "table-header-cell-class";
          }
        },
        //ตั่งค่าพื้นหลัง body column
        bodyCellClass: ({ column /* , rowIndex */ }) => {
          if (
            column.field === "_b_std1" ||
            column.field === "_pyield_std1" ||
            column.field === "_q_std1"
          ) {
            return "table-body-cell-class1";
          }
        },
        //ตั่งค่าพื้นหลัง footer column
        footerCellClass: ({ column, rowIndex }) => {
          if (
            column.field === "_b_grade1" ||
            column.field === "_p_grade1" ||
            column.field === "_m_cobble_kg1"
          ) {
            return "table-footer-cell-class1";
          }

          if (rowIndex === 1) {
            return "table-footer-cell-class2";
          }

          if (rowIndex === 0 || rowIndex === 1) {
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
        //Item
        { field: "_no", key: "a", title: "Item", width: "18%" },
        //Billet
        {
          title: "Billet",
          children: [
            {
              field: "_b_heat",
              key: "b",
              title: "Heat No",
              width: "28%"
            },
            {
              field: "_b_grade",
              key: "c",
              title: "Grade",
              width: "21%"
            },
            {
              title: "Billet Usage",
              children: [
                {
                  title: "QTY",
                  children: [
                    {
                      field: "_b_qty",
                      key: "d",
                      title: "แท่ง",
                      width: "17%"
                    }
                  ]
                },
                {
                  title: "STD",
                  children: [
                    {
                      field: "_b_std",
                      key: "e",
                      title: "(ton)",
                      width: "25%"
                    }
                  ]
                },
                {
                  title: "ACT",
                  children: [
                    {
                      field: "_b_act",
                      key: "f",
                      title: "(ton)",
                      width: "25%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Product
        {
          title: "Product",
          children: [
            {
              title: "",
              children: [
                {
                  title: "Size",
                  children: [
                    {
                      field: "_p_size",
                      key: "g",
                      title: "ขนาด",
                      width: "40%"
                    }
                  ]
                },
                {
                  title: "Grade",
                  children: [
                    {
                      field: "_p_grade",
                      key: "h",
                      title: "ชั้นคุณภาพ",
                      width: "30%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Quantity
        {
          title: "Quantity",
          children: [
            {
              title: "ปริมาณผลผลิต",
              children: [
                {
                  title: "Bundle/Coil",
                  children: [
                    {
                      field: "_q_bundle",
                      key: "i",
                      title: "(มัด/ขด)",
                      width: "34%"
                    }
                  ]
                },
                {
                  title: "Pcs",
                  children: [
                    {
                      field: "_q_pcs",
                      key: "j",
                      title: "เส้น",
                      width: "22%"
                    }
                  ]
                },
                {
                  title: "Std Wgt",
                  children: [
                    {
                      field: "_q_std",
                      key: "k",
                      title: "(ton)",
                      width: "27%"
                    }
                  ]
                },
                {
                  title: "Actual Wgt",
                  children: [
                    {
                      field: "_q_act",
                      key: "l",
                      title: "(ton)",
                      width: "32%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Miss roll Total
        {
          title: "Miss roll Total",
          children: [
            {
              title: "",
              children: [
                {
                  title: "Return",
                  children: [
                    {
                      field: "_m_return_piece",
                      key: "m",
                      title: "แท่ง",
                      width: "18%"
                    },
                    {
                      field: "_m_return_kg",
                      key: "n",
                      title: "(kg)",
                      width: "27%"
                    }
                  ]
                },
                {
                  title: "Cobble",
                  children: [
                    {
                      field: "_m_cobble_piece",
                      key: "o",
                      title: "แท่ง",
                      width: "18%"
                    },
                    {
                      field: "_m_cobble_kg",
                      key: "p",
                      title: "(kg)",
                      width: "27%"
                    }
                  ]
                },
                {
                  title: "Total",
                  children: [
                    {
                      field: "_m_total",
                      key: "q",
                      title: "%",
                      width: "22%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Production Loss
        {
          title: "Production Loss (kgs)",
          children: [
            {
              title: "",
              children: [
                {
                  title: "สูญเสีย",
                  children: [
                    {
                      field: "_ploss_kg",
                      key: "z",
                      title: "(kg)",
                      width: "33%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Product Yield
        {
          title: "Product Yield (%)",
          children: [
            {
              title: "",
              children: [
                {
                  title: "STD",
                  children: [
                    {
                      field: "_pyield_std",
                      key: "r",
                      title: "%",
                      width: "21%"
                    }
                  ]
                },
                {
                  title: "ACT",
                  children: [
                    {
                      field: "_pyield_act",
                      key: "s",
                      title: "%",
                      width: "21%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        //Energy Consumption
        {
          title: "Energy Consumption",
          children: [
            {
              title: "ปริมาณการใช้พลังงานเพื่อการผลิตโรงรีด",
              children: [
                {
                  title: "น้ำมันเตา",
                  children: [
                    {
                      field: "_e_stove",
                      key: "t",
                      title: "litre",
                      width: "30%"
                    }
                  ]
                },
                {
                  title: "ไฟฟ้า",
                  children: [
                    {
                      field: "_e_elec",
                      key: "u",
                      title: "Kw",
                      width: "30%"
                    }
                  ]
                },
                {
                  title: "น้ำมันดีเซล",
                  children: [
                    {
                      field: "_e_diesel",
                      key: "v",
                      title: "litre",
                      width: "31%"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      tableData: [],
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
          _no: "1",
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
        }
      ],
      //Summary Data
      sum_b_qty: 0, //QTY
      sum_b_std: 0, //STD
      sum_b_act: 0, //ACT
      sum_q_bundle: 0, //Bundle
      sum_q_pcs: 0, //Pcs
      sum_q_std: 0, //STD Wgt
      sum_q_act: 0, //Actual Wgt
      sum_m_return_piece: 0, //Return Piece
      sum_m_return_kg: 0, //Return Kg
      sum_m_cobble_piece: 0, //Cobble Piece
      sum_m_cobble_kg: 0, //Cobble Kg
      sum_m_total: 0, //Total
      sum_ploss_kg: 0, //Production Loss
      sum_pyield_std: 0, //Production Yield STD
      sum_pyield_act: 0, //Production Yield ACT
      sum_e_stove: 0, //Enegy Stove
      sum_e_elec: 0, //Enegy Elec
      sum_e_diesel: 0, //Enegy Diesel
      //Percent Data
      percent_act: 0, //ACT
      percent_q_act: 0, //Actual Wgt
      percent_m_return_kg: 0, //Return Kg
      percent_m_cobble_kg: 0, //Cobble Kg
      percent_ploss_kg: 0, //Production Loss
      percent_e_stove: 0, //Enegy Stove
      percent_e_elec: 0, //Enegy Elec
      percent_e_diesel: 0 //Enegy Diesel
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
        } else if (
          column.field === "_e_stove" ||
          column.field === "_e_elec" ||
          column.field === "_e_diesel"
        ) {
          return {
            rowspan: 0,
            colspan: 0
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
        } else if (
          column.field === "_e_stove" ||
          column.field === "_e_elec" ||
          column.field === "_e_diesel"
        ) {
          return {
            rowspan: 0,
            colspan: 0
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
          _no: "Total",
          _b_heat: this.sum_b_qty, //QTY
          _b_grade: this.sum_b_std, //STD
          _b_qty: this.sum_b_act, //ACT
          _b_act: this.sum_q_bundle, //Bundle
          _p_size: this.sum_q_pcs, //Pcs
          _p_grade: this.sum_q_std, //STD Wgt
          _q_bundle: this.sum_q_act, //Actual Wgt
          _q_pcs: this.sum_m_return_piece, //Return Piece
          _q_std: this.sum_m_return_kg, //Return Kg
          _q_act: this.sum_m_cobble_piece, //Cobble Piece
          _m_return_piece: this.sum_m_cobble_kg, //Cobble Kg
          _m_return_kg: this.sum_m_total, //Total
          _m_cobble_piece: this.sum_ploss_kg, //Production Loss
          _m_cobble_kg: this.sum_pyield_std, //Production Yield STD
          _m_total: this.sum_pyield_act, //Production Yield ACT
          _ploss_kg: this.sum_e_stove, //Enegy Stove
          _pyield_std: this.sum_e_elec, //Enegy Elec
          _pyield_act: this.sum_e_diesel //Enegy Diesel
        },
        {
          rowkey: 1,
          _b_qty: this.percent_b_act, //ACT
          _q_bundle: this.percent_q_act, //Actual Wgt
          _q_std: this.percent_m_return_kg, //Return Kg
          _m_return_piece: this.percent_m_cobble_kg, //Cobble Kg
          _m_cobble_piece: this.percent_ploss_kg, //Production Loss
          _ploss_kg: this.percent_e_stove, //Enegy Stove
          _pyield_std: this.percent_e_elec, //Enegy Elec
          _pyield_act: this.percent_e_diesel //Enegy Diesel
        }
      ];
    },
    // Summary
    summary() {
      for (let i = 0; i < this.data_table1.length; i++) {
        //QTY
        (this.sum_b_qty = this.data_table1[i]._b_qty + this.sum_b_qty),
          //STD
          (this.sum_b_std = this.data_table1[i]._b_std + this.sum_b_std),
          //ACT
          (this.sum_b_act = this.data_table1[i]._b_act + this.sum_b_act),
          //Bundle
          (this.sum_q_bundle =
            this.data_table1[i]._q_bundle + this.sum_q_bundle),
          //Pcs
          (this.sum_q_pcs = this.data_table1[i]._q_pcs + this.sum_q_pcs),
          //STD Wgt
          (this.sum_q_std = this.data_table1[i]._q_std + this.sum_q_std),
          //Actual Wgt
          (this.sum_q_act = this.data_table1[i]._q_act + this.sum_q_act),
          //Return Piece
          (this.sum_m_return_piece =
            this.data_table1[i]._m_return_piece + this.sum_m_return_piece),
          //Return Kg
          (this.sum_m_return_kg =
            this.data_table1[i]._m_return_kg + this.sum_m_return_kg),
          //Cobble Piece
          (this.sum_m_cobble_piece =
            this.data_table1[i]._m_cobble_piece + this.sum_m_cobble_piece),
          //Cobble Kg
          (this.sum_m_cobble_kg =
            this.data_table1[i]._m_cobble_kg + this.sum_m_cobble_kg),
          //Total
          (this.sum_m_total = this.data_table1[i]._m_total + this.sum_m_total),
          //Production Loss
          (this.sum_ploss_kg =
            this.data_table1[i]._ploss_kg + this.sum_ploss_kg),
          //Production Yield STD
          (this.sum_pyield_std =
            this.data_table1[i]._pyield_std + this.sum_pyield_std),
          //Production Yield ACT
          (this.sum_pyield_act =
            this.data_table1[i]._pyield_act + this.sum_pyield_act),
          //Enegy Stove
          (this.sum_e_stove = this.data_table1[i]._e_stove + this.sum_e_stove),
          //Enegy Elec
          (this.sum_e_elec = this.data_table1[i]._e_elec + this.sum_e_elec),
          //Enegy Diesel
          (this.sum_e_diesel =
            this.data_table1[i]._e_diesel + this.sum_e_diesel);
        //console.log(this.data_table1[i]._b_act)
      }
      //console.log("Sum : " + this.sum_act);
      this.percent_b_act = (this.sum_b_act / 1000).toFixed(2);
      this.percent_q_act = (this.sum_q_act / 1000).toFixed(2);
      this.percent_m_return_kg = (this.sum_m_return_kg / 1000).toFixed(2);
      this.percent_m_cobble_kg = (this.sum_m_cobble_kg / 1000).toFixed(2);
      this.percent_ploss_kg = (this.sum_ploss_kg / 1000).toFixed(2);
      this.percent_e_stove = (this.sum_e_stove / 100).toFixed(2);
      this.percent_e_elec = (this.sum_e_elec / 100).toFixed(2);
      this.percent_e_diesel = (this.sum_e_diesel / 100).toFixed(2);
      //console.log("Percent : " + this.percent_act);
    },
    getProduction_Data() {
      for (let i = 0; i < this.data_table1.length; i++) {
        (this.data_table1[i]._no = this.data_table1[i]._e_diesel)(
          //Billet
          (this.data_table1[i]._b_heat = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._b_grade = this.data_table1[i]._e_diesel))(
          (this.data_table1[i]._b_qty = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._b_std = this.data_table1[i]._e_diesel))(
          (this.data_table1[i]._b_act = this.data_table1[i]._e_diesel)
        )(
          //Product
          (this.data_table1[i]._p_size = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._p_grade = this.data_table1[i]._e_diesel))(
          //Quantity
          (this.data_table1[i]._q_bundle = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._q_pcs = this.data_table1[i]._e_diesel))(
          (this.data_table1[i]._q_std = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._q_act = this.data_table1[i]._e_diesel))(
          //Miss roll Total
          (this.data_table1[i]._m_cobble_piece = this.data_table1[i]._e_diesel)
        )((this.data_table1[i]._m_cobble_kg = this.data_table1[i]._e_diesel)),
          (this.data_table1[i]._m_return_piece = this.data_table1[i]._e_diesel)(
            (this.data_table1[i]._m_return_kg = this.data_table1[i]._e_diesel)
          )((this.data_table1[i]._m_total = this.data_table1[i]._e_diesel))(
            //Production Loss(kgs)
            (this.data_table1[i]._ploss_kg = this.data_table1[i]._e_diesel)
          )(
            //Product Yield(%)
            (this.data_table1[i]._pyield_std = this.data_table1[i]._e_diesel)
          )((this.data_table1[i]._pyield_act = this.data_table1[i]._e_diesel))(
            //Energy Consumption
            (this.data_table1[i]._e_stove = this.data_table1[i]._e_diesel)
          )((this.data_table1[i]._e_elec = this.data_table1[i]._e_diesel))(
            (this.data_table1[i]._e_diesel = this.data_table1[i]._e_elec)
          )((this.data_table1[i]._e_elec = this.data_table1[i]._e_diesel));
      }
    }
  },
  computed: {
    productReport() {
      if (
        localStorage.getItem("localBillet_act") != null ||
        localStorage.getItem("localBillet_act") != "" ||
        localStorage.getItem("localQuantity_act") != null ||
        localStorage.getItem("localQuantity_act") != ""
      ) {
        this.$store.commit("setBillet", this.sum_b_act);
        this.$store.commit("setQuantity", this.sum_q_act);
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
/* header css */
.table-header-cell-class {
  background: #29b6f6 !important;
  color: rgb(0, 0, 0) !important;
}
/* body css */
.table-body-cell-class1 {
  background: #575757 !important;
  color: #fff !important;
}
.table-body-cell-class2 {
  background: orange !important;
  color: #fff !important;
}
/* footer css */
.table-footer-cell-class1 {
  background: #575757 !important;
  color: #fff !important;
}
.table-footer-cell-class2 {
  background: #addeff !important;
  color: rgb(255, 0, 0) !important;
}
.table-footer-cell-class3 {
  background: #addeff !important;
  color: rgb(0, 0, 0) !important;
}
</style>
