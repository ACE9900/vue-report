<template>
  <v-container fluid>
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
                  <v-list-item-content>Production time:</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.pro_time }} (hr)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Available time:</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.ava_time }} (min)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Down time :</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.down_time }} (min)
                  </v-list-item-content>
                  <v-list-item-content class="align-end blue--text"
                    >{{ percent_Downtime }} (%)</v-list-item-content
                  >
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Net Rolling :</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.net_roll }} (min)
                  </v-list-item-content>
                  <v-list-item-content class="align-end blue--text"
                    >{{ percent_Netroll }} (%)</v-list-item-content
                  >
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Mill Availabilty:</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.mill_ava }} (%)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Rolling speed (BL):</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.roll_speed }} (ton/hr)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content
                    >Productivity of Machine:</v-list-item-content
                  >
                  <v-list-item-content class="align-end red--text">
                    {{ item.pro_machine }} (ton/hr)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Run Factor:</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.run_factor }} (%)
                  </v-list-item-content>
                  <v-list-item-content></v-list-item-content>
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
export default {
  name: "ProductionData",
  data: () => ({
    itemsPerPage: 4,
    items: [
      {
        pro_time: 11,
        ava_time: localStorage.getItem("localPro") * 60,
        down_time: localStorage.getItem("localTotaltime"),
        net_roll:
          localStorage.getItem("localAva") -
          localStorage.getItem("localTotaltime"),
        mill_ava: (
          (localStorage.getItem("localTotaltime") /
            localStorage.getItem("localAva")) *
          100
        ).toFixed(2),
        roll_speed: (
          localStorage.getItem("localBillet_act") /
          1000 /
          11
        ).toFixed(2),
        pro_machine: (
          localStorage.getItem("localQuantity_act") /
          1000 /
          11
        ).toFixed(2),
        run_factor: (
          100 *
          (localStorage.getItem("localTotaltime") /
            localStorage.getItem("localAva"))
        ).toFixed(1)
      }
    ]
  }),
  computed: {
    productData() {
      if (
        localStorage.getItem("localPro") != null ||
        localStorage.getItem("localPro") != "" ||
        localStorage.getItem("localAva") != null ||
        localStorage.getItem("localAva") != ""
      ) {
        this.$store.commit("setPro", this.items[0].pro_time);
        this.$store.commit("setAva", this.items[0].ava_time);
        //console.log("state :" + localStorage.getItem("localPro"));
      }
      return true;
    },
    percent_Downtime() {
      return (
        100 *
        (localStorage.getItem("localTotaltime") /
          localStorage.getItem("localAva"))
      ).toFixed(1);
    },
    percent_Netroll() {
      return ((this.items[0].net_roll / this.items[0].ava_time) * 100).toFixed(
        1
      );
    }
  },
  created() {
    /* this.$store.commit("setPro", this.items[0].pro_time);
    this.$store.commit("setAva", this.items[0].ava_time);
    console.log(this.items[0].pro_time) */
  }
};
</script>
