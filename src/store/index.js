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
    sortSmall: false,
    sortMedium: false,
    sortLarge: false,
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
    wasteStreamSelected(state) {
      if (state.sortSmall)
        return state.wasteStreamSelected?.sizes.filter((el) => el.size < 200);

      if (state.sortMedium)
        return state.wasteStreamSelected?.sizes.filter((el) => el.size === 240);

      if (state.sortLarge)
        return state.wasteStreamSelected?.sizes.filter((el) => el.size > 500);

      if (!state.sortAscending && !state.sortDescending)
        return state.wasteStreamSelected?.sizes;

      // if (state.sortAscending)
      //   return state.wasteStreamSelected.sizes.sort((a, b) =>
      //     a.size > b.size ? 1 : -1
      //   );

      // return state.wasteStreamSelected?.sizes.sort((a, b) =>
      //   a.size < b.size ? 1 : -1
      // );
    },
  },
  mutations: {
    sortSmall(state) {
      state.sortSmall = true;
      state.sortMedium = false;
      state.sortLarge = false;
    },
    sortMedium(state) {
      state.sortSmall = false;
      state.sortMedium = true;
      state.sortLarge = false;
    },
    sortLarge(state) {
      state.sortSmall = false;
      state.sortMedium = false;
      state.sortLarge = true;
    },
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
