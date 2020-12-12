<template>
  <div>
    <button
      @click="sortSize(filterType)"
      :class="{ active: isActive }"
      class="btn--filter"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ModalStreamFilterButton",
  props: {
    filterType: {
      type: String,
      required: true,
      validator: function(value) {
        return ["all", "small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    isActive() {
      return this.$store.getters.sortSize === this.filterType;
    },
  },
  methods: {
    sortSize(size) {
      this.$store.commit("sortSize", size);
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn--filter
  border none
  border-radius 2rem
  // font-size 1rem
  font-size 1.2rem
  padding .75rem 1.5rem
  background white
  text-transform uppercase
  color #37CCBE
  border 1px solid #37CCBE


  @media only screen and (max-width: 420px)
    font-size 1rem

  &.active
    color white
    background #37CCBE
</style>
