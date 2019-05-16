const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash]-[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
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
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        open: true,
        host: 'localhost',
        hot: true
    }
}