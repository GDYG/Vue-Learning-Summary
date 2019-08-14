/*
* 首先我们使用export命令导出了模块对外提供的接口，下面就可以通过import命令来加载对应的这个模块了
* 首先，我们需要在HTML代码中引入两个JS文件，并设置type='module'
* import命令用于导入模块中的内容，例如aaa.js中的代码
* 如果我们希望某个模块中的所有信息都导入，可以通过 * 导入所有export变量
* 通常情况下要取一个名称，方便使用。
* */

//1 导入的{}中定义变量
import {name, flag, age} from "./aaa.js";
if(flag){
  console.log(name,age)
}

//2 直接导入export定义的变量
import {sex} from "./aaa.js"

console.log(sex)

//3 导入export的函数和类
import {fn,Person} from "./aaa.js";

fn(111);

let a = new Person();
a.run();

//4 导入export default中的内容
// import addr from "./aaa.js"
//
// console.log(addr);

import fn1 from "./aaa.js"

fn1(222)

//5 统一全部导入
import * as ccc from "./aaa.js"

console.log(ccc.name);