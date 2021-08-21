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
    },
    // 注意：这里要设置 target: 'web'才会有热更新效果
    target: 'web',
    plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
