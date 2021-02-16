<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      class="caption"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name">
            <v-card>
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
                    >18.6 (%)</v-list-item-content
                  >
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Net Rolling :</v-list-item-content>
                  <v-list-item-content class="align-end red--text">
                    {{ item.net_roll }} (min)
                  </v-list-item-content>
                  <v-list-item-content class="align-end blue--text"
                    >81.4 (%)</v-list-item-content
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
  data: () => ({
    itemsPerPage: 4,
    items: [
      {
        pro_time: 11,
        ava_time: 660,
        down_time: 123,
        net_roll: 537,
        mill_ava: 18.64,
        roll_speed: 48.64,
        pro_machine: 45.36,
        run_factor: 81.4
      }
    ]
  })
};
</script>
