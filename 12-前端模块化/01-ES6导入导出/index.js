const name = '小米'
const age = 18
const flag = true

function sum(...nums) {
  return nums.reduce((preval, nowval) => {
    return preval + nowval
  }, 0)
}

// 1.导出方式1
export {
  name,
  flag,
  sum
}

// 2.导出方式2
export let str1 = 'qwer'

// 3.导出函数和类
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

// 4.export defalut  一个模块里只能有一个defalut
const address='shanghai'
const address1='beijing'
export default {address,address1}

// 导出的default是函数时 不用写函数name 因为没有意义
// export default function(){
//   console.log('aaa');
// }