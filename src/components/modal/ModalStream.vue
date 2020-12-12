<template>
  <div class="layout">
    <div class="modal">
      <modal-stream-select />
      <modal-stream-filter />
      <modal-stream-cards />
    </div>
  </div>
</template>

<script>
import ModalStreamSelect from "./ModalStreamSelect";
import ModalStreamFilter from "./ModalStreamFilter";
import ModalStreamCards from "./ModalStreamCards";

export default {
  name: "ModalStream",
  components: {
    ModalStreamSelect,
    ModalStreamFilter,
    ModalStreamCards,
  },
};
</script>

<style lang="stylus" scoped>

.layout
  height 100%
  width 100%
  background #ff000000
  padding 1rem

.modal
  display grid
  grid-template-rows 6rem 4.5rem 1fr
  padding 1rem 2.5rem 2.5rem 2.5rem
  height 100%
  border-radius 10px
  background white
  overflow scroll
</style>
