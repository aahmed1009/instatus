import Vue from "vue";
import App from "./MainApp.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
