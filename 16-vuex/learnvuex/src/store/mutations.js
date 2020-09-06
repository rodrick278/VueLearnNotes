import { ADD } from "@/store/mutations-type.js";

export default{
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
}