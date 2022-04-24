<template>
  <v-container id="gallery" class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center header">~ Gallery ~</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas.</p>
      </v-col>
      <v-col
          v-for="(gallery,indexImage) in imageGallery"
          :key="indexImage"
          class="d-flex child-flex"
          cols="2"
      >
        <v-img
            :src="gallery.image"
            aspect-ratio="1"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gallery",
  data() {
    return {
      imageGallery: [
          {image: require('./../assets/_P9A6573.jpg')},
          {image: require('./../assets/_P9A6603.jpg')},
          {image: require('./../assets/_P9A6676.jpg')},
          {image: require('./../assets/_P9A6662.jpg')},
          {image: require('./../assets/_P9A6767.jpg')},
          {image: require('./../assets/_P9A6799.jpg')},
          {image: require('./../assets/_P9A6709.jpg')},
          {image: require('./../assets/_P9A6566.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
.header {
  font-family: cursive;
  font-weight: 700;
  color: #AF2F31;
}
</style>