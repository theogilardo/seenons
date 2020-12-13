import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: [],
    wasteStreamSizeFilter: null,
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamType(state) {
      return state.wasteStreamSelected.type;
    },
    wasteStreamSelected(state) {
      return state.wasteStreamSelected;
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
      if (!state.wasteStreamSizeFilter) {
        state.wasteStreamSizeFilter = "all";
      }
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
