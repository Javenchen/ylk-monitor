
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        'sdk':'./src/index.js'
    },
    output: {
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
        filename: 'sdk.js',
        // library:"sdk",
        libraryTarget:"window"
    },
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:"head"
        })
    ]
};