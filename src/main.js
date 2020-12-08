import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layout/LayoutDefault";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(VModal);

Vue.component("default-layout", DefaultLayout);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
