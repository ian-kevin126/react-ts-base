const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        // webpack5对contenthash算法进行了优化，这里可以在chunkhash和contenthash中选择一个，建议contenthash
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    module: {
        // webpack5对于资源，类似：图片、字体文件等，可以用内置的asset去处理，不用url-loader和file-loader了
        rules: [
            {
                use: 'babel-loader',
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            '@': paths.src,
            '@c': paths.src + '/components',
            '@m': paths.src + '/model',
            '@s': paths.src + '/services',
            '@t': paths.src + '/types',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
