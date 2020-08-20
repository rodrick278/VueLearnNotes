### 一、ES6的模块导出导入

#### 0.vscode配置

下载 **Live Server**插件 保证server环境 否则会跑不起来

#### 1.html引用js

`<script src="aaa.js" type="module"></script>`

使用`type="module"`来表明这个是模块化 文件

#### 2.导出 export

1. 导出对象或者单独变量

   ```javascript
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

   ```javascript
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

   ```javascript
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

   ```javascript
   import { name, flag, sum, str1, mul, Person } from './index.js'
   
   console.log(name,flag,sum(1, 2, 3))
   ```

2. 导入所有

   *导入所有的值 不用加{} 并且**要用**AS 起一个别名*

   ```javascript
   import  * as all  from "./index.js";
   
   console.log(all.name);
   ```

3. 导入default

   *import defalut的时候 不用加{}并且可以自己命名*

   ```javascript
   //index.js:export default {address,address1}
   
   import myadd from "./index.js";
   
   console.log(myadd);//这里的myadd==={address,address1}
   ```

### 二、webpack

#### 1. webpack起步

 1. vscode的配置

     * cd到根目录   `PS D:\MyCode\vueLearn\12-前端模块化> cd .\02-webpack起步\`

     * 执行 `webpack ./src/main.js ./dist/bundle.js`

       **注意此时会出现报错情况 处理方式有两种**

          **一、执行 `npx webpack ./src/main.js ./dist/bundle.js` npx可以正常执行**

          **二、更新执行策略**

       1. **打开vscode，然后在文件根目录右键点击 Open in Terminal;**

         2. **输入 get-ExecutionPolicy　，然后回车，如果返回 Restricted，则状态是禁止的；**

         3. **然后输入 set-ExecutionPolicy RemoteSigned；**

         4. **最后按上键直到看见get-ExecutionPolicy命令后回车，此时就显示RemoteSigned*，就开启了**

            > 下面是4种常用的执行策略：
            >
            > **Restricted**： 
            >
            > 禁止运行任何脚本和配置文件。
            >
            > **AllSigned** ：
            >
            > 可以运行脚本，但要求所有脚本和配置文件由可信发布者签名，包括在本地计算机上编写的脚本。
            >
            > **RemoteSigned** ：
            >
            > 可以运行脚本，但要求从网络上下载的脚本和配置文件由可信发布者签名；    不要求对已经运行和已在本地计算机编写的脚本进行数字签名。
            >
            > **Unrestricted** ：
            >
            > 可以运行未签名脚本。（危险！）    

 2. 配置完成

     此时dist文件夹下会有webpack打包好的bundle.js  这样在index.html里引用bundle.js就可以了

     > 一般项目里src文件夹放置源码 dist里放置打包文件



#### 2. webpack配置

 1. 根目录创建 `webpack.config.js` 文件 用来配置出入口

    ```javascript
    const path=require('path')
    
    module.exports={
      // 入口可以是字符串 数组 对象 
      entry:'./src/main.js',
      // 出口通常是一个对象  path必须是绝对路径 这里我们依赖node的path包获取项目绝对路径
      output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
      }
    }
    ```

    > 此时 cd 根目录下 执行webpack就可以自动打包了 ***但是这里用的webpack是全局安装的webpack，项目里通常应当装本地的webpack 防止版本问题 具体方式见后续***

 2. cd到当前项目根目录 执行`npm init -y`  **-y**代表一路yes默认创建  此时会创建一个 *package.json* 文件

 3. 局部安装webpack 根目录下 执行

    ```
    npm install webpack@3.6.0 --save-dev
    ```

    此时会创建在项目下有一个webpack 同时 *package.json*文件中会增加

    ```json
     "devDependencies": {
        "webpack": "^3.6.0"
      }
    ```

    这个代表项目依赖的是这个版本的webpack

	4. 配置 快捷脚本命令 npm run xxx

    在*package.json*中的*scripts*属性中添加`"build": "webpack"` 现在结构如下

    ```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
      },
    ```

	5. 此时我们执行 `npm run build` 就会自动执行我们项目里的webpack的webpack命令

    > 注：npackage.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。
    >
    > ​		首先，会寻找本地的node_modules/.bin路径中对应的命令。
    >
    > ​		如果没有找到，会去全局的环境变量中寻找。
    >
    > ​		*而我们此时的 `npm run build` 相当于走了第一步

    



