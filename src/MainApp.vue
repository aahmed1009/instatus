<template>
  <div id="app">
    <Header v-if="$route.name !== 'SignIn' && $route.name !== 'SignUp'" />
    <!-- <router-link to="/Home.vue"></router-link> -->
    <!-- <HomePage /> -->
    <router-view />
    <Footer v-if="$route.name !== 'SignIn' && $route.name !== 'SignUp'" />
  </div>
</template>
<script>
import Header from "./components//AppHeader.vue";
import Footer from "./components//AppFooter.vue";

export default {
  name: "app",
  components: { Header, Footer },
};
</script>
