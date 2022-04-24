<template>
  <v-container id="portfolio" class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center header">~ Best Selling ~</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas.</p>
      </v-col>
      <v-col lg="12">
        <div class="text-center">
          <v-chip @click="activePortfolio = 'webApp'" :color="activePortfolio === 'webApp' ? '#AF2F31' : ''"  class="mx-5">Sarees</v-chip>
          <v-chip @click="activePortfolio = 'mobileApp'" :color="activePortfolio === 'mobileApp' ? '#AF2F31' : ''" class="mx-5">Men</v-chip>
          <v-chip @click="activePortfolio = 'desktopApp'" :color="activePortfolio === 'desktopApp' ? '#AF2F31' : ''" class="mx-5">Women</v-chip>
        </div>
      </v-col>
      <slot v-if="activePortfolio === 'webApp'">
        <vueper-slides
            autoplay
            3d
            class="no-shadow w-full"
            :visible-slides="3"
            :slide-ratio="3 / 6"
            :dragging-distance="70"
            :gap="3"
        >

          <vueper-slide v-for="(web,webIndex) in webApps"
                        :key="webIndex"
                        :image="web.image"
          />
        </vueper-slides>
      </slot>
      <slot v-if="activePortfolio === 'mobileApp'">
        <vueper-slides
            autoplay
            3d
            class="no-shadow w-full"
            :visible-slides="3"
            :slide-ratio="3 / 6"
            :dragging-distance="70"
            :gap="3"
        >
          <vueper-slide v-for="(mobile,mobileIndex) in mobileApps"
                        :key="mobileIndex"
                        :image="mobile.image"
          />
        </vueper-slides>
      </slot>

    </v-row>
    <v-divider />
  </v-container>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Portfolio",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      activePortfolio: 'webApp',
      webApps: [
        {title: 'Web App 1', image: require('./../assets/_P9A6382.jpg')},
        {title: 'Web App 2', image: require('./../assets/_P9A6384.jpg')},
        {title: 'Web App 3', image: require('./../assets/_P9A6405.jpg')},
        {title: 'Web App 4', image: require('./../assets/_P9A6431.jpg')},
        {title: 'Web App 5', image: require('./../assets/_P9A6518.jpg')},
        {title: 'Web App 6', image: require('./../assets/_P9A6573.jpg')},
        {title: 'Web App 7', image: require('./../assets/_P9A6662.jpg')},
        {title: 'Web App 8', image: require('./../assets/_P9A6676.jpg')},
      ],
      mobileApps: [
        {title: 'Web App 1', image: require('./../assets/_P9A6382.jpg')},
        {title: 'Web App 2', image: require('./../assets/_P9A6384.jpg')},
        {title: 'Web App 3', image: require('./../assets/_P9A6405.jpg')},
        {title: 'Web App 4', image: require('./../assets/_P9A6431.jpg')},
        {title: 'Web App 5', image: require('./../assets/_P9A6518.jpg')},
        {title: 'Web App 6', image: require('./../assets/_P9A6573.jpg')},
        {title: 'Web App 7', image: require('./../assets/_P9A6662.jpg')},
        {title: 'Web App 8', image: require('./../assets/_P9A6676.jpg')},
      ]
    }
  },
  computed: {
    isMenItemsEmpty() {
      return this.mobileApps.length === 0;
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