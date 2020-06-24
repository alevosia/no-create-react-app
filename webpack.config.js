const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            minify: false
        }),
        new MiniCSSExtractPlugin({
            filename: 'static/css/' + '[name].[hash].css',
            chunkFilename: 'static/css/' + '[id].[hash].css',
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        compress: true,
    }
}