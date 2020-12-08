import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layout/LayoutDefault";

Vue.config.productionTip = false;

Vue.component("default-layout", DefaultLayout);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
