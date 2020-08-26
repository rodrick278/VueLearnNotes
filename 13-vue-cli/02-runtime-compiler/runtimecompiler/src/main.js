// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

// const cpn = {
//   template: '<div>{{msg}}</div>',
//   data () {
//     return {
//       msg: 'i am msg'
//     }
//   }
// }

new Vue({
  el: '#app',
  // 传统写法：
  // components: { App },
  // template: '<App/>'
  // 使用render：
  render: (createElement) => {
    // 1.createElement 普通使用
    // return createElement('h2', {class: 'box'}, ['aaa',
    //   createElement('button', ['按钮'])
    // ])

    // 2 传入组件方式，所以说App也是个组件 也可以传入
    // return createElement(cpn)
    return createElement(App)

    // 而我们的.vue 文件中的template 会自动编译为一个render函数
    // 是由vue-template-compiler 这个组件做了这个事[看package.json] 这样的话 我们在runtime-only模式下就不会因为有template而报错了
  }
})
