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
