import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  eye: 4,
  motor: 6,
  verbal: 5,
  sbpRtsScore: 4,
  rrRtsScore: 4,
  gcsRtsScore: 4
};

export const getters = {
  gcs: state => state.eye + state.motor + state.verbal,
  rts: state => state.sbpRtsScore + state.rrRtsScore + state.gcsRtsScore
};

export const mutations = {
  setEye(state, score) {
    state.eye = score;
  },
  setMotor(state, score) {
    state.motor = score;
  },
  setVerbal(state, score) {
    state.verbal = score;
  },
  setSbpRtsScore(state, score) {
    state.sbpRtsScore = score;
  },
  setRrRtsScore(state, score) {
    state.rrRtsScore = score;
  },
  setGcsRtsScore(state, score) {
    state.gcsRtsScore = score;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
})
