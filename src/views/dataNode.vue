<template>
  <v-main>
    <v-btn elevation="2" outlined rounded @click="download">
      Excel download
    </v-btn>
  </v-main>
</template>

<script>
import xl from "excel4node";
export default {
  methods: {
    download() {
      // Create a new instance of a Workbook class
      var wb = new xl.Workbook();

      wb.write("Excel.xlsx");
      //XLSX.writeFile(wb, "export.xlsx", {cellStyles:true});
    }
  }
};
</script>

<style></style>
