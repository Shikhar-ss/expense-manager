var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}.imkcr.mongodb.net/expense-manager?retryWrites=true&w=majority`;

app.set('view engine','html');
app.set('views', path.join(__dirname,'../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/',router);

module.exports=app;