const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const data = require('./src/data/data.json');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dists'),
        filename: '[hash]-[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                "presets": ['@babel/preset-env']
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(jpe?g|gif|png)$/,
            loader: 'url-loader',
            options: {
                limit: 6000
            }
        }, {
            test: /\.(log|eot|svg|ttf|woff)$/,
            loader: 'file-loader',
            options: {
                name: './font/[name].[ext]'
            }
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css'),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html'
                // filename: 'app.html',
                // title: '我是标题',
                //inject: true //注入css，js等
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dists/app.html"),
        port: 9090,
        open: true,
        host: 'localhost',
        hot: true,
        before(app) {
            app.get('/getData', (req, res, next) => {
                res.send(data);
            });
        },
        // pooxy: {//代理
        //     'classify/iconlist': 'http://localhost:3000'
        // }
        // inline: true //livereload实时更新
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/css'),
            'style$': path.join(__dirname, './src/scss/index.scss') //精确匹配加$
        }
    }

}