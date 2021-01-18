var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');

router.get('/',function(req,res){
    res.render('index')
})

module.exports = router;