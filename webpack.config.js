const path = require('path')
const webpack = require('webpack')

module.exports = [{
    entry : {
        'functional-utility' : './src/functional-utility.js'
    },
    output : {
        globalObject : "this",
        path : path.resolve(__dirname, './dist'),
        publicPath : '/dist',
        filename : '[name].js',
        library : "xerocross.functionalUtil",
        libraryTarget : "umd",
        umdNamedDefine : true
    },
    externals : {
    },
    module : {
        rules : [
            {
                test : /\.m?js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader',
                }
            }
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