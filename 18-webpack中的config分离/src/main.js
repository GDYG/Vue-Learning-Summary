import {aaa} from "./js/ccc.js"

console.log(aaa);

require('../css/style.css');

require('../css/style01.less')

document.write('HELLO! WORLD');

import Vue from 'vue'

//3 将组件对象全部分离到另一个vue文件夹下的app.js中，然后通过导入进来，但还是没有做到JS代码的分离
// import App from '../vue/app.js'

//4 将组件对象分离到一个vue文件里面，template和JS代码和style都是分离开来的。
import App from '../vue/App.vue'


//2 第二种方式 虽然从Vue中分离出来，但是还是没有把模板跟JS代码分开来写
/*const App = {
  template: '<div><h2>{{message}}</h2>' +
      '<button @click="btnClick"></button></div>',
  data() {
    return {
      message: 'WebPack'
    }
  },
  methods: {
    btnClick() {

    }
  }
}*/

const app = new Vue({
  el: '#app',//如果同时有el和template时，template会将el挂载的内容替换

 //1 第一种方式，都写在Vue里，没有做到分离
/*  template: '<div>' +
      '<h2>{{message}}</h2>' +
      '<button @click="btnClick">按钮</button>' +
      '</div>',
  data: {
    message: 'WebPack'
  }*/

  template: '<App/>',
  components: {
    App
  }
})