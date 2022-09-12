<template>
  <div id="app">
    <Header />
    <!-- <router-link to="/Home.vue"></router-link> -->
    <!-- <HomePage /> -->
    <router-view />
    <Footer />
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
