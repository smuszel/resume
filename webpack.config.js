const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CSSExtract = require('mini-css-extract-plugin');
const path = require('path');

const paths = {
    index: path.resolve(__dirname, 'src', 'index.js'),
    template: path.resolve(__dirname, 'src', 'index.html'),
};

/** @returns {webpack.Configuration} */
module.exports = (_, argv) => ({
    entry: {
        index: paths.index,
    },
    resolve: {
        extensions: ['.js', '.scss', '.html'],
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss/,
                use: [
                    {
                        loader: CSSExtract.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            { test: /\.png/, use: 'file-loader' },
            { test: /\.svg/, use: 'svg-url-loader' },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new CSSExtract(),
        new HtmlPlugin({
            template: paths.template,
            filename: argv.mode === 'production' ? '../index.html' : 'index.html',
        }),
    ],
});
