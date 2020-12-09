<template>
  <section class="container">
    <select name="waste-streams" class="container__select">
      <option selected disabled>Select waste stream</option>
      <option
        v-for="wasteStream in wasteStreams"
        :key="wasteStream._id"
        :value="wasteStream.type"
        >{{ wasteStream.type | capitalize }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: "ModalStreamSelect",
  computed: {
    wasteStreams() {
      return this.$store.getters.wasteStreams;
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
