<template>
  <div>
    <h2>我是首页home</h2>
    <!-- 这里要写全路径 有/开头  -->
    <router-link to="/home/news">新闻1</router-link>
    <router-link to="/home/message">消息1</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  // activated和deactivated只在keep-alive的时候生效 且 这俩钩子在服务器端渲染期间不被调用。
  // 被 keep-alive 缓存的组件激活时调用
  activated(){
    this.$router.replace(this.path)
  },
  //被 keep-alive 缓存的组件停用时调用。
  deactivated(){
    
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    this.path=this.$route.path
    next()
  },
};
</script>
<style scoped>
</style>