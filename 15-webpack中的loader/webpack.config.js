const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8196,
              //当加载的图片小于limit时，会将图片编译成base64位的字符串格式
              //当加载的图片大于limit时，需要使用file-loader模块进行加载.并且在output中添加publicPath：'dist/'

              name: 'img/[name].[hash:8].[ext]'
              //图片资源加载过程，在dist文件夹下创建img文件夹，同时图片原来的名称作为name，用8位哈希值防止命名重复，同时使用原来的扩展名ext
            }
          }
        ]
      },

       //将ES6转译成es5的操作
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}