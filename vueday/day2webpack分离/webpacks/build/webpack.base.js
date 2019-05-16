//公共项文件
const path = require('path');
const config = require('../config');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const baseConfig = {
    entry: config.entryPath,
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /\.(eot|svg|ttf|woff|.log)$/,
                loader: 'file-loader',
                options: {
                    name: './font/[name].[ext]'
                }
            }, {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 6000
                }
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}
module.exports = baseConfig;