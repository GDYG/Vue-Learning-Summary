<template>
  <div>
    <h2>关于</h2>
    <p>我是组件about</p>
    <h2>{{user}}</h2>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        //$route 获取的是router对象中的routes的活跃项
        user: this.$route.params.userId //获取提交路由中的值
      }
    }
  }
</script>

<style scoped>

</style>
