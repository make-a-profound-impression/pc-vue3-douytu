this is project vue3 pc

#### 构建项目

##### Entry
+ 入口（Entry）指示 webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图
##### Output
+ 输出（Output）指示 webpack打包后资源bundles输出到哪里去，以及如何命名
##### Loader
+ Loader让webpack能够去处理那些非js文件（webpack只理解js
##### Plugins
+ 插件（Plugins）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，到重新定义环境的变量等

##### Mode
+ 模式（mode）指示webpack使用相应模式的配置

|  选项 |  描述  |特点
------|------|---------
development|会将process.env.NODE_ENV的值设为development。启用NamedChunksPlugin和NamedModulesPlugin|能让代码本地调试运行的环境
production|会将process.env.NODE_ENV的值设为production。启用FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPlugin，SideEffectsFlagPlugin和UglifyJsPlugin|能让代码优化上线运行的环境

##### webpack配置文件
+ webpack.config.js

