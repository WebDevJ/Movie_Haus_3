'use strict'
require('dotenv').config();
var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var path       = require('path');
var request    = require('request');

var app        = express();

// var config = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS
//   }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/')));

app.set('views', './views')
app.set('view engine', 'ejs')


app.route('/')
.get((req, res) => {
  res.render('index.ejs');
});

app.use('/movies', require(path.join(__dirname, '/routes/movies')));

var port = process.env.PORT || 3000;
var server = app.listen(port);
