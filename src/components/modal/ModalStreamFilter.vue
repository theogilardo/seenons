<template>
  <div v-if="wasteStreamSelected" class="container-filter">
    <div class="container-filter__sizes">
      <modal-stream-filter-button filter-type="all"
        >All
      </modal-stream-filter-button>
      <modal-stream-filter-button filter-type="small"
        >Small
      </modal-stream-filter-button>
      <modal-stream-filter-button filter-type="medium"
        >Medium
      </modal-stream-filter-button>
      <modal-stream-filter-button filter-type="large"
        >Large
      </modal-stream-filter-button>
    </div>
  </div>
</template>

<script>
import ModalStreamFilterButton from "./ModalStreamFilterButton";
import { mapGetters } from "vuex";

export default {
  name: "ModalStreamFilter",
  components: {
    ModalStreamFilterButton,
  },
  computed: {
    ...mapGetters(["wasteStreamSelected"]),
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
