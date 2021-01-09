var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');

var app = express();

app.set('view engine','html');
app.set('views', path.join(__dirname,'../client/public'));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/',router);

module.exports=app;