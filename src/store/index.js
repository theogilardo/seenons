import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: null,
    isFilterSize: false,
    sortAscending: false,
    sortDescending: false,
    sortSize: "All",
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      const test = state.wasteStreamSelected?.sizes;
      if (state.sortSize === "Small") return test.filter((el) => el.size < 200);

      if (state.sortSize === "Medium")
        return test.filter((el) => el.size === 240);

      if (state.sortSize === "Large") return test.filter((el) => el.size > 500);

      return state.wasteStreamSelected?.sizes;
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
        console.log(data);
        commit("storeWasteStreams", data);
      });
    },
  },
});
