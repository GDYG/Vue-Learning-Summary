<template>
  <div>
    <h2>我是组件标题</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: '我是组件内容'
      }
    }
  }
</script>

<style scoped>

</style>