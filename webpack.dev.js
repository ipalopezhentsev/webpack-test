const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            QQQ: true
        }),
    ],
});