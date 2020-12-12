import Vue from "vue";
import ModalStream from "../components//modal/ModalStream";

Vue.prototype.$toastCardAdded = function() {
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
      styles: "box-shadow: 0",
      scrollable: true,
      adaptive: true,
    }
  );
};
