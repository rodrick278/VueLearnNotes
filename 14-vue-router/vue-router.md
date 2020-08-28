## vue-router

### 一、什么是路由

* **路由（routing）**就是通过互联的网络把信息从源地址传输到目的地址的活动
* 路由器提供了两种机制: **路由和转送.**
  * 路由是决定数据包从来源到目的地的路径.
  * 转送将输入端的数据转移到合适的输出端.
* 路由中有一个非常重要的概念叫**路由表**.
  * 路由表本质上就是一个映射表, 决定了数据包的指向



### 二、前后端渲染

1. 后端渲染（服务端渲染） jsp技术 后端路由，后端处理URL和页面映射关系，例如springmvc中的@requestMapping注解配置的URL地址，映射前端页面
2. 前后端分离（ajax请求数据） 后端只负责提供数据 输入王之后从静态资源服务器拿资源（html+css+js）到浏览器  然后ajax发送网络请求后端服务器，服务器回传数据 js代码渲染dom
3. 单页面富应用（SPA[simple page web application]页面） 前后端分离加上前端路由，前端路由的url映射表不会向服务器请求，是单独url的的页面自己的ajax请求后端，后端只提供api负责响应数据请求。改变url，页面不进行整体的刷新。 整个网站只有一个html页面。

### 三、url的hash和HTML5的history模式

 * hash

    * URL的hash也就是锚点(#), 本质上是改变window.location的href属性.
    * 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新

   <img src="https://gitee.com/rodrick278/img/raw/master/img/image-20200827224034402.png" alt="image-20200827224034402" style="zoom: 67%;" />

   测试发现url的地址栏改变了变成了http://localhost:8080/#/foo ，通过查看network发现只有favicon.ico资源重新请求了，这个是工程的logo图标，其他资源都未请求。可以通过改变hash改变url，此时页面是未刷新的。

   vue-router其实用的就是这样的机制，改变url地址，这个url地址存在一份路由映射表里面，比如`/user`代表要请求用户页面，只要配置了这个路由表（路由关系），就可以前端跳转而不刷新页面，所有的数据请求都走ajax。

   

* history模式

  history接口是HTML5新增的, 它有五种模式改变URL而不刷新页面

  >  [pushState&back](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)

  同样的使用HTML5的history模式也是不会刷新页面的,history对象栈结构，先进后出，pushState类似压入栈中，back是回退。

  ```js
  hristory.pushState({}, '', '/foo')
  history.back()
  ```

  ![img](https://gitee.com/rodrick278/img/raw/master/img/17-3.png)

  >  [replaceState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)

  replaceState模式与pushState模式区别在于replaceState模式浏览器没有返回只是替换，不是压入栈中。

  replaceState后会发现无法back 

  ```js
  history.replaceState({}, '', 'home')
  ```

  > [go](https://developer.mozilla.org/zh-CN/docs/Web/API/History/go)

  由于go会操作前进后退，所以只能在pushState后使用

  ```
  history.go(-1)//回退一个页面 -2就是两个
  history.go(1)//前进一个页面 2也是两个
  history.forward()//等价于go(1)
  history.back()//等价于go(-1)
  ```

### 四、vue-router 的安装配置

#### 1. 安装

* `npm install vue-router --save`

#### 2.配置

* 在src下创建一个router文件夹（一般安装vue-router时候会自动创建）

* 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)

  * 第一步：导入路由对象，并且调用 Vue.use(VueRouter)
  * 第二步：创建路由实例，并且传入路由映射配置
  * 第三步：在Vue实例中挂载创建的路由实例

  > router文件夹中的index.js

  ```js
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
  ```

  > main.js中挂载router对象

  ```js
  import Vue from 'vue'
  import App from './App'
  import router from './router';//如果只写到文件夹的话，会默认去找文件夹下的index.js
  
  
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
  
  ```



#### 3.基本使用

 1. 创建路由组件

    在components文件夹下创对应的组件

    ![image-20200828205627823](https://gitee.com/rodrick278/img/raw/master/img/image-20200828205627823.png)

	2. 在 `router/index.js` 中添加引用和对应关系[顺带提一下懒加载]

    ```js
    // 配置路由
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import Home from '../components/home'
    import About from '../components/about'
    
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
        //component: About
        component: () => import('@/components/About')//懒加载方式
      }
    ]
    
    const router = new VueRouter({
      routes,
      // 选择模式 hash or history or abstract
      mode:'history'
    })
    
    // 3.导出路由
    export default router
    
    ```

	3. 使用路由 App.vue

    ```vue
    <template>
      <div id="app">
    		<!-- router-link是vue本身封装的一个组件
    					router-view是点击router-link后显示的内容的位置可以占位用相当于-->    
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-view></router-view>
      </div>
    </template>
    
    <script>
    export default {
      name: 'App' 
    }
    </script>
    
    <style>
    </style>
    
    ```

	4. \<router-link>的其他属性

    * tag：tag可以指定\<router-link>之后渲染成什么组件, 比如上面的代码会被渲染成一个\<li>元素, 而不是\<a>

      ```
      <router-link to="/home" tag="button">首页</router-link>
      ```

    * replace:replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中

      也就是把默认的history.pushState改为history.replaceState

      ```
      <router-link to="/home" tag="button" replace>首页</router-link>
      ```

    * linkActiveClass:当\<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置linkActiveClass可以修改默认的名称

      * 未设置时

        ![image-20200828214655322](https://gitee.com/rodrick278/img/raw/master/img/image-20200828214655322.png)

      * 设置后 [在router对象里设置 一般不设置个人觉得好理解]

        ```js
        const router = new VueRouter({
          routes,
          mode:'history',
          // 把默认的router-link-active这个class改名为active
          linkActiveClass:'active'
        })
        ```

        ![image-20200828214837303](https://gitee.com/rodrick278/img/raw/master/img/image-20200828214837303.png)

    

#### 4.路由代码跳转

事件里绑定 `this.$router.push` 或者 `this.$router.replace`

```vue
<template>
  <div id="app">
    
    <!-- <router-link to="/home" replace>首页</router-link>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <button @click="syclick">首页</button>
    <button @click="abclick">about</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App' ,
  methods: {
    syclick() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    abclick(){
      this.$router.push('/about')
    }
  },
}
</script>

<style>
.active{
  color:red;
}
</style>

```

