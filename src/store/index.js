import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasteStreams: null,
  },
  getters: {
    wasteStreams(state) {
      return state.wasteStreams;
    },
  },
  mutations: {
    storeWasteStreams(state, wasteStreams) {
      state.wasteStreams = wasteStreams;
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
