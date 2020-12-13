<template>
  <div v-if="wasteStreamFilterSize" class="container-filter">
    <div class="container-filter__sizes">
      <modal-waste-stream-filter-button filter-size="all"
        >All
      </modal-waste-stream-filter-button>
      <modal-waste-stream-filter-button filter-size="small"
        >Small
      </modal-waste-stream-filter-button>
      <modal-waste-stream-filter-button filter-size="medium"
        >Medium
      </modal-waste-stream-filter-button>
      <modal-waste-stream-filter-button filter-size="large"
        >Large
      </modal-waste-stream-filter-button>
    </div>
  </div>
</template>

<script>
import ModalWasteStreamFilterButton from "./ModalWasteStreamFilterButton";
import { mapGetters } from "vuex";

export default {
  name: "ModalWasteStreamFilter",
  components: {
    ModalWasteStreamFilterButton,
  },
  computed: {
    ...mapGetters(["wasteStreamSelected", "wasteStreamFilterSize"]),
  },
};
</script>

<style lang="stylus" scoped>

.container-filter
  width 100%
  grid-row 2 / 3
  display flex
  align-items: center
  justify-content: center

  &__sizes
    display flex
    align-items: center
    justify-content: center

    & > *:not(:last-child)
      margin-right 2rem

      @media only screen and (max-width: 550px)
        margin-right 1rem

  &__filter
    display flex
    align-items center
    justify-content center

    &__icon
      width 4rem
      filter invert(77%) sepia(60%) saturate(497%) hue-rotate(114deg) brightness(84%) contrast(89%)

      &.descending
        -moz-transform: scale(1, -1);
        -o-transform: scale(1, -1);
        -webkit-transform: scale(1, -1);
        transform: scale(1, -1);
</style>
