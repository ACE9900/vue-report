<template>
  <v-btn color="green">
    <download-excel
      class="btn btn-default"
      :data="json_data"
      title="Equipments - Spare Part - "
      worksheet="My Worksheet"
      name="filename.xls"
    >
      Download Excel <v-icon>mdi-microsoft-excel</v-icon>
    </download-excel>
  </v-btn>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      json_data: [
        { colA: "Hello", colB: "World" },
        {
          colA: "Multi-line",
          /* Multi-line value: */
          colB:
            "This is a long paragraph\nwith multiple lines\nthat should show in a single cell."
        },
        { colA: "Another", colB: "Regular cell" }
      ],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ]
    };
  }
};
</script>

<style></style>
