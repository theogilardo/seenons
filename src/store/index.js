import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamsFiltered: null,
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamsFiltered(state) {
      return state.wasteStreamsFiltered;
    },
  },
  mutations: {
    storeWasteStreams(state, wasteStreams) {
      state.wasteStreams = wasteStreams;
    },
    storeWasteStreamsFiltered(state, wasteStreamSelected) {
      state.wasteStreamsFiltered = state.wasteStreams.filter(
        (wasteStream) => wasteStream.type === wasteStreamSelected
      );
    },
  },
  actions: {
    async getWasteStreams({ commit }) {
      axios.get("https://api-dev-593.seenons.com/me/streams").then((res) => {
        const data = res.data;
        console.log(data);
        commit("storeWasteStreams", data);
      });
    },
  },
  modules: {},
});
