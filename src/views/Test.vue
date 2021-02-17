<template>
  <v-btn color="green">
    <download-excel
      class="btn btn-default"
      :data="json_data"
      :fields="json_fields"
      title="Equipments - Spare Part - "
      worksheet="My Worksheet"
      type="xlsx"
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
      json_fields: {
        "Complete name": "name",
        City: "city",
        Telephone: "phone.mobile",
        "Telephone 2": {
          field: "phone.landline",
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        },
        "": "",
        City1: "city",
        Telephone1: "phone.mobile",
        "Telephone 21": {
          field: "phone.landline",
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
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
