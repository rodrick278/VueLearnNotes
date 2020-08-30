<template>
  <div id="app">
    <!-- <router-link to="/home" replace>首页</router-link>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link>-->
    <!-- <button @click="syclick">首页</button>
    <button @click="abclick">about</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+uid">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'jck',sex:'man'}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="user,profile">
       <router-view/>
    </keep-alive>

   
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      uid: "zhangsan",
    };
  },
  methods: {
    syclick() {
      // this.$router.push('/home')
      this.$router.replace("/home");
    },
    abclick() {
      this.$router.push("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.uid);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "jck",
          sex: "man"
        },
      });
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
