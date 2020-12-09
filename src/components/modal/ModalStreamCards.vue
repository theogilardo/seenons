<template>
  <div class="cards">
    <modal-stream-card />
    <modal-stream-card />
  </div>
</template>

<script>
import ModalStreamCard from "./ModalStreamCard";

export default {
  name: "ModalStreamCards",
  components: {
    ModalStreamCard,
  },
};
</script>

<style lang="stylus" scoped>

.cards
  width 100%
  display flex
  flex-direction column
  // align-items: center;
  // justify-content: center;
</style>
