<template>
  <div class="modal">
    <modal-stream-select />
    <modal-stream-filter />
    <modal-stream-cards />
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
.modal
  display grid
  grid-template-rows 6rem 4.5rem 1fr
  padding 1rem 2.5rem 2.5rem 2.5rem
  height 100%
  overflow scroll
</style>
