import { name, flag, sum, str1, mul, Person } from './index.js'
// 导入所有的值 不用加{} 并且用as给别名
import  * as all  from "./index.js";

console.log(all.name+'AAA');

if (flag) {
  console.log('getFlag');
  console.log(sum(1, 2, 3));
}

console.log(str1);

console.log(mul(3, 4));

const p = new Person('man')
console.log(p.sex);
p.run()

// import defalut的时候 不用加{}并且可以自己命名
import myadd from "./index.js";

console.log(myadd);