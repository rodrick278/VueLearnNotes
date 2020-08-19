### 一、ES6的模块导出导入

#### 0.vscode配置

下载 **Live Server**插件 保证server环境 否则会跑不起来

#### 1.html引用js

`<script src="aaa.js" type="module"></script>`

使用`type="module"`来表明这个是模块化 文件

#### 2.导出 export

1. 导出对象或者单独变量

   ```
   const name = '小米'
   const flag = true
   
   function sum(...nums) {
     return nums.reduce((preval, nowval) => {
       return preval + nowval
     }, 0)
   }
   
   export {
     name,
     flag,
     sum
   }
   
   export let str1 = 'qwer'
   ```

2. 导出函数和类

   ```
   export function mul(n1, n2) {
     return n1 * n2
   }
   
   
   export class Person {
     constructor(sex) {
       this.sex = sex
     }
   
     run() {
       console.log('run!');
     }
   }
   ```

3. **export defalut** 一个模块里只能有一个defalut

   ```
   const address='shanghai'
   const address1='beijing'
   export default {address,address1}
   
   // 导出的default是函数时 不用写函数name 因为没有意义
   export default function(){
     console.log('aaa');
   }
   ```

   #### 3.导入 import

   1. 导入指定模块 

      *需要用{ }包裹 并且名字是导出的名字 不可变*

      ```
      import { name, flag, sum, str1, mul, Person } from './index.js'
      
      console.log(name,flag,sum(1, 2, 3))
      ```

   2. 导入所有

      *导入所有的值 不用加{} 并且**要用**AS 起一个别名*

      ```
      import  * as all  from "./index.js";
      
      console.log(all.name);
      ```

   3. 导入default

      *import defalut的时候 不用加{}并且可以自己命名*

      ```
      //index.js:export default {address,address1}
      
      import myadd from "./index.js";
      
      console.log(myadd);//这里的myadd==={address,address1}
      ```

      

