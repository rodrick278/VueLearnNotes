<template>
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="plus">+</button>
    <button @click="min">-</button>
    <h2>{{$store.state.counter}}</h2>
    <!-- <hello-vuex :counter='counter'></hello-vuex> -->
    <hello-vuex ></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from '@/components/HelloVuex.vue';

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
      this.$store.commit('add')
    },
    min() {
      // this.counter--
      // this.$store.state.counter--
      this.$store.commit('sub')
    }
  },
  components:{
    HelloVuex
  }
};
</script>

<style>
</style>
