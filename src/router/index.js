import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../components//AppHeader.vue";
import Footer from "../components//AppFooter.vue";
import AppUpdates from "../components//AppUpdates.vue";
import AppContactUs from "../components//AppContactUs.vue";
import AppTeams from "../components//AppTeams.vue";
import AppFeatures from "../components//AppFeatures.vue";
import Home from "../views/HomePage.vue";
import why from "../views/WhyPage.vue";
import Company from "../views/CompanyPage.vue";
import pricing from "../views/PricingPage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import ResetPassword from "../views/ResetPassword.vue";
import TheLogout from "../views/TheLogout.vue";
import Dashboard from "../views/DashboardPage.vue";
import Register from "../views/RegisterView.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/AppTeams",
    name: "AppTeams",
    component: AppTeams,
  },
  {
    path: "/AppFeatures",
    name: "AppFeatures",
    component: AppFeatures,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/AppContactUs",
    name: "AppContactUs",
    component: AppContactUs,
  },

  {
    path: "/Header",
    name: "Header",
    component: Header,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/AppUpdates",
    name: "AppUpdates",
    component: AppUpdates,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/why",
    name: "about",
    component: why,
  },
  {
    path: "/Company",
    name: "Company",
    component: Company,
  },
  {
    path: "/pricing",
    name: "about",
    component: pricing,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/TheLogout",
    name: "TheLogout",
    component: TheLogout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
