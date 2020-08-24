<template>
  <div>
    <h2>我是cpn组件</h2>
    <span>{{msg}}-{{name}}</span>
  </div>
</template>

<script>
export default {
  name:"Cpn",
  data(){
    return {
      msg:"cpn的message",
      name:"cpn的name"
    }
  }
}
</script>
<style scoped>
span{
  color: darkmagenta;
}
</style>