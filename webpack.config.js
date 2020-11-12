/**
 * webpack.config.js webpack的配置文件
 *      指示webpack干那些事情（当运行webpack指令，会加载这些配置
 * 
 *  所有构建工具都是基于nodejs平台运行的  模块化默认采用commonjs
 */

//resolve用来拼接决定路径的方法

const { resolve } = require('path');

module.exports = {
    //webpack配置
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        filename: 'built.js',//输出的名字
        // path.resolve() : 该方法解析当前相对路径的绝对路径
        // path.join（）：用于路径拼接
        // output 必须是绝对路径，否则报错
        // 方法一：path: path.resolve(__dirname, './dist/'),
        // 方法二：path: path.join(__dirname, './dist/'),
        path: resolve(__dirname, 'build'),//__dirname指当前文件，build输出路径
    },
    //loader的配置
    //     webpack默认只处理js文件，其他非js文件，就需要 loaders 出马

    // （1）注意 loaders 的执行顺序：从下到上，从右到左
    // 在平时配置的时候要在查清楚各个loaders的使用前后规则，否则会报错

    // （2）可以手动干预它们的执行顺序吗？
    // 可以，在use后再加个enforce属性进行配置即可

    // enforce 可选值：pre:提前；post：后置
    //     （3）webpack 所有类型 loaders 的执行顺序：pre > inline > normal > post
    // inline 指的是在模块中使用 import 等语法导入，进行单独处理的情况，具体小可爱们自行查看官网/百度
    module: {
        rules: [
            //详细loader配置
        ]
    },
    //plugins的配置
    plugins: [
        //详细plugins配置
    ],
    //模式
    mode: 'development'
}