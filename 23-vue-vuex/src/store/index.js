import Vue from 'vue'
import Vuex from 'vuex'
import Module from "webpack-bundle-analyzer/src/tree/Module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'kobe', age: 18},
      {id: 111, name: 'James', age: 10},
      {id: 112, name: 'curry', age: 24},
      {id: 113, name: 'Si', age: 21}
    ],
    info: {
      name: 'aaa',
      age: 40,
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementFt(state, data) {
    //   state.counter += data
    // },
    //特殊的提交封装处理
    incrementFt(state, payload) {//载荷
      state.counter += payload.data
    },
    incrementName(state,name) {
      state.students.push(name)
    },
    updateIn(state) {
      // state.info['name'] = 'vue'//此种方式不能做到响应式
      // Vue.set(state.info,'name','vue')//此种方式能做到响应式

      // delete state.info.age//此种方式不能做到响应式
      // Vue.delete(state.info,'age')//此种方式能做到响应式

      // setTimeout(() => {
      //   state.info.name = 'vue'
      // },1000) //所有异步操作都不能在mutation中进行，都在actions中操作
      state.info.name = 'vue'
    }
  },
  actions: {
    // aUpdate(context) {
    //   setTimeout(() => {
    //     context.commit('updateIn')
    //   },1000)
    // }


    //1、通过payload方式告诉外面里面已经完成了
    // aUpdate(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateIn')
    //     payload.success()
    //   },1000)
    // }

    //通过promise方式告诉外面
    aUpdate(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateIn')
          console.log(payload)
          resolve('里面完成了')
        },1000)
      })
    }
  },
  getters: {//将state中的数据经过处理后的结果
    moreStu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    moreStuAge(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }

  },
  modules: {
    a: {
      state: {
        name: 'zhangsan'
      },
      mutations: {
        //用法一样
      },
      getters: {
        //用法一样
        },
      actions: {
        //模块里面的actions只能提交模块里面的mutations中的方法，如果想要提交根里面的，需要用context.rootgetter
        // aUpdateInfo(context) {
        //   context.commit('提交')
        // }
      }
    }
  }
})

export default store
