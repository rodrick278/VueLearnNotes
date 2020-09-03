import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:10000
  },
  mutations: {
    add(state){
      state.counter++
    },
    sub(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
