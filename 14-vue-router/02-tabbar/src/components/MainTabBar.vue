<template>
  <tab-bar>
    <template v-slot:default>
      <tab-bar-item path="/home" activeColor="blue">
        <template v-slot:item-icon>
          <img src="../assets/img/tabbar/home.png" alt />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/tabbar/home_active.png" alt />
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="blue">
        <template v-slot:item-icon>
          <img src="../assets/img/tabbar/type.png" alt />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/tabbar/type_active.png" alt />
        </template>
      </tab-bar-item>

      <tab-bar-item path="/shopcart" activeColor="blue">
        <template v-slot:item-icon>
          <img src="../assets/img/tabbar/shopcar.png" alt />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/tabbar/shopcar_active.png" alt />
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="../assets/img/tabbar/my.png" alt />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/tabbar/my_active.png" alt />
        </template>
      </tab-bar-item>
    </template>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
    components: {
    TabBar,
    TabBarItem,
  },

};
</script>

<style scoped>
</style>