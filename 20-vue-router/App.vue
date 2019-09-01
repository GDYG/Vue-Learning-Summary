<template>
  <div id="app">

    <router-link to="/home" tag="button" active-class="active" replace>首页</router-link>
    <router-link v-bind:to="'/about/'+userId" tag="button" active-class="active" replace>关于</router-link>
    <router-link to="/ours" tag="button" active-class="active" replace>我们</router-link>
    <router-link :to="{path: '/profile',query: {name: 'HELLO',age: 13,height: 1.88}}" tag="button" active-class="active" replace>Profile</router-link>
<!--    <button @click="btnHello">首页</button>-->
<!--    <button @click="btnHome">关于</button>-->
<!--    <button @click="btnOur">我们</button>-->
<!--    <button @click="btnProfile">档案</button>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  },
  methods: {
    // btnHello() {
    //   // this.$router.push('/');
    //   this.$router.replace('/')
    // },
    //
    // btnHome() {
    //   // this.$router.push('/home');
    //   this.$router.replace('/home');
    // },
    // btnOur() {
    //   this.$router.replace('/ours')
    // },
    // btnProfile() {
    //   this.$router.push({
    //     path: '/profile',
    //     query: {
    //       name: 'kobe',
    //       age: 40,
    //       height: 1.88
    //     }
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  
  .active {
    color: #f00;
  }
</style>
