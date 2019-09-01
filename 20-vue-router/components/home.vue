<template>
  <div>
    <h2>我是组件标题home</h2>
    <p>我是组件内容home</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    // created() {//生命周期函数，在template创建的时候执行
    //   document.title = '首页'
    // },
    // mounted() {} 在template加载到DOM中时执行
    // updated() {} 在页面进行刷新的时候执行

    //为了能在首页点击消息时，再点击其他不是首页的项时，再回来点击首页，还是显示消息的内容而不是新闻的内容
    data() {
      path: '/home/news'
    },
    activated() {//当组件活跃的时候执行
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
