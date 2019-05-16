const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prodConfig = {
    mode: config.production.mode,
    output: {
        path: config.production.outputPath,
        filename: '[name].js'
    },
    module: {
        rules: [{ //抽离css
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    devtool: config.production.devtool //调试工具

}

module.exports = webpackMerge(baseConfig, prodConfig);