var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();



app.set('view engine','ejs');
app.set('views','./app/views');


app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


app.use(express.static('public'));

consign()
.include('app/routes')
.then('serv_config/conexao_banco.js')
.then('app/controller')
.then('app/model')
.into(app);
module.exports = app;