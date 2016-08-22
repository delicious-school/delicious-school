/*eslint node/no-unpublished-require: "off"*/
const webpack = require('webpack');

module.exports = {
    entry: [
        './public/entry.jsx',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: __dirname,
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css' // note style is before css
            }, {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf$/,
                loader: "file-loader"
            }, {
                test: /\.eot$/,
                loader: "file-loader"
            }, {
                test: /\.svg$/,
                loader: "file-loader"
            }, {
                test: require.resolve("jquery"),
                loader: "expose?$!expose?jQuery"
            }
        ]
    },
    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
