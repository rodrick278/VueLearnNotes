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

// 使用vue进行开发
import Vue from "vue";

const app=new Vue({
  el:'#app',
  data:{
    msg:'hi , u are using vue with webpack'
  }
})