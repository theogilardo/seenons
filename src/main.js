import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";
import Toasted from "vue-toasted";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./utils/filters";
import "./plugins/prototypes";

library.add(faCheck);
dom.watch();

Vue.use(VModal);
Vue.use(Toasted, {
  iconPack: "fontawesome",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
