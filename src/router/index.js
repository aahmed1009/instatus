import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import why from "../views/WhyPage.vue";
import pricing from "../views/PricingPage.vue";
import SingIn from "../views/SingIn.vue";
import SingUp from "../views/SingUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/why",
    name: "about",
    component: why,
  },
  {
    path: "/pricing",
    name: "about",
    component: pricing,
  },
  {
    path: "/SingUp",
    name: "SingUp",
    component: SingUp,
  },
  {
    path: "/SingIn",
    name: "SingIn",
    component: SingIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
