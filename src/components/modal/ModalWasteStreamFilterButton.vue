<template>
  <div>
    <button
      @click="filterBySize(filterSize)"
      :class="{ active: isActive }"
      class="btn--filter"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalWasteStreamFilterButton",
  props: {
    filterSize: {
      type: String,
      required: true,
      validator: function(value) {
        return ["all", "small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    ...mapGetters(["wasteStreamFilterSize"]),
    isActive() {
      return this.wasteStreamFilterSize === this.filterSize;
    },
  },
  methods: {
    filterBySize(size) {
      this.$store.commit("wasteStreamFilterSize", size);
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn--filter
  border none
  border-radius 2rem
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
