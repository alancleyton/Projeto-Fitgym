const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    filename: './index.html',
    template: './public/index.html'
});

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'app.js',
        path: path.resolve( __dirname, 'public' )
    },

    devServer: {
        port: 3000,
        contentBase: path.join( __dirname, 'public' )
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        htmlPlugin,

        new MiniCssExtractPlugin({
            filename: 'main-styles.css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: { loader: 'babel-loader' },
                exclude: '/node_modules/'
            },

            {
                test: /\.(css|sass|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
                use: { loader: 'file-loader' }
            }
        ]
    }
}