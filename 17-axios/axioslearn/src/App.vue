<template>
  <div>
    <h2>{{jsonData}}</h2>
  </div>
</template>

<script>
import { request } from "./network/request.js";

export default {
  name: "App",
  data() {
    return {
      jsonData: "11",
    };
  },
  comments: {},
  created() {
    // //方法1
    // request(
    //   {
    //     url: "/get",
    //   },
    //   (res) => {
    //     console.log(res);
    //     this.jsonData = res;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );

    // 方法2&3
    request({
      url: "/get",
    })
      .then((res) => {
        console.log("out res",res);
        this.jsonData = res;
      })
      .catch((err) => {
        console.log("out err", err);
      });
  },
};
</script>

<style scoped>
</style>