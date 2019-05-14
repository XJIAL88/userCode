### webpack配置

#### 初始化安装

```
npm init -y
```
#### 安装webpack开发依赖 一般使用3.6.0
```
npm install webpack@3.0.6 --save-dev
npm install webpack@3.3.6 --D
```
#### 安装babel以及es2015以及stage-0预设识别es6和es7
```
npm install babel babel-core babel-loader --save-dev
npm install babel-preset-es2015 babel-preset-stage-0 --save-dev
```
#### 安装识别和转义css less
```
npm install css-loader style-loader --save-dev
npm install less less-loader --save-dev
```
#### 识别文件路径，例如：导入图片
```
npm install file-loader url-loader --save-dev
```
#### 安装识别的html插件
```
npm install html-webpack-plugin --save-dev
```
#### 安装webpack服务
```
npm install webpack-dev-server --save-dev
```
#### 安装vue-loader vue-template-comiler
- vue-loader解析.vue文件（会自动调用vue-template-compiler）
- vue-template-compiler用来解析vue模板
```
npm install vue-loader vue-template-compiler --save-dev
```
#### 配置文件

##### 配置package.json中的脚本
```
"scripts": {
    "build":"webpack",  打包
    "dev":"webpack-dev-server" --open 会自动打开浏览器
 },
```

##### 配置.babelrc文件，设置预设
```
{"presets:["es2015","stage-0"]}
```

##### 配置webpack.config.js文件
- 单口文件
```
let htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"build.js",
        path:__dirname+"/dist"
    },
    module:{
        rules:[
            {test:/\.js$/,use:["babel-loader"],exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(jpg|gif|png|jpeg)$/i,use:["url-loader?limit=5210"]},
            {test:/\.vue$/,use:"vue-loader"} //=>编译vue文件
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:"xiao.html",
            template:"./src/index.html"
        });
    ]
}
```
```
npm install babel babel-core babel-loader babel-preset-2015 babel-preset-stage-0 css-loader style-loader less-loader less file-loader url-loader html-webpack-plugin 
webpack-dev-server@2.11.1 vue-loader vue-template-compiler --save-dev
```



















