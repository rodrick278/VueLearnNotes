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