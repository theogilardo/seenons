<template>
  <div class="container-cards">
    <div v-if="wasteStreamSelected && wasteStreamSelected.length" class="cards">
      <modal-stream-card
        v-for="wasteStream in wasteStreamSelected"
        :key="wasteStream.container_product_id"
        :stream-size="wasteStream"
      />
    </div>
    <div
      class="not-available"
      v-else-if="wasteStreamSelected && !wasteStreamSelected.length"
    >
      <h2 class="not-available__title">This size is not available</h2>
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
import { mapGetters } from "vuex";

export default {
  name: "ModalStreamCards",
  components: {
    ModalStreamCard,
  },
  computed: {
    ...mapGetters(["wasteStreamSelected"]),
  },
};
</script>

<style lang="stylus" scoped>

.container-cards
  grid-row 3 / 4
  width 100%
  margin-top 1.5rem

.cards
  width 100%
  display flex
  flex-direction column

.not-available
  height 100%
  display flex
  align-items center
  justify-content center

  &__title
    color #9c9c9c
    text-align center

    @media only screen and (max-width: 585px)
      width 30rem

.default
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  flex-direction column

  &__title
    background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
    -webkit-background-clip: text
    color: transparent
    opacity .8
    text-align center

    @media only screen and (max-width: 470px)
      font-size: 2.4rem

  &__image
    width 25rem
    flex 1
    animation: float 3.5s ease-in-out infinite

    @media only screen and (max-width: 470px)
      width 18rem
</style>
