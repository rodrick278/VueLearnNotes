const {add,mul} = require('./js/mathUtil')
import { name,age } from "./js/info";

 console.log(add(20,30)); 
 console.log(mul(20,30)); 
 console.log(name,age);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.writeln("my webpack learn!")

//6.使用vue开发
import Vue from 'vue'
//导入封装组件对象的js模块
// import App from './js/app'
//导入封装vue的.vue文件
import App from './vue/App.vue'
new Vue({
  el: "#app",
  //使用组件
  template: '<App/>',
  components: {
    //注册局部组件
    App
  }
})