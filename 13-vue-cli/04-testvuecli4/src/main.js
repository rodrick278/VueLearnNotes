import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // .$mount('#app') 和 el:'#app' 没什么太大区别 就是多了一层判断是否存在#app
  render: h => h(App),
}).$mount('#app')
  