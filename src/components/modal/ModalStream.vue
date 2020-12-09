<template>
  <div class="container">
    <modal-stream-select />
    <modal-stream-cards />
  </div>
</template>

<script>
import ModalStreamSelect from "./ModalStreamSelect";
import ModalStreamCards from "./ModalStreamCards";

export default {
  name: "ModalStream",
  components: {
    ModalStreamSelect,
    ModalStreamCards,
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex;
  align-items: center;
  flex-direction column
  padding 2rem
  height 100%
</style>
