import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layout/LayoutDefault";
import VModal from "vue-js-modal";
import Toasted from "vue-toasted";
import ModalStream from "./components//modal/ModalStream";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
dom.watch();

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(Toasted, {
  iconPack: "fontawesome",
});
Vue.component("default-layout", DefaultLayout);

Vue.prototype.$toastAddCard = function() {
  this.$toasted.success("Waste stream added", {
    duration: 1600,
    icon: "check",
    position: "top-center",
    className: "toast",
    closeOnSwipe: true,
  });
};

Vue.prototype.$showModal = function() {
  this.$modal.show(
    ModalStream,
    { text: "This text is passed as a property" },
    {
      height: "600px",
      width: "600px",
      scrollable: true,
    }
  );
};

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
