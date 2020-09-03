# Vuex

### 一、什么是Vuex

* Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**
* 它采用 集中式存储管理 应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

> **状态管理**是什么

* 你可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面。然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用，同时，他是响应式的

* 如果你自己封装实现一个对象能不能保证它里面所有的属性做到响应式呢？当然也可以，只是自己封装可能稍微麻烦一些

### 二、状态管理



#### 1.单界面的状态管理

![image-20200903211951047](https://gitee.com/rodrick278/img/raw/master/img/image-20200903211951047.png)

* **state**，驱动应用的数据源【状态】；
* **view**，以声明方式将 **state** 映射到视图；
* **actions**，响应在 **view** 上的用户输入导致的状态变化。

之前我们已经学过了，使用props传参等，不再赘述

#### 2. 多界面的状态管理

<img src="https://gitee.com/rodrick278/img/raw/master/img/image-20200903221121942.png" alt="image-20200903221121942" style="zoom: 80%;" />

* Vue Components是vue组件
* Mutations ：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
* State 是vuex中状态的集合
* Actions与Mutations 类似，经常与后端交互，不同在于：
  * Action 提交的是 mutation，而不是直接变更状态。
  * Action 可以包含任意异步操作。

##### 2.1 基本使用

1. 目录

   一般vuex的文件我们是在 @store/index.js

2. index.js

   和router一样，插件需要注册，注册会调用他的install方法，注意这里是 `new Vuex.Store` 而不是 `new Vuex` ,传入的几个对象后面会做详细介绍 

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   Vue.use(Vuex)
   
   export default new Vuex.Store({
     state: {
     },
     mutations: {
     },
     actions: {
     },
     modules: {
     }
   })
   
   ```

3. 使用

   * 首先把我们需要管理的状态，放入 `state` 

     ```js
     state: {
         counter:10000
       },
     ```

   * 将我们想要对 `state` 做的操作方法放入 `mutations` ，这里我们跳过了 `Actions` ,因为官方允许这么做

     每个方法默认会有一个 `state` 的参数，可以直接调用，对应的就是我们上面定义的 `state` 

     ```js
     mutations: {
         add(state){
           state.counter++
         },
         sub(state){
           state.counter--
         }
       },
     ```

   * 拿`state`的值来使用

     ```vue
     <h2>{{$store.state.counter}}</h2>
     ```

   * 调用`mutations`的方法

     这里就是到了我们的`commit`步骤

     > 注意
     >
     > 这里不推荐使用 `this.$store.state.counter++` 这种写法直接跳过`mutation`对`state`进行处理，因为1是不符合我们上面最开始说的那套循环状态，2是Vue Devtools也无法监控到`state`的值变化

     ```js
     methods: {
         plus() {
           // this.counter++
           // this.$store.state.counter++
           this.$store.commit('add')
         },
         min() {
           // this.counter--
           // this.$store.state.counter--
           this.$store.commit('sub')
         }
       },
     ```

   * Vue Devtools会进行监控

     ![image-20200903225809443](https://gitee.com/rodrick278/img/raw/master/img/image-20200903225809443.png)

