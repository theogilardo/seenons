import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: null,
    sortSize: "all",
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      const test = state.wasteStreamSelected?.sizes;
      if (state.sortSize === "small") return test.filter((el) => el.size < 200);

      if (state.sortSize === "medium")
        return test.filter((el) => el.size >= 200 && el.size < 500);

      if (state.sortSize === "large")
        return test.filter((el) => el.size >= 500);

      return state.wasteStreamSelected?.sizes;
    },
    sortSize(state) {
      return state.sortSize;
    },
  },
  mutations: {
    sortSize(state, size) {
      state.sortSize = size;
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
