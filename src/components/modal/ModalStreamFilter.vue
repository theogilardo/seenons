<template>
  <div v-if="wasteStreamSelected" class="container-filter">
    <div class="container-filter__sizes">
      <button
        @click="sortSize('All')"
        :class="{ active: filterAll }"
        class="btn--filter"
      >
        All
      </button>
      <button
        @click="sortSize('Small')"
        :class="{ active: filterSmall }"
        class="btn--filter"
      >
        Small
      </button>
      <button
        @click="sortSize('Medium')"
        :class="{ active: filterMedium }"
        class="btn--filter"
      >
        Medium
      </button>
      <button
        @click="sortSize('Large')"
        :class="{ active: filterLarge }"
        class="btn--filter"
      >
        Large
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalStreamFilter",
  data() {
    return {
      filterSmall: false,
      filterMedium: false,
      filterLarge: false,
      filterAll: true,
    };
  },
  computed: {
    wasteStreamSelected() {
      return this.$store.getters.wasteStreamSelected;
    },
  },
  methods: {
    sortSize(size) {
      this[`filter${size}`] = !this[`filter${size}`];
      this.$store.commit("sortSize", size);
    },
  },
};
</script>

<style lang="stylus" scoped>

.container-filter
  width 100%
  padding 0 1.5rem
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
    // border 1px solid red

    &__icon
      width 4rem
      filter invert(77%) sepia(60%) saturate(497%) hue-rotate(114deg) brightness(84%) contrast(89%)

      &.descending
        -moz-transform: scale(1, -1);
        -o-transform: scale(1, -1);
        -webkit-transform: scale(1, -1);
        transform: scale(1, -1);

.btn--filter
  border none
  border-radius 2rem
  font-size 1.4rem
  padding 1rem 1.5rem
  background white
  // background #37CCBE
  // background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
  text-transform uppercase
  color #37CCBE
  border 1px solid #37CCBE

  &.active
    color white
    background #37CCBE
</style>
