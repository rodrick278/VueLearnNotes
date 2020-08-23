const path = require('path')

module.exports = {
  // 入口可以是字符串 数组 对象 
  entry: './src/main.js',
  // 出口通常是一个对象  path必须是绝对路径 这里我们依赖node的path包获取项目绝对路径
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载  style-loader 负责将模块的导出作为样式添加到 DOM 中
        // 使用多个loader时 加载顺序是先右后左  所以css-loader放在右边 先加载
        // use: [ 'style-loader','css-loader' ]
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当图片小于这个大小【kb*1024】 直接加载为base64  大于的时候 需要file-loader
              limit: 129808,
              //img表示文件父目录，[name]表示文件名,[hash:8]表示将hash截取8位[ext]表示后缀
              name:'img/[name].[hash:8].[ext]'
            },
           
          }
        ]
      },
      {
        test: /\.js$/,
        // 排除node模块的js和bower的js
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //如果要使用@babel/preset-env这里需要在根目录新建一个babelrc的文件 然后去这里面找配置
            // presets: ['@babel/preset-env']
            // 这里直接指定就行
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve:{
    // alias 别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}