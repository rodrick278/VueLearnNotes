import Vue from 'vue'
import Vuex from 'vuex'
import { ADD } from "@/store/mutations-type.js";

Vue.use(Vuex)

const modeleA={
  state:{
    name:"zhangsan"
  },
  mutations:{
    aChngeName(state,payload){
      state.name=payload.name
    }
  },
  actions:{
    asyncChangeName(context){
      setTimeout(() => {
        console.log(context);
        context.commit('aChngeName',{name:'wangwu'})
      }, 1000);
    }
    // asyncChangeName({ state, commit, rootState }){
    //   setTimeout(() => {
    //     if(state.name=='zhangsan'){
    //       commit('aChngeName',{name:rootState.info.name})
    //     }
    //   }, 1000);
    // }
  },
  getters:{
    getName1(state){
      return state.name+'000'
    },
    getName2(state,getters){
      return getters.getName1+'111'
    },
    getName3(state,getters,rootGetters){
      return getters.getName2+rootGetters.info.name
    },
  }
}

export default new Vuex.Store({
  state: {
    counter: 10000,
    student: [
      { id: 1, name: 'jck', age: 18 },
      { id: 2, name: 'kobe', age: 24 },
      { id: 3, name: 'anna', age: 35 }
    ],
    info: { name: 'boy', age: 88 }
  },
  mutations: {
    [ADD](state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },
    addAnyCount(state, count) {
      state.counter += count
    },
    addYourStu(state, payload) {
      //   state.student.push(payload.stu)
      state.student.push(payload.stu)
    },
    changeInfo(state) {
      state.info.name = 'name2'
      // 增加属性
      // Vue.set(state.info,'heigth',180)
      //删除属性  用delete不能响应式
      // delete state.info.age
      // Vue.delete(state.info,'age')
    }
  },
  actions: {
    // context 上下文
    aUpdateInfo(context, payload) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeInfo')
          resolve('我是执行后返回的data')
        }, 100);
      }
      )

    }
  },
  modules: {
    modeleA
  },
  getters: {
    // 传一个参，默认state
    stuMoreThan20(state) {
      return state.student.filter(item => item.age >= 20)
    },
    // 传俩参数，默认state & getters
    stuMoreThan20Len(state, getters) {
      return getters.stuMoreThan20.length
    },
    // 不允许传入自定义参数，但是可以先return一个函数，这个函数的参数是你的自定义参数，然后在这个函数里返回就好
    changeAgeFilterStu(state) {
      return age => {
        return state.student.filter(item => item.age > age)
      }
    }
  }
})
