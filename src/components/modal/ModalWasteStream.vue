<template>
  <div class="modal">
    <div class="modal__container">
      <modal-waste-stream-select />
      <modal-waste-stream-filter />
      <modal-waste-stream-cards />
    </div>
  </div>
</template>

<script>
import ModalWasteStreamSelect from "./ModalWasteStreamSelect";
import ModalWasteStreamFilter from "./ModalWasteStreamFilter";
import ModalWasteStreamCards from "./ModalWasteStreamCards";

export default {
  name: "ModalWasteStream",
  components: {
    ModalWasteStreamSelect,
    ModalWasteStreamFilter,
    ModalWasteStreamCards,
  },
};
</script>

<style lang="stylus" scoped>

.modal
  height 100%
  width 100%
  background #ff000000
  padding 1rem

.modal__container
  display grid
  grid-template-rows 6rem 4.5rem 1fr
  padding 1rem 2.5rem 2.5rem 2.5rem
  height 100%
  border-radius 10px
  background white
  overflow scroll
</style>
