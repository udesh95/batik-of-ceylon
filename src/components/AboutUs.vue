<template>
    <v-container class="pt-15" id="about-us">
      <v-row>
        <v-col lg="6">
          <img width="100%" src="./../assets/nine-design.png" alt="">
        </v-col>
        <v-col lg="6">
          <v-subheader class="text-h4 header">~ About Us ~</v-subheader>
          <p> Fortune Ceylon is a Sri Lankan brand that focuses on delivering coconut-based products to the global market.
            We have been facilitating our services for 11 years.
            As a company that is looking for steady branding, we realized that the coconut is one of our main strengths,
            and it is a gap that the company is capable of filling. We are specialized in maintaining the standards to
            show our capacities in identifying the requirements of the global market and provide our best effort to satisfy. </p>
          <v-list>
            <v-list-item>
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle>Lorem ipsum dolor sit amet.</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</v-list-item-subtitle>
            </v-list-item>
            <p>We are keeping our branding to coconut-based products also,
              we are not targeting the local market as the product quality and a fair price for higher quality products
              have been our main. We have got several international certificates under our company title, and EU Organic,
              GMP, HACCP, and USDA are a few of them.</p>
          </v-list>
        </v-col>
      </v-row>
      <v-divider />
    </v-container>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.header {
  font-family: cursive;
  font-weight: 700;
  color: #AF2F31;
}
</style>