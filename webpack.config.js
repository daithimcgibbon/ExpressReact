var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'public/build');
var APP_DIR = path.resolve(__dirname, 'public/jsx');

module.exports = {
    entry: {
        header: APP_DIR + '/header.jsx',
        info: APP_DIR + '/info.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
