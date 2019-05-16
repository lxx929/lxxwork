// 配置项设置

const path = require('path');

const config = {
    entryPath: path.join(__dirname, '../src/main.js'),
    development: {
        mode: 'development',
        port: 9000,
        host: 'localhost',
        devtool: 'cheap-eval-source-map'
    },
    production: {
        mode: 'production',
        outputPath: path.join(__dirname, '../dist'),
        devtool: 'cheap-eval-source-map'
    }
}
module.exports = config;