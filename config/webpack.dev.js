const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.base');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    // devtool在开发模式最佳实践是:eval-cheap-module-source-map
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        contentBase: '../dist',
        open: true,
        hot: true,
        // 当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容。 将 devServer.historyApiFallback 设为 true开启
        // 当我们从浏览器的地址栏输入地址回车的时候，如果没有匹配到当前的路由，就会加载不到页面，出现这种问题是因为我们去拿资源的时候服务器
        // 并没有配置相应的找不到路径就返回原本页面，即加载其自己的组件，解决：配置devServer中的historyApiFallback为true
        historyApiFallback: true
    },
    // 注意：这里要设置 target: 'web'才会有热更新效果
    target: 'web',
    plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
