//express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//mongoose
const mongoose = require('mongoose');

//webpack
const webpack = require('webpack');

const webpackConfig = require('./../webpack.config');
const compiler = webpack(webpackConfig);

const webpackDevMiddlewere = require ('webpack-dev-middleware')(
    compiler,
    webpackConfig.devServer);

  
//mongo
mongoose.connect('mongodb://localhost:27017/myDb');
//middleware
app.use(webpackDevMiddlewere);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));



require('./routes')(app);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname +'/../client/public/index.html'));
});

//start server
app.listen(3000,()=>{
    console.log('>>> Open http://127.0.0.1:%s/ in your browser.','3OOO');

    
});