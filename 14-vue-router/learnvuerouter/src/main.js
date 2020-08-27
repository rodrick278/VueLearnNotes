import Vue from 'vue'
import App from './App'
import router from './router';//如果只写到文件夹的话，会默认去找文件夹下的index.js


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
