<template>
  <div class="scrollcell">
    <ve-table
      :scroll-width="1600"
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
            column.field === "_b_std" ||
            column.field === "_pyield_std" ||
            column.field === "_q_std"
          ) {
            return "table-body-cell-class1";
          }
        },
        //ตั่งค่าพื้นหลัง footer column
        footerCellClass: ({ column, rowIndex }) => {
          if (
            column.field === "_b_grade" ||
            column.field === "_p_grade" ||
            column.field === "_m_cobble_kg"
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
                      title: "กก.",
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
                      title: "กก.",
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
                      title: "แท่ง",
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
                      title: "แท่ง",
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
                      title: "กก.",
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
                      title: "กก.",
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
                      title: "กก.",
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
          title: "Product Yield",
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
          _b_heat: "6400211",
          _b_grade: "SR24",
          _b_qty: "4",
          _b_std: "",
          _b_act: "8461",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "4",
          _q_pcs: "403",
          _q_std: "",
          _q_act: "8195",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "266",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "96.86",
          //Energy Consumption
          _e_stove: "375",
          _e_elec: "716",
          _e_diesel: "0"
        },
        {
          _no: "1",
          //Billet
          _b_heat: "6400212",
          _b_grade: "SR24",
          _b_qty: "23",
          _b_std: "",
          _b_act: "49078",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "22",
          _q_pcs: "2244",
          _q_std: "",
          _q_act: "45869",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "3209",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "93.46",
          //Energy Consumption
          _e_stove: "2153",
          _e_elec: "4114",
          _e_diesel: "0"
        },
        {
          _no: "1",
          //Billet
          _b_heat: "6400211",
          _b_grade: "SR24",
          _b_qty: "4",
          _b_std: "",
          _b_act: "8461",
          //Product
          _p_size: "AG 40x40x6",
          _p_grade: "SS400",
          //Quantity
          _q_bundle: "4",
          _q_pcs: "403",
          _q_std: "",
          _q_act: "8195",
          //Miss roll Total
          _m_cobble_piece: "",
          _m_cobble_kg: "",
          _m_return_piece: "",
          _m_return_kg: "",
          _m_total: "0.00",
          //Production Loss(kgs)
          _ploss_kg: "266",
          //Product Yield(%)
          _pyield_std: "",
          _pyield_act: "96.86",
          //Energy Consumption
          _e_stove: "375",
          _e_elec: "716",
          _e_diesel: "0"
        }
      ]
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
          _no: "Total",
          _b_heat: 251,
          _b_qty: 535020,
          _b_act: 241,
          _p_size: 24463,
          _q_bundle: 498905,
          _q_pcs: 0.0,
          _q_std: 0.0,
          _q_act: 2.0,
          _m_return_piece: 4281.0,
          _m_return_kg: 0.8,
          _m_cobble_piece: 31834,
          _m_cobble_kg: "",
          _m_total: 93.25,
          _ploss_kg: 23500,
          _pyield_std: 44900,
          _pyield_act: 0
        },
        {
          rowkey: 1,
          _b_heat: "",
          _b_qty: 535.02,
          _p_size: "",
          _q_bundle: 498.91,
          _q_pcs: "",
          _q_std: 0,
          _q_act: "",
          _m_return_piece: 4.28,
          _m_return_kg: "",
          _m_cobble_piece: 31.83,
          _m_cobble_kg: "",
          _m_total: "",
          _ploss_kg: 23500,
          _pyield_std: 44900,
          _pyield_act: 0
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
