// 配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
// import About from '../components/About'
import User from '@/components/User';


// 推荐懒加载的组件放在这里统一管理
//  注意一下这里的@的含义 在 build/webpack.base.conf.js里有这个配置 也就是@=src目录[默认]
// alias: {
//       '@': resolve('src'),
//     }
const About = () => import('@/components/About.vue')
const Profile = () => import('@/components/Profile.vue')

const HomeNews = () => import('@/components/HomeNews.vue')
const HomeMessage = () => import('@/components/HomeMessage.vue')



// 1.使用插件Vue.use
Vue.use(VueRouter)

// 2.创建路由
//数组来存放对应关系
const routes = [
  {
    // 默认值 代表当链接为空时 重定向到 /home
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'home',
    component: Home,
    // meta:元数据[描述数据的数据] 类似于描述这个组件本身的一些内容
    meta:{
      title:'首页'
    },
    // 路由嵌套子路由
    children: [
      // {
      //   // 默认路径
      //   path: '',
      //   redirect:'news'
      // },
      {
        //这里不要带/开头 而上面一级是要/的
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    name:'about',
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    },
    beforeEnter(to, from, next) {
      next();
      console.log('关于页面的路由独享的守卫');
    },
    // component: () => import('@/components/About')
  },
  {
    name:'user',
    path: '/user/:userid',
    component: User,
    meta:{
      title:'用户'
    },
  },
  {
    name:'profile',
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
  }

]

const router = new VueRouter({
  routes,
  // 选择模式 hash or history or abstract
  mode: 'history',
  linkActiveClass: 'active'
})

/**
 * 全局导航守卫 源码部分
 * 
 * 前置守卫(guard)beforeEach(guard: NavigationGuard): Function
 * 后置钩子(hook) afterEach
 * 
 * export type NavigationGuard<V extends Vue = Vue> = (
  to: Route,
  from: Route,
  next: NavigationGuardNext<V>
) => any
 */

router.beforeEach((to, from, next) => {
  // next表示执行路由跳转
  // console.log(from,to,'beforeEach');
  // document.title=to.meta.title //由于home有嵌套路由的原因 这样直接拿会拿不到title
  document.title=to.matched[0].meta.title
  next();
});

router.afterEach((to, from) => {
  // console.log(from,to,'afterEach');
});


// 3.导出路由
export default router



