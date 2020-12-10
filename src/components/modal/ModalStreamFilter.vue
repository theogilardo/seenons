<template>
  <div class="container">
    <div class="container__sizes">
      <button
        @click="setFilter('Small')"
        :class="{ active: filterSmall }"
        class="btn--filter"
      >
        Small
      </button>
      <button
        @click="setFilter('Medium')"
        :class="{ active: filterMedium }"
        class="btn--filter"
      >
        Medium
      </button>
      <button
        @click="setFilter('Large')"
        :class="{ active: filterLarge }"
        class="btn--filter"
      >
        Large
      </button>
    </div>
    <div class="container__filter">
      <img
        @click="filterAscDesc"
        :class="{ descending: filterDescending }"
        src="../../assets/filter.svg"
        alt="Filter Icon"
        class="container__filter__icon"
      />
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
      filterDescending: false,
    };
  },
  methods: {
    setFilter(size) {
      this[`filter${size}`] = !this[`filter${size}`];
    },
    filterAscDesc() {
      this.filterDescending = !this.filterDescending;
    },
  },
};
</script>

<style lang="stylus" scoped>

.container
  width 100%
  height 6rem
  margin-bottom 2.5rem
  padding 0 1.5rem
  // border 1px solid red
  display flex
  align-items: center
  justify-content: space-between

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
