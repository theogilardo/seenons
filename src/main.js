import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layout/LayoutDefault";
import VModal from "vue-js-modal";
import Toasted from "vue-toasted";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faExclamationCircle,  } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck);
dom.watch();

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(Toasted, {
  iconPack: "fontawesome",
});
Vue.component("default-layout", DefaultLayout);

// Vue.filter("capitalize", (text) => {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// });

Vue.filter("toFixed", (number) => {
  return number.toFixed(2);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
