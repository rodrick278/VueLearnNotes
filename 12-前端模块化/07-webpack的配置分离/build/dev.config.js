/** 开发环境用 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase:'./dist', // 服务于哪个文件夹
    inline:true // 是否实时监听
  }
})