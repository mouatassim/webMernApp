const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


console.log("we call it");

module.exports = {
    watch: true,
    mode: 'development',
  

    entry:
        "./client/index.js",

        
    output: {
        path: __dirname +"/client/public",
        filename: "bundle.js"
    },

    devServer:{
        overlay: true,
        port: 3000,
        watch : true,
       // hot: true,
        color:true
    },

    module:{
        rules:[
            { 
                test: /\.(js|jsx|mjs)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins:[
        new UglifyJsPlugin(),
        
    ]

};
