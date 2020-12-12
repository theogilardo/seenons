import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
    wasteStreamSelected: null,
    sortType: "all",
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      const streamSelected = state.wasteStreamSelected?.sizes;
      if (state.sortType === "small")
        return streamSelected.filter((el) => el.size < 200);

      if (state.sortType === "medium")
        return streamSelected.filter((el) => el.size >= 200 && el.size < 500);

      if (state.sortType === "large")
        return streamSelected.filter((el) => el.size >= 500);

      return streamSelected;
    },
    sortType(state) {
      return state.sortType;
    },
  },
  mutations: {
    sortType(state, size) {
      state.sortType = size;
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
