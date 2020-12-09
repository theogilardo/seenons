import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: null,
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      return state.wasteStreamSelected;
    },
  },
  mutations: {
    storeWasteStreams(state, payload) {
      state.wasteStreams = payload;
    },
    storewasteStreamSelected(state, payload) {
      state.wasteStreamSelected = state.wasteStreams.filter(
        (wasteStream) => wasteStream.type === payload
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
});
