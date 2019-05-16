const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const devConfig = {
    mode: config.development.mode,
    module: { //虚拟的
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: config.development.port,
        open: true,
        hot: true,
        host: config.development.host,
        before(app) {
            app.get('/api/getData', (req, res, next) => {
                res.send();
            })
        }
    },
    devtool: config.development.devtool //调试工具
}
module.exports = webpackMerge(baseConfig, devConfig);