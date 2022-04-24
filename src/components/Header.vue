<template>
  <v-app-bar style="padding: 0px 90px"
             app
             color="white"
             light
             elevation="6"
             elevate-on-scroll
  >
    <v-img src="./../assets/company-logo.png" max-width="70"  />
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item link v-for="(menu,index)  in menus" :key="index" :href="menu.path">
        <v-list-item-title> {{ menu.title }} </v-list-item-title>
      </v-list-item>
      <v-btn text>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn outlined color="success">Get Started</v-btn>
    </v-list>

  </v-app-bar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",

  data() {
    return {
      menus: [
        {title: 'Home', route: 'home', path: '#'},
        {title: 'About us', route: 'about-us' , path: '#about-us'},
        {title: 'Portfolio', route: 'portfolio', path: '#portfolio'},
        {title: 'Project', route: 'project', path: '#project'},
        {title: 'Gallery', route: 'gallery', path: '#gallery'},
        {title: 'Contact', route: 'contact', path: '#contact'},
      ]
    }
  }
}
</script>

<style>
.v-toolbar__title {
  font-size: 30px;
  color: #AF2F31;
  font-weight: 700;
  font-family: cursive;
}
</style>