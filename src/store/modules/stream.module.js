import api from "@/services";
const state = {
  stream: {
    startDate: "",
    endDate: "",
    description: "",
    paidFor: false,
    price: 0,
    title: "",
  },
  streams: [],
};
const getters = {};
const actions = {
  async streamInfo({ commit }, stream) {
    try {
      await api.post("/stream/stream", stream);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchAllStreams({ commit }) {
    try {
      // TODO API endpoint to fetch all streams
      console.log("error");
    } catch (error) {
      console.log(error);
    }
  },
  async fetchStream({ commit }, { user }) {
    try {
      // TODO API endpoint to fetch a particular stream
      console.log("error");
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  streamsSuccess(state, streams) {
    state.streams = streams;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
