<template>
  <div>
    <h2>我是用户档案</h2>
    <ul>
      <li v-for="(item,key) in $route.query" :key="item">{{key}}-{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {  
    name:'profile',
  }
</script>

<style scoped>

</style>