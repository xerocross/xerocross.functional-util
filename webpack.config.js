const path = require('path')
const webpack = require('webpack')

module.exports = [{
    entry : {
        'index' : './src/index.js'
    },
    output : {
        path : path.resolve(__dirname, './dist'),
        publicPath : '/dist',
        filename : '[name].js',
        library : "SimpleWebpackProj",
        libraryTarget : "umd",
        umdNamedDefine : true
    },
    externals : {
    },
    module : {
        rules : [
        ]
    },
    optimization : {
        minimize : true
    },
    plugins : [
        new webpack.DefinePlugin({
            'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devServer : {
        contentBase : "./public",
        compress : true,
        port : 9000,
        watchContentBase : true
    }
}]