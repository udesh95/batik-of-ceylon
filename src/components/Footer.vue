<template>
  <v-footer padless>
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center">
          <v-toolbar-title>Batik Of Ceylon</v-toolbar-title>
          <v-card-text>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 black--text"
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-subheader>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aut beatae corporis culpa deserunt dolorem ducimus molestiae porro, provident ut vitae!
          </v-subheader>
          <v-form class="mt-4">
            <v-text-field label="Email" outlined dense />
            <v-btn rounded color="success">Subscribe Us</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <div class="mt-10">
        <v-divider></v-divider>
        <v-subheader>
          @Created by Udesh Ishanka {{ new Date().getFullYear() }} — <strong>UdeshWebDesigner</strong>
          <v-spacer />
          <strong>Designed by Udesh Ishanka</strong>
        </v-subheader>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>

<style scoped>

</style>