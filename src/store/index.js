import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: [],
    wasteStreamSelected: [],
    wasteStreamFilterSize: "",
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
    wasteStreamFilterSize(state) {
      return state.wasteStreamFilterSize;
    },
  },
  mutations: {
    storeWasteStreams(state, payload) {
      state.wasteStreams = payload;
    },
    storewasteStreamSelected(state, payload) {
      if (!state.wasteStreamFilterSize) {
        state.wasteStreamFilterSize = "all";
      }
      state.wasteStreamSelected = state.wasteStreams.filter(
        (wasteStream) => wasteStream.type === payload
      )[0];
    },
    wasteStreamFilterSize(state, size) {
      state.wasteStreamFilterSize = size;
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
