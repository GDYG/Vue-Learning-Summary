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
    name: "HomeMessage",
    data() {
      return {
        message: '消息'
      }
    }

  }
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>
