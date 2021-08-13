/*
 * @file: webpack的基础配置
 * @Date: 2020-09-07 14:31:07
 * @author: manyao.zhu
 */
const path = require('path');
const _ = require('lodash');

const loader = require('./webpack.loader');

const webpackConfig = [{
    name: 'qrcode',
    entry: ['babel-polyfill', './qrcode/index.js'],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'qrcode/qrocde.js',
        library: 'QRCodeSdk',
        libraryTarget: 'umd'
    },
    devtool: '#source-map',
    module: {
        rules: _.flatten([loader.eslint, loader.babel])
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    plugins: []
}];

module.exports = webpackConfig;