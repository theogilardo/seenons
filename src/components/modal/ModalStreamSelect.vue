<template>
  <section class="container">
    <select
      ref="test"
      v-model="selected"
      @change="updateWasteStream"
      name="waste-streams"
      class="container__select"
    >
      <option selected disabled>Select waste stream</option>
      <option
        v-for="wasteStream in wasteStreams"
        :key="wasteStream._id"
        :value="wasteStream.type"
        >{{ wasteStream.name["en-gb"] | capitalize }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: "ModalStreamSelect",
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    wasteStreams() {
      return this.$store.getters.wasteStreams;
    },
    wasteStreamsFiltered() {
      return this.$store.getters.wasteStreamsFiltered;
    },
  },
  methods: {
    updateWasteStream() {
      console.log(this.selected);
      this.$store.commit("storeWasteStreamsFiltered", this.selected);
      console.log(this.$store.getters.wasteStreamsFiltered[0]);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  margin-bottom 6rem
  width 100%
  height 8rem
  display flex
  align-items: center;
  justify-content: center;

  &__select
    width 100%
    padding 2rem
    border-radius 1rem
    border 1px solid #CBCBCB
</style>
