<template>
  <v-container fluid>
    <v-row class="caption">
      <v-col cols="12" sm="6">
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item.name">
                <v-card>
                  <v-card-title
                    class="subheading font-weight-bold blue-grey darken-1 white--text"
                  >
                    Grade and Size
                  </v-card-title>

                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Date:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.pro_time }} (hr)
                      </v-list-item-content>
                      <v-list-item-content></v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-content>Billet:</v-list-item-content>
                      <v-list-item-content>Grade:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.ava_time }} (min)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>Length:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.down_time }} (min)
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-content>FG:</v-list-item-content>
                      <v-list-item-content>Size:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.net_roll }} (min)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>Grade:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.mill_ava }} (%)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>Bundle size:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.roll_speed }} (ton/hr)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>Cut of length:</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.pro_machine }} (ton/hr)
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator></v-col
      >
      <v-col cols="12" sm="6">
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item.name">
                <v-card>
                  <v-card-title
                    class="subheading font-weight-bold blue-grey darken-1 white--text"
                  >
                    Weight
                  </v-card-title>

                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>BL weight : </v-list-item-content>
                      <v-list-item-content>3SP :</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.ava_time }} (Kgs)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>C20 :</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.down_time }} (Kgs)
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content>Actual :</v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.down_time }} (Kgs)
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-content
                        >FG Standard weight :
                      </v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.ava_time }} (Kgs/m)
                      </v-list-item-content>
                      <v-list-item-content></v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content></v-list-item-content>
                      <v-list-item-content class="align-end red--text">
                        {{ item.down_time }} (Kgs/bundle)
                      </v-list-item-content>
                      <v-list-item-content></v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template> </v-data-iterator></v-col
    ></v-row>
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
    ],
    items_2: [
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
