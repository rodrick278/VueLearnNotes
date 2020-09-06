export default{
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