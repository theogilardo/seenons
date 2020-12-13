import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: null,
    wasteStreamSizeFilter: "all",
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamType(state) {
      return state.wasteStreamSelected.type;
    },
    wasteStreamSelected(state) {
      return state.wasteStreamSelected?.sizes;
    },
    wasteStreamSizeFilter(state) {
      return state.wasteStreamSizeFilter;
    },
  },
  mutations: {
    wasteStreamSizeFilter(state, size) {
      state.wasteStreamSizeFilter = size;
    },
    storeWasteStreams(state, payload) {
      state.wasteStreams = payload;
    },
    storewasteStreamSelected(state, payload) {
      state.wasteStreamSelected = state.wasteStreams.filter(
        (wasteStream) => wasteStream.type === payload
      )[0];
    },
  },
  actions: {
    async getWasteStreams({ commit }) {
      axios.get("https://api-dev-593.seenons.com/me/streams").then((res) => {
        const data = res.data;
        commit("storeWasteStreams", data);
      });
    },
  },
});
