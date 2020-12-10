<template>
  <div class="container">
    <div v-if="wasteStreamSelected" class="cards">
      <modal-stream-card
        v-for="wasteStreamSelected in wasteStreamSelected[0].sizes"
        :key="wasteStreamSelected.container_product_id"
        :stream-size="wasteStreamSelected"
      />
    </div>
    <div v-else class="default">
      <h2 class="default__title">Choose a waste stream</h2>
      <img
        src="../../assets/arrow.svg"
        alt="Arrow Icon"
        class="default__image"
      />
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
  flex 1

.cards
  width 100%
  display flex
  flex-direction column

.default
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  flex-direction column

  &__title
    margin 2rem
    background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
    -webkit-background-clip: text
    color: transparent
    opacity .8

  &__image
    width 25rem
    flex 1
    animation: float 3.5s ease-in-out infinite
</style>
