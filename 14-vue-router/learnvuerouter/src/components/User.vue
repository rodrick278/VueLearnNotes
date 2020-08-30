<template>
  <div>
    <h2>我是用户页面</h2>
    <!-- <span>当前用户是：{{username}}</span> -->
    <span>当前用户是：{{$route.params.userid}}</span>

  </div>
</template>

<script>
export default {
  name:'user',
  computed: {
    username() {
      // $route 指向的是当前活跃的路由 注意不是$router 别弄混 $router是整个router的对象
      return this.$route.params.userid;
    },
  },
};
</script>

<style scoped>
</style>
