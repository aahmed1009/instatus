import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../components//AppHeader.vue";
import Footer from "../components//AppFooter.vue";
import AppUpdates from "../components//AppUpdates.vue";
import AppContactUs from "../components//AppContactUs.vue";
import AppTeams from "../components//AppTeams.vue";
import AppFeatures from "../components//AppFeatures.vue";
import AppEyes from "../components//AppEyes.vue";
import AppFeedback from "../components//AppFeedback.vue";
import AppQuestions from "../components//AppQuestions.vue";
import Home from "../views/HomePage.vue";
import why from "../views/WhyPage.vue";
import Company from "../views/CompanyPage.vue";
import pricing from "../views/PricingPage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

import TheLogout from "../views/TheLogout.vue";
import Dashboard from "../views/DashboardPage.vue";

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
    path: "/AppFeedback",
    name: "AppFeedback",
    component: AppFeedback,
  },
  {
    path: "/AppEyes",
    name: "AppEyes",
    component: AppEyes,
  },
  {
    path: "/AppQuestions",
    name: "AppQuestions",
    component: AppQuestions,
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
    name: "why",
    component: why,
  },
  {
    path: "/Company",
    name: "Company",
    component: Company,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: pricing,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
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
