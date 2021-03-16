<template>
  <v-container fluid>
    <v-row class="caption" v-if="data_Now">
      <v-col cols="12">
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row v-for="item in props.items" :key="item.name">
              <v-col cols="6" class="mx-0">
                <v-card>
                  <v-card-title
                    class="subheading font-weight-bold blue-grey darken-1 white--text"
                  >
                    Grade and Size
                  </v-card-title>

                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="subtitle-2"
                          >Date:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.rmd_date }}
                        </v-list-item-content></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content></v-list-item-content
                      ></v-col>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="subtitle-2"
                          >Billet:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="caption"
                          >Grade:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.billet_grade }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content></v-list-item-content
                      ></v-col>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content
                          >Length:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.billet_length }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="subtitle-2"
                          >FG:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content>Size:</v-list-item-content></v-col
                      >
                      <v-col cols="6" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_size }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content></v-list-item-content
                      ></v-col>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content>Grade:</v-list-item-content></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_grade }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content></v-list-item-content
                      ></v-col>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content
                          >Bundle size:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_bundle }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content></v-list-item-content
                      ></v-col>
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content
                          >Cut of length:</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="3" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_cut }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="6" class="mx-0">
                <v-card>
                  <v-card-title
                    class="subheading font-weight-bold blue-grey darken-1 white--text"
                  >
                    Weight
                  </v-card-title>

                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item>
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="subtitle-2"
                          >BL weight :
                        </v-list-item-content></v-col
                      >
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content
                          >Standard :</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.billet_std }}
                        </v-list-item-content></v-col
                      >
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="4"></v-col>
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content
                          >Actual :</v-list-item-content
                        ></v-col
                      >
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.billet_act }}
                        </v-list-item-content></v-col
                      >
                      <v-list-item-content></v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="subtitle-2"
                          >FG Standard weight :
                        </v-list-item-content></v-col
                      >
                      <v-col cols="4"></v-col>
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_std_1 }}
                        </v-list-item-content></v-col
                      >
                      <!-- <v-list-item-content></v-list-item-content> -->
                    </v-list-item>

                    <v-list-item>
                      <v-col cols="4"></v-col>
                      <v-col cols="4"></v-col>
                      <v-col cols="4" class="pa-0">
                        <v-list-item-content class="align-end red--text">
                          {{ item.fg_std_2 }}
                        </v-list-item-content></v-col
                      >
                      <!-- <v-list-item-content></v-list-item-content>
                      <v-list-item-content></v-list-item-content> -->
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["fact", "date"],
  data: () => ({
    itemsPerPage: 4,
    items: [],
    sum_billet: null,
    kgs_bundle: null,
    kgs_m: 0,
    count: 0,
    //Axios
    url: "http://api.zen.zubbsteel.com/v1/",
    data_bl_act: [],
  }),
  methods: {
    //รับค่า Grade ,Size ,Weight
    getData() {
      this.getBLACT();
      return axios
        .get(this.url + "title/" + this.date + "/" + this.fact)
        .then((response) => {
          //console.log(response.data);
          //console.log(this.data_bl_act);
          if (response.data == null || response.data == "") {
            this.pushDataNull();
          } else {
            this.data_title = response.data;
            this.pushDataNull();
            if (this.data_title == null || this.data_title == "") {
              //console.log(this.data_title);
              this.pushDataNull();
            } else {
              this.pushData();
            }
          }
        });
    },
    getBLACT() {
      return axios
        .get(this.url + "BL_Actual/" + this.date + "/" + this.fact)
        .then(response => {
          if (response.data == null || response.data == "") {
            //this.pushDataNull();
          } else {
            this.data_bl_act = response.data;
            //this.data_bl_act.push(); //push data
          }
        });
    },
    //Push Data เข้าไปยัง Items
    pushData() {
      for (let i = 0; i < this.data_title.length; i++) {
        this.formatData(i);
        this.items[i] = {
          //Grade
          rmd_date: this.data_title[i].rmd_date,
          billet_grade: this.data_title[i].billet_grade,
          billet_length: this.data_title[i].billet_mat + " (m)",
          fg_size: this.data_title[i].fg_size,
          fg_grade: this.data_title[i].fg_grade,
          fg_bundle: this.data_title[i].bundle_size + " (bar/bundle)",
          fg_cut: this.data_title[i].fg_mat + " (m)",
          //Weight
          billet_std: this.sum_billet + " (Kgs)",
          billet_act: null,
          fg_std_1: this.kgs_m + " (Kgs/m)",
          fg_std_2: this.kgs_bundle + " (Kgs/bundle)"
        };
        this.setISNULL(i);
      }
      //this.sum_billet_ac = 0;
      for (let i = 0; i < this.data_bl_act.length; i++) {
        this.formatBLACT(i);
        //this.items[i].billet_act = this.sum_billet_ac + " (Kgs)";
      }
      this.items[0].billet_act = this.sum_billet_ac + " (Kgs)";
      const title_data = {
        rmd_date: this.data_title[0].rmd_date,
        billet_grade: this.data_title[0].billet_grade,
        billet_length: this.data_title[0].billet_mat,
        fg_size: this.data_title[0].fg_size,
        fg_grade: this.data_title[0].fg_grade,
        fg_bundle: this.fg_bundle_commit,
        fg_cut: this.data_title[0].fg_mat,
        //Weight
        billet_std: this.sum_billet,
        billet_act: this.sum_billet_ac,
        fg_std_1: this.kgs_m,
        fg_std_2: this.kgs_bundle
      };
      setTimeout(() => this.$store.commit("setTitle", title_data), 3000);
      //console.log(title_data);
      this.items.push(); //push data
    },
    //Push Data Null
    pushDataNull() {
      this.items = [];
    },
    //format data
    formatData(i) {
      //ตรวจสอบความยาวของ Billet
      if (this.data_title[i].billet_mat == "BL")
        this.data_title[i].billet_mat = 12;
      if (this.data_title[i].billet_mat == "BS")
        this.data_title[i].billet_mat = 6;

      this.data_title[i].fg_mat = this.data_title[i].fg_size.split("@")[1]; //split เพื่อเอาข้อมูลส่วนหลังของ @
      this.data_title[i].fg_size = this.data_title[i].fg_size.split("@")[0]; //split เพื่อเอาข้อมูลส่วนหน้าของ @
      //console.log(Array.from(new Set(this.items.concat(this.data_title[i]))));

      //ผลรวมของ Billet Weight
      if (this.sum_billet == "" || this.sum_billet == null) {
        this.sum_billet = this.data_title[i].billet_stdweight;
      } else {
        this.sum_billet = this.data_title[i].billet_stdweight;
        /* console.log(
          this.sum_billet + "+" + this.data_title[i].billet_stdweight
        ); */
      }
      //ผลรวมของ Kgs/m
      if (
        this.data_title[i].fg_mat == "" ||
        this.data_title[i].fg_mat == null
      ) {
        this.kgs_m = "Coil";
        //console.log(this.data_title[i].fg_mat)
      } else {
        this.kgs_m = (
          this.data_title[i].fg_stdweight /
          (parseFloat(this.data_title[i].fg_mat) * this.data_title[i].fg_count)
        ).toFixed(2);
        /* console.log((
          this.data_title[i].fg_stdweight + "/" +
          (parseFloat(this.data_title[i].fg_mat) + "*" +this.data_title[i].fg_count)
        )) */
      }
      //ผลรวมของ Kgs/Bundle
      if (
        this.data_title[i].kgs_bundle == "" ||
        this.data_title[i].kgs_bundle == null
      ) {
        this.kgs_bundle = "Coil";
      } else {
        //this.kgs_bundle = parseFloat(this.data_title[i].kgs_bundle).toFixed(2);
        this.kgs_bundle = (
          this.data_title[i].billet_qty / this.data_title[i].fg_bundle
        ).toFixed(2);
      }
    },
    formatBLACT(i) {
      if (this.sum_billet_ac == "" || this.sum_billet_ac == null) {
        this.sum_billet_ac = this.data_bl_act[i].billet_weight; //+ " (Kgs)";
      } else {
        this.sum_billet_ac =
          this.sum_billet_ac + this.data_bl_act[i].billet_weight;
        //console.log(this.sum_billet_ac + this.data_bl_act[i].billet_weight);
      }
    },
    setISNULL(i) {
      if (
        this.data_title[i].billet_mat == null ||
        this.data_title[i].billet_mat == ""
      )
        this.items[i].billet_length = "-";
      if (
        this.data_title[i].billet_qty == null ||
        this.data_title[i].billet_qty == "" ||
        this.data_title[i].fg_bundle == null ||
        this.data_title[i].fg_bundle == ""
      ) {
        this.items[i].fg_bundle = 0;
      } else {
        this.items[i].fg_bundle =
          (
            this.data_title[i].billet_qty / this.data_title[i].fg_bundle
          ).toFixed(2) + " (bar/bundle)";
        this.fg_bundle_commit = (
          this.data_title[i].billet_qty / this.data_title[i].fg_bundle
        ).toFixed(2);
      }
      if (this.data_title[i].fg_mat == null || this.data_title[i].fg_mat == "")
        this.items[i].fg_cut = "-";
    },
  },
  computed: {
    //แสดงข้อมูลตามวันที่ และ โรงรีด
    data_Now() {
      if (this.date != null || this.fact != null) {
        this.getData();
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    //this.getData();
  },
};
</script>
