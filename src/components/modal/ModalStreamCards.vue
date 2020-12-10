<template>
  <div class="container">
    <div v-if="wasteStreamSelected" class="cards">
      <modal-stream-card
        v-for="wasteStreamSelected in wasteStreamSelected[0].sizes"
        :key="wasteStreamSelected.container_product_id"
        :stream-size="wasteStreamSelected"
      />
    </div>
    <div v-else>
      <h3>Hello</h3>
    </div>
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
    wasteStreamSelected() {
      return this.$store.getters.wasteStreamSelected;
    },
  },
};
</script>

<style lang="stylus" scoped>

.container
  width 100%

.cards
  width 100%
  display flex
  flex-direction column
</style>
