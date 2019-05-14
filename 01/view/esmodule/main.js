//=>导入
//=>导出的是一个对象可以使用解构赋值获取数据
import { a, b } from "./1.js.js"

//=>使用xx代表模块所有内容接受
import * as xx from "./1.js.js"
console.log(a, b);
console.log(xx);