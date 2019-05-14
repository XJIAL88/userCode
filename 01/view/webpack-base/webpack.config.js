let path = require("path"); //=>导入path模块
let htmlWebpackPlugin = require("html-webpack-plugin");
//=>单入口文件
module.exports = {
    //=>配置入口js文件
    entry: "./src/main.js",
    output: {
        filename: "build.js", //=>打包后的js文件的名字
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            //=>将后缀.js的文件使用 babel-loader解析 注意排除 node_modules中的js文件
            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            //=>图片路径（一般太大的图片不要变为base64 我们可以设置小于5kb的时候转为base64，超过还是图片即可 5kb（5*1024字节 5120））
            { test: /\.(jpg|gif|png|jpeg)$/i, use: ["url-loader?limit=5120"] }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            //filename: "", //=>最终在dist生成的heml名字，如果不写默认就是inxex.html
            template: "./src/index.html" //=>template 原来的html页面
        })
    ]
};