import Vue from 'vue'
import App from './App'
import axios from 'axios'

import {request} from '../network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/data'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

//封装axios

request({
  url: '/home/data',
}).then(res => {
    console.log(res)
}).catch(err => {
  console.log(err)
})

//方式三封装
// request({
//   url: '/home/data'
// }, res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })
