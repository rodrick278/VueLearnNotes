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

##### 2.2 Getters

可以把getters看成是计算属性

使用方法：

* 三种常见的传参以及使用

  `App.vue`

  ```vue
  <h2>大于20的学生信息：{{$store.getters.stuMoreThan20}}</h2>
  <h2>大于20的学生信息的长度是：{{$store.getters.stuMoreThan20Len}}</h2>
  <h2>大于动态参数的学生信息：{{$store.getters.changeAgeFilterStu(30)}}</h2>
  ```

  `index.js`

  ```js
  getters: {
      // 传一个参，默认state
      stuMoreThan20(state) {
        return state.student.filter(item => item.age >= 20)
      },
      // 传俩参数，默认state & getters
      stuMoreThan20Len(state, getters) {
        return getters.stuMoreThan20.length
      },
      // 不允许传入自定义参数，但是可以先return一个函数，这个函数的参数是你的自定义参数，然后在这个函数里返回就好
      changeAgeFilterStu(state) {
        return age=> {
          return state.student.filter(item=>item.age>age)
        }
      }
    }
  ```

##### 2.3 Mutation(状态更新）

1. 四种提交(commit)方式

   * 无参

   ````js
   // 组件内提交
   plus() {
         this.$store.commit("add");
       },
       
   // vuex接收
    mutations: {
       add(state) {
         state.counter++
       }
     },
   ````

   *  提交载荷（Payload）

     你可以向 `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**：

     在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：

     ```js
     // 组件内提交
     addStu() {
           const stu = { id: 3, name: "harry", age: 99 };
           this.$store.commit('addYourStu',{stu})
         },
         
     // vuex接收
      mutations: {
         addYourStu(state,payload){
         state.student.push(payload.stu)
         }
       },
     ```

   * 对象风格的提交方式

     提交 mutation 的另一种方式是直接使用包含 `type` 属性的对象：

     ```js
     // 组件内提交
     addStu() {
           const stu = { id: 3, name: "harry", age: 99 };
           this.$store.commit({
             type: "addYourStu",
             stu,
           });
         },
         
     // vuex接收
      mutations: {
         addYourStu(state,payload){
         state.student.push(payload.stu)
         }
       },
     ```

     ##### 2.4 Mutation  需遵守 Vue 的响应规则

     既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

     1. 最好提前在你的 store 中初始化好所有所需属性。
     2. 当需要在对象上添加新属性时，你应该

     * 使用 `Vue.set(obj, 'newProp', 123)`

       > Vue.set是将你将变量加入响应式系统的方法！

       , 或者

     * 以新对象替换老对象。例如，利用[对象展开运算符](https://github.com/tc39/proposal-object-rest-spread)我们可以这样写：

       ```js
       state.obj = { ...state.obj, newProp: 123 }
       ```

     * 删除的时候

       删除的时候，用 `delete state.obj.Prop` 是不能响应式的，虽然能删除这个属性

       ```
       Vue.delete(obj,'oldProp')
       ```

     ##### 2.5 mutation的类型常量

     使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：

     `store/mutations-type.js`

     ```
     export const ADD='add'
     ```

     `index.js`

     ```js
     import {ADD} from "@/store/mutations-type.js";
     
     mutations: {
         [ADD](state) {
           state.counter++
         }
       },
     ```

     `App.vue`

     ```js
     import {ADD} from "@/store/mutations-type.js";
     
     methods: {
         plus() {
           // this.counter++
           // this.$store.state.counter++
           this.$store.commit(ADD);
         }
     }
     ```

     

