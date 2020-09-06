export default{
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