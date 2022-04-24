<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
      <HeroComponent />
      <AboutUs />
      <Portfolio />
      <Project />
      <Gallery />
      <ContactUs />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    Footer,
    ContactUs,
    Gallery,
    Project,
    Portfolio,
    AboutUs,
    HeroComponent,
    Header
  },
};
</script>
