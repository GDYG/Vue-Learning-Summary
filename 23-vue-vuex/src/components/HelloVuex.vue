<template>
  <div>
    <h2>{{count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <h2>getters的使用</h2>
    <h2>{{$store.getters.moreStu}}</h2>
    <h2>{{$store.getters.moreStuAge(12)}}</h2>
    <button @click="addFt(5)">+5</button>
    <button @click="addFt(10)">+10</button>
    <button @click="addName">添加</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改数据</button>

    <h2>modules的使用</h2>
    <h2>{{$store.state.a.name}}</h2>

  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    computed: {
      count() {
        return this.$store.state.counter
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
      },
      addFt(data) {
        // this.$store.commit('incrementFt',data) //可以传递参数

        //特殊的提交封装
        this.$store.commit('incrementFt',{
          type: Number,
          data
        })
      },
      addName() {
        let name = {id: 114,name: 'alan',age: 35};
        this.$store.commit('incrementName',name)
      },
      updateInfo() {
        // this.$store.commit('updateIn')

        //进行异步操作时的提交方式
        // this.$store.dispatch('aUpdate');

        //一旦里面成功，里面回馈给外面一些信息的时候
        // this.$store.dispatch('aUpdate',{
        //   message: 'HELLO',
        //   success: () => {
        //     console.log('里面已经完成了')
        //   }
        // })

        //通过promise方式
        this.$store.dispatch('aUpdate','在里面执行了').then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
