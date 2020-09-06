import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";


Vue.use(Vuex)

const state = {
  counter: 10000,
  student: [
    { id: 1, name: 'jck', age: 18 },
    { id: 2, name: 'kobe', age: 24 },
    { id: 3, name: 'anna', age: 35 }
  ],
  info: { name: 'boy', age: 88 }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    moduleA
  },
  getters
})
