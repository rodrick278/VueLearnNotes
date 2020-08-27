// 配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// 1.使用插件Vue.use
Vue.use(VueRouter)

// 2.创建路由
//数组来存放对应关系
const routes=[]

const router=new VueRouter({
  routes  
})

// 3.导出路由
export default router

