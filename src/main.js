import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layout/LayoutDefault";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.component("default-layout", DefaultLayout);

Vue.filter("capitalize", (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
