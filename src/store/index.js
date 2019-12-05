import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eye: 4,
    motor: 6,
    verbal: 5
  },
  getters: {
    gcs: state => state.eye + state.motor + state.verbal
  },
  mutations: {
    setEye(state, score) {
      state.eye = score;
    },
    setMotor(state, score) {
      state.motor = score;
    },
    setVerbal(state, score) {
      state.verbal = score;
    },
  }
})
