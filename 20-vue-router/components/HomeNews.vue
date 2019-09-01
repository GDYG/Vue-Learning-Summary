<template>
  <div>
    <ul>
      <li>{{message}}1</li>
      <li>{{message}}2</li>
      <li>{{message}}3</li>
      <li>{{message}}4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeNews",
    data() {
      return {
        message: '新闻'
      }
    }
  }
</script>

<style scoped>
ul li{
  list-style-type: none;
}
</style>
