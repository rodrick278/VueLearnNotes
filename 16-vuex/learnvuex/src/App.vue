<template>
  <div id="app">
    <h2>{{$store.state.moduleA.name}}</h2>
    <h2>{{$store.getters.getName1}}</h2>
    <h2>{{$store.getters.getName2}}</h2>
    <h2>{{$store.getters.getName3}}</h2>
    <button @click="mCName">同步修改名字</button>
    <button @click="asyncCName">异步修改名字</button>

    <h2>-----------------我是分割线-----------------</h2>
    <h2>{{message}}</h2>
    <button @click="plus">+</button>
    <button @click="min">-</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <h2>{{$store.state.counter}}</h2>

    <!-- <hello-vuex :counter='counter'></hello-vuex> -->
    <hello-vuex></hello-vuex>
    <h2>-----------------我是分割线-----------------</h2>
    <button @click="addStu">添加一个学生</button>
    <h2>大于20的学生信息：{{$store.getters.stuMoreThan20}}</h2>
    <h2>大于20的学生信息的长度是：{{$store.getters.stuMoreThan20Len}}</h2>
    <h2>大于动态参数的学生信息：{{$store.getters.changeAgeFilterStu(30)}}</h2>

    <h2>-----------------我是分割线-----------------</h2>
    <button @click="cinfo">改变info</button>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex.vue";
import { ADD } from "@/store/mutations-type.js";

export default {
  data() {
    return {
      message: "hi!",
      // counter: 0
    };
  },
  methods: {
    plus() {
      // this.counter++
      // this.$store.state.counter++
      this.$store.commit(ADD);
    },
    min() {
      // this.counter--
      // this.$store.state.counter--
      this.$store.commit("sub");
    },
    addcount(count) {
      this.$store.commit("addAnyCount", count);
    },
    addStu() {
      const stu = { id: 3, name: "harry", age: 99 };
      // this.$store.commit('addYourStu',{stu})
      this.$store.commit({
        type: "addYourStu",
        stu,
      });
    },
    cinfo() {
      // this.$store.commit('changeInfo')
      this.$store.dispatch("aUpdateInfo", "我是payload").then((res) => {
        console.log(res);
        console.log("成功执行完异步操作！");
      });
    },
    mCName() {
      this.$store.commit({
        type: "aChngeName",
        name: "lisi",
      });
    },
    asyncCName() {
      this.$store.dispatch("asyncChangeName");
    },
  },
  components: {
    HelloVuex,
  },
};
</script>

<style>
</style>
