<template>
  <div id="app">
    <header1 />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import header1 from "./components/HeaderInstatus.vue";
import Footer from "@/components//FooterComponent.vue";

export default {
  name: "app",
  components: { header1, Footer },
};
</script>
<style></style>
