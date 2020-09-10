import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 基本使用
// axios({
//   url:'http://httpbin.org/post',
//   method:'post'
// }).then(res=>{
//   console.log(res);
// })

// axios.post('http://httpbin.org/post',{
//   name:'zhangsan',
//   age:18
// }).then(res=>{
//   console.log(res);
// })


// // 并发处理
// axios.all([
//   axios.get('https://httpbin.org/headers'),
//   axios.post('http://httpbin.org/post',{
//     name:'abc',age:18
//   })
// ])
// // all返回的时候，axios提供了spread方法，可以单独拿出每一个res
// .then(results=>{console.log(results[0].data,results[1].data);})
// .then(axios.spread((res1,res2)=>{console.log(res1,res2);}))

// // 设置全局的 axios 默认值
// axios.defaults.baseURL='https://httpbin.org'
// axios.defaults.timeout=5000
// // 这样只需要拼后面的url
// axios.all([
//   axios.get('/headers'),
//   axios.post('/post',{
//     name:'abc',age:18
//   })
// ])
// .then(axios.spread((res1,res2)=>{console.log(res1,res2);}))

// // 注意 axios.post(url[, data[, config]])的第二个参数 是data，不传也要给个空值
// axios.post('http://httpbin.org/post',{}, {
//   params: {
//     name: 'zhangsan',
//     age: 18
//   }
// }).then(res => {
//   console.log(res);
// })


// 创建axios实例
const instance1 = axios.create({
  baseURL: 'https://api.example.com'
});

instance1('url1',{
  timeout: 1000,
}).then(res=>{
  console.log(res);
})

instance1('url2',{
  timeout: 2000,
}).then(res=>{
  console.log(res);
})

