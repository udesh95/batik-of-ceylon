<template>
  <v-carousel
      :cycle="cycle"
      :show-arrows="false"
      height="600"
  >
    <v-carousel-item
        v-for="(slide,indexSlide) in slides"
        :key="indexSlide"
        :src="slide.image"
        reverse-transition="fade-transition"
        transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HeroComponent",
    data () {
      return {
        slides: [
          {image: require('./../assets/cover1.jpg')},
          {image:require('./../assets/cover2.jpg')},
          {image:require('./../assets/web-2.jpg')},
          {image:require('./../assets/web-3.jpg')},
          {image: require('./../assets/batik-saree-removebg-preview.png')}
        ],
        cycle: true,
        // slides: [
        //   'First',
        //   'Second',
        //   'Third',
        //   'Fourth',
        //   'Fifth',
        // ],
      }
    },

}
</script>

<style scoped>
  h2.intro-text {
    font-size: 60px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
  }
  p.description {
    font-size: 19px;
    font-family: cursive;
    margin: 32px 0px;
    color: #444444ba;
  }
</style>