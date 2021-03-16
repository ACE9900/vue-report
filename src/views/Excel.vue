<template>
  <div>
    <button @click="exportExcel" class="k-button">Export Excel</button>
    <Grid
      :style="{ height: '500px' }"
      :data-items="items"
      :columns="columns"
      :cell-render="'myTemplate'"
      ><template v-slot:myTemplate="{ props }"
        ><td :class="props.className">
          <b>{{ getNestedValue(props.field, props.dataItem) }}</b>
        </td>
      </template>
    </Grid>
  </div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
import { saveExcel } from "@progress/kendo-vue-excel-export";

export default {
  components: {
    Grid: Grid
  },
  data: function() {
    return {
      items: [],
      columns: [
        { field: "ProductID" },
        { field: "ProductName", title: "Product Name" },
        { field: "UnitPrice", title: "Unit Price" }
      ]
    };
  },
  methods: {
    exportExcel() {
      saveExcel({
        data: this.items,
        fileName: "myFile",
        columns: [
          { field: "ProductID" },
          { field: "ProductName", title: "Product Name" }
        ]
      });
    },
    getNestedValue: function(fieldName, dataItem) {
      const path = fieldName.split(".");
      let data = dataItem;
      path.forEach(p => {
        data = data ? data[p] : undefined;
      });

      return data;
    },
    createRandomData(count) {
      const productNames = [
        "Chai",
        "Chang",
        "Syrup",
        "Apple",
        "Orange",
        "Banana",
        "Lemon",
        "Pineapple",
        "Tea",
        "Milk"
      ];
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
        }));
    }
  },
  mounted() {
    this.items = this.createRandomData(10);
  }
};
</script>
