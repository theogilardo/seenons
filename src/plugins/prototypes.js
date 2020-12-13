import Vue from "vue";
import ModalWasteStream from "../components//modal/ModalWasteStream";

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
    ModalWasteStream,
    { text: "This text is passed as a property" },
    {
      height: "600px",
      width: "600px",
      styles: "box-shadow: 0",
      adaptive: true,
    }
  );
};
