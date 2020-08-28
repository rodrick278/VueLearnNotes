// 配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/home'
// import About from '../components/about'

// 1.使用插件Vue.use
Vue.use(VueRouter)

// 2.创建路由
//数组来存放对应关系
const routes = [
  {
    // 默认值 代表当链接为空时 重定向到 /home
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    // component: About
    component: () => import('@/components/About')
  }
]

const router = new VueRouter({
  routes,
  // 选择模式 hash or history or abstract
  mode:'history',
  linkActiveClass:'active'  
})

// 3.导出路由
export default router



