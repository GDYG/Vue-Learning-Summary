let name = 'HELLO'
let age = 18
let flag = true

function  sum(num1, num2) {
  return num1 * num2;
}

//1 导入方式一
export {
  name, age, flag
}

//2 导入方式二
export let sex = '男'

//3 导入函数/类
export function fn(value) {
  console.log(value);
}

export class  Person {
  run() {
    console.log('HEIHEI');
  }
}

//4 export default
// const address = '北京'
// export default address

export default function (message) {
  console.log(message);
}
