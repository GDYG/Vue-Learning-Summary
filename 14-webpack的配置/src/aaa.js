function sum(num1, num2) {
  return num1 + num2;
}
function mul(n, m) {
  return n * m;
}

//使用commonJS进行模块化
// module.exports = {
// //   sum,
// //   mul
// // }

//使用ES6进行模块化
export const name = 'HELLO'
export const age = 18