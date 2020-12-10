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
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      if (!state.sortAscending && !state.sortDescending)
        return state.wasteStreamSelected?.sizes;

      if (state.sortAscending)
        return state.wasteStreamSelected.sizes.sort((a, b) =>
          a.size > b.size ? 1 : -1
        );

      return state.wasteStreamSelected?.sizes.sort((a, b) =>
        a.size < b.size ? 1 : -1
      );
    },
  },
  mutations: {
    sortAscending(state) {
      state.sortAscending = true;
      state.sortDescending = false;
    },
    sortDescending(state) {
      state.sortAscending = false;
      state.sortDescending = true;
    },
    sortData(state) {
      state.isFilterSize = !state.isFilterSize;
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
