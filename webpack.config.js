const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const paths = {
    index: path.resolve(__dirname, 'src', 'index.js'),
    template: path.resolve(__dirname, 'src', 'index.html'),
};

/** @type {webpack.Configuration} */
module.exports = {
    entry: {
        index: paths.index,
    },
    resolve: {
        extensions: ['.js', '.scss', '.html'],
    },
    module: {
        rules: [
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.png/, use: 'file-loader' },
            { test: /\.svg/, use: 'svg-url-loader' },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin({
            template: paths.template,
        }),
    ],
};
