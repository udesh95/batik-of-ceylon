import Vue from "vue";
import Router from "vue-router";
import AboutUs from "@/components/AboutUs";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/about-us',
            name: 'About Us',
            component: AboutUs,
        }
    ]
})