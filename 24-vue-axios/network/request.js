import axios from 'axios'

//方式一
// export function request(config) {
//   return new Promise((resolve, rejecct) => {
// //     const instance = axios.create({ //创建axios实例
// //       baseURL: 'http://123.207.32.32:8000',
// //       timeout: 5000
// //     })
// //
// //     instance(config).then(res => {
// //       resolve(res)
// //     }).catch(err => {
// //       reject(err)
// //     })
// //   })
// // }

//方式二

// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   return instance(config)
// }

//方式三
export function request(config, success, filture) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config).then(res => {
    success(res)
  }).catch(err => {
    filture(err)
  })
}
