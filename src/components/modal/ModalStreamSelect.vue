<template>
  <section class="container">
    <multiselect
      :options="wasteStreams"
      :custom-label="dropDownLabels"
      track-by="_id"
      :searchable="true"
      v-model="labelSelected"
      placeholder="Select your waste stream"
      @input="updateWasteStream"
    ></multiselect>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "ModalStreamSelect",
  components: { Multiselect },
  data() {
    return {
      labelSelected: null,
    };
  },
  computed: {
    wasteStreams() {
      return this.$store.getters.wasteStreams;
    },
  },
  methods: {
    updateWasteStream() {
      this.$store.commit("storewasteStreamSelected", this.labelSelected.type);
    },
    dropDownLabels({ name }) {
      return `${name["en-gb"]}`;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="stylus" scoped>

.container
  width 100%
  height 8rem
  // margin-bottom 2.5rem
  display flex
  align-items: center
  justify-content: center
</style>
