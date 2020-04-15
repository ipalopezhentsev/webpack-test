const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'qqq',
        })],
    output: {
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/env",
                                {
                                    "targets": "> 0.25%, not dead",
                                    "useBuiltIns": "usage",
                                    "corejs": 3,
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    },
};