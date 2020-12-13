<template>
  <section class="container-select">
    <multiselect
      :options="wasteStreams"
      :custom-label="dropDownLabels"
      :searchable="true"
      track-by="_id"
      placeholder="Select your waste stream"
      v-model="labelSelected"
      @input="updateWasteStream"
    ></multiselect>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapGetters } from "vuex";

export default {
  name: "ModalWasteStreamSelect",
  components: {
    Multiselect,
  },
  data() {
    return {
      labelSelected: null,
    };
  },
  created() {
    if (this.isWasteStreamInLocalStorage) {
      this.updateLabelSelected();
      this.updateWasteStream();
    }
  },
  computed: {
    ...mapGetters(["wasteStreams"]),
    isWasteStreamInLocalStorage() {
      return localStorage.getItem("wasteStreamSelected");
    },
  },
  methods: {
    updateLabelSelected() {
      this.labelSelected = JSON.parse(
        localStorage.getItem("wasteStreamSelected")
      );
    },
    updateWasteStream() {
      this.$store.commit("storewasteStreamSelected", this.labelSelected.type);
      this.storeWasteStreamInLocalStorage();
    },
    storeWasteStreamInLocalStorage() {
      localStorage.setItem(
        "wasteStreamSelected",
        JSON.stringify(this.labelSelected)
      );
    },
    dropDownLabels({ name }) {
      return `${name["en-gb"]}`;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="stylus" scoped>

.container-select
  width 100%
  grid-row 1 / 2
  display flex
  align-items: center
  justify-content: center
</style>
