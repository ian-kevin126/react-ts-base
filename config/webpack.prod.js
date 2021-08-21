const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.base');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: 'production',
    // 生产环境devtool最佳实践是: hidden-source-map
    devtool: 'hidden-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                // 生产环境要抽离css标签，所以这里针对less和css要做特殊处理,一个是postcss处理样式兼容性问题，一个是MiniCssExtractPlugin.loader:
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
        },
    },
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(common, prodConfig);
