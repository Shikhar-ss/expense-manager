var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname,'client'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         options: {
          presets: ['@babel/preset-env', '@babel/react']
         }
        },
        {
         test: /\.css$/,
         use: [
             {
         loader: "style-loader"
             },
             {
                loader: "css-loader"
                    }
         ]
        }]
       }
} 