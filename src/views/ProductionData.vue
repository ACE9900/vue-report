<template>
  <v-container fluid v-if="data_Now">
    <v-data-iterator
      v-if="productData"
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      class="caption"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name">
            <v-card>
              <v-card-title
                class="subheading font-weight-bold blue-grey darken-1 white--text"
              >
                Production Data
              </v-card-title>

              <v-divider></v-divider>
              <v-list dense>
                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Production time:</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.pro_time }} (hr)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Available time:</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.ava_time }} (min)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Down time :</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.down_time }} (min)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content class="align-end blue--text"
                      >{{ item.per_downtime }} (%)</v-list-item-content
                    ></v-col
                  >
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Net Rolling :</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.net_roll }} (min)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content class="align-end blue--text"
                      >{{ item.per_netroll }} (%)</v-list-item-content
                    ></v-col
                  >
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Mill Availabilty:</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.mill_ava }} (%)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content cols="5" class="pa-0">
                    <v-list-item-content
                      >Rolling speed (BL):</v-list-item-content
                    ></v-list-item-content
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.roll_speed }} (ton/hr)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Productivity of Machine:</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.pro_machine }} (ton/hr)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>

                <v-list-item>
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content
                      >Run Factor:</v-list-item-content
                    ></v-col
                  >
                  <v-col cols="5" class="pa-0">
                    <v-list-item-content class="align-end red--text">
                      {{ item.run_factor }} (%)
                    </v-list-item-content></v-col
                  >
                  <v-col cols="2" class="pa-0">
                    <v-list-item-content></v-list-item-content
                  ></v-col>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductionData",
  props: ["fact", "date"],
  components: {},
  data: () => ({
    itemsPerPage: 4,
    items: [],
    //Axios
    url: "http://api.zen.zubbsteel.com/v1/",
    down_Time: null
  }),
  methods: {
    //รับค่า Production Data
    getData() {
      return axios
        .get(this.url + "productSum/" + this.date + "/" + this.fact)
        .then(response => {
          this.data_product = response.data[0].htime;
          //console.log(this.data_product);
          this.ava_time = parseInt(this.data_product) * 60;
          this.pushData();
        });
    },
    pushData() {
      this.items[0] = {
        pro_time: parseInt(this.data_product),
        ava_time: this.ava_time,
        down_time: this.down_Time,
        net_roll: null,
        mill_ava: null,
        roll_speed: null,
        pro_machine: null,
        run_factor: null,
        per_downtime: null,
        per_netroll: null
      };
      this.items.push(); //push data
      this.$store.commit("setAva", this.ava_time);
      setTimeout(
        () =>
          (this.items[0].down_time = localStorage.getItem("localTotaltime")),
        2000
      ),
        setTimeout(
          () =>
            (this.items[0].net_roll =
              this.ava_time - localStorage.getItem("localTotaltime")),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].mill_ava = (
              (localStorage.getItem("localTotaltime") / this.ava_time) *
              100
            ).toFixed(2)),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].roll_speed = (
              localStorage.getItem("localBillet_act") /
              1000 /
              parseInt(this.data_product)
            ).toFixed(2)),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].pro_machine = (
              localStorage.getItem("localQuantity_act") /
              1000 /
              parseInt(this.data_product)
            ).toFixed(2)),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].run_factor = (
              100 -
              100 * (localStorage.getItem("localTotaltime") / this.ava_time)
            ).toFixed(1)),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].per_downtime = (
              100 *
              (localStorage.getItem("localTotaltime") / this.ava_time)
            ).toFixed(1)),
          2000
        ),
        setTimeout(
          () =>
            (this.items[0].per_netroll = (
              ((this.ava_time - localStorage.getItem("localTotaltime")) /
                this.ava_time) *
              100
            ).toFixed(1)),
          2000
        );
      //console.log(this.items);
      this.$store.commit("setPD", this.items);
    }
  },
  computed: {
    productData() {
      if (
        localStorage.getItem("localPro") != null ||
        localStorage.getItem("localPro") != "" ||
        localStorage.getItem("localAva") != null ||
        localStorage.getItem("localAva") != ""
      ) {
        this.$store.commit("setPro", parseInt(this.data_product));
        this.$store.commit("setAva", this.ava_time);
        //console.log("state :" + localStorage.getItem("localPro"));
      }
      return true;
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
    //this.getData();
  }
};
</script>
