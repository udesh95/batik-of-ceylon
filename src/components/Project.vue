<template>
  <v-container id="project" class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center header">~ Projects ~</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas.</p>
      </v-col>
      <v-col lg="4" v-for="project in 3" :key="project">
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Web Development</v-card-title>

          <v-card-text>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="success" rounded>View Details</v-btn>
            <v-spacer />
            <v-rating>
              :value="4.5",
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            </v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Project"
}
</script>

<style scoped>
.header {
  font-family: cursive;
  font-weight: 700;
  color: #AF2F31;
}
</style>