var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.set('view engine','html');
app.set('views', path.join(__dirname,'../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb+srv://myself007:myself007@expense-manager.imkcr.mongodb.net/expense-manager?retryWrites=true&w=majority');

app.use('/',router);

module.exports=app;