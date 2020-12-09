<template>
  <div v-if="wasteStreamsFiltered" class="cards">
    <modal-stream-card
      v-for="wasteStreamFiltered in wasteStreamsFiltered[0].sizes"
      :key="wasteStreamFiltered.container_product_id"
      :stream-size="wasteStreamFiltered"
    />
  </div>
</template>

<script>
import ModalStreamCard from "./ModalStreamCard";

export default {
  name: "ModalStreamCards",
  components: {
    ModalStreamCard,
  },
  computed: {
    wasteStreamsFiltered() {
      return this.$store.getters.wasteStreamsFiltered;
    },
  },
};
</script>

<style lang="stylus" scoped>

.cards
  width 100%
  display flex
  flex-direction column
</style>
